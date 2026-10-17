export function getRegistrationEmailHtml(name: string, businessName: string) {
  const firstName = name.split(" ")[0] || "there";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>You're on the list</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #fafaf7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fafaf7; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(62, 64, 149, 0.05);">
                
                <!-- Header with Cream Background and Real Logo -->
                <tr>
                  <td align="center" style="background-color: #fafaf7; padding: 24px 20px; border-bottom: 1px solid #eff2ea;">
                    <img src="https://manuellafoods.co.uk/images/logo.png" alt="Manuella Foods" width="140" style="display: block; max-width: 140px; height: auto; border: 0;" />
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h2 style="color: #3e4095; margin-top: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">
                      You're on the list, ${firstName}.
                    </h2>
                    <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
                      Thanks for registering <strong>${businessName}</strong> for early access to Manuella Foods. 
                    </p>
                    <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
                      We're building a simpler way for trade kitchens to order African and Caribbean wholesale staples. As a registered trade partner, you'll be the first to know when we launch, and you'll get early pricing before we open to the public.
                    </p>

                    <!-- Feature Box -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #eff2ea; border-radius: 12px; margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 10px 0; color: #3e4095; font-weight: 600; font-size: 14px;">What happens next?</p>
                          <ul style="margin: 0; padding-left: 20px; color: #64748b; font-size: 14px; line-height: 1.6;">
                            <li>We'll send you our starter range and early pricing.</li>
                            <li>Our team may give you a quick call to understand your kitchen's needs.</li>
                            <li>You'll get priority access when we launch in December.</li>
                          </ul>
                        </td>
                      </tr>
                    </table>

                    <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                      If you have any questions in the meantime, just reply to this email.
                    </p>
                    
                    <p style="color: #3e4095; font-size: 16px; font-weight: 600; margin-bottom: 0;">
                      The Manuella Foods Team
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td align="center" style="background-color: #fafaf7; padding: 20px; border-top: 1px solid #eff2ea;">
                    <p style="color: #94a3b8; font-size: 12px; margin: 0; line-height: 1.5;">
                      <strong>Manuella Foods Ltd</strong><br>
                      Registered in England &amp; Wales · Company No. 14725282<br>
                      Watford-based · Delivering across N &amp; W London and the M1/M25 corridor.<br><br>
                      © 2026 Manuella Foods Ltd. All rights reserved.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}