"use server";

import { createServerClient } from "@/lib/supabase/server";
import { Resend } from "resend";
import { getRegistrationEmailHtml } from "@/lib/emails/RegistrationEmail"; // <-- IMPORT

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitRegistration(data: any) {
  const supabase = createServerClient();

  // 1. Check if email exists
  if (data.email) {
    const { data: existing } = await supabase
      .from("registrations")
      .select("id")
      .eq("email", data.email.trim().toLowerCase())
      .maybeSingle();

    if (existing) {
      return { success: false, error: "This email is already registered." };
    }
  }

  // 2. Insert into database
  const { error } = await supabase.from("registrations").insert({
    business_name: data.businessName,
    contact_name: data.contactName,
    phone: data.phone,
    email: data.email ? data.email.trim().toLowerCase() : null,
    business_type: data.businessType,
    business_type_other: data.businessTypeOther,
    cuisine_focus: data.cuisineFocus,
    postcode_area: data.postcodeArea,
    weekly_spend: data.weeklySpend,
    best_time_to_call: data.bestTimeToCall,
    consent: data.consent,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error: error.message };
  }

  // 3. Send Emails via Resend
  try {
    // A. Confirmation email to the customer
    if (data.email) {
      await resend.emails.send({
        from: "Manuella Foods <info@manuellafoods.co.uk>", // <-- Your verified email
        to: data.email,
        cc: ["kingsleybere@gmail.com"], // This copies them in
        subject: "You're on the Manuella Foods trade list",
        html: getRegistrationEmailHtml(data.contactName, data.businessName), // <-- USING THE TEMPLATE
      });
    }

    // B. Notification email to YOU (Admin)
    await resend.emails.send({
      from: "Manuella System <hello@manuellafoods.co.uk>",
      to: "your-email@example.com", // <--- CHANGE THIS TO YOUR ACTUAL EMAIL
      subject: `New Registration: ${data.businessName}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #3e4095;">New Trade Registration</h2>
          <p><strong>Business:</strong> ${data.businessName}</p>
          <p><strong>Contact:</strong> ${data.contactName}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email || "Not provided"}</p>
          <p><strong>Area:</strong> ${data.postcodeArea}</p>
          <p><strong>Type:</strong> ${data.businessType} ${data.businessTypeOther ? `(${data.businessTypeOther})` : ""}</p>
          <p><strong>Weekly Spend:</strong> ${data.weeklySpend || "Not specified"}</p>
          <hr style="border: 1px solid #eff2ea; margin: 20px 0;" />
          <p><a href="https://manuellafoods.co.uk/admin" style="background-color: #3e4095; color: white; padding: 10px 20px; text-decoration: none; border-radius: 20px; display: inline-block;">Go to Admin Dashboard</a></p>
        </div>
      `,
    });
  } catch (emailError: any) {
    console.error("Resend Error:", emailError?.message || emailError);
    return { 
      success: false, 
      error: `Registration saved, but email failed: ${emailError?.message || "Unknown error"}` 
    };
  }

  return { success: true };
}