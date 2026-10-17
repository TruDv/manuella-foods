"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitRegistration } from "@/app/register/actions"; // <-- ADDED

const ease = [0.16, 1, 0.3, 1] as const;

type FormData = {
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  businessType: string;
  businessTypeOther: string;
  cuisineFocus: string;
  postcodeArea: string;
  weeklySpend: string;
  bestTimeToCall: string;
  consent: boolean;
};

const initialData: FormData = {
  businessName: "",
  contactName: "",
  phone: "",
  email: "",
  businessType: "",
  businessTypeOther: "",
  cuisineFocus: "",
  postcodeArea: "",
  weeklySpend: "",
  bestTimeToCall: "",
  consent: false,
};

const businessTypes = [
  "Restaurant / Takeaway",
  "Caterer",
  "Bulk kitchen / Contract catering",
  "Grocery / Retail",
  "Other",
];

const cuisineFocusOptions = ["West African", "Caribbean", "Both / Mixed"];

const postcodeAreas = [
  "EN4", "EN5",
  "HA0", "HA1", "HA2", "HA3", "HA4", "HA8", "HA9",
  "N12",
  "NW2", "NW9", "NW10",
  "UB3", "UB4", "UB6", "UB7", "UB8", "UB9", "UB10",
  "W10",
  "WD3", "WD6", "WD17", "WD18", "WD23", "WD24", "WD25",
  "Other / outside these areas",
];

const weeklySpendOptions = [
  "Under £250",
  "£250–£750",
  "£750–£1,500",
  "Over £1,500",
  "Prefer not to say",
];

export function RegisterForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [globalError, setGlobalError] = useState(""); // <-- ADDED

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[key];
      return next;
    });
  }

  function validate(): boolean {
    const e: Record<string, string> = {};

    if (!data.businessName.trim()) e.businessName = "Required";
    if (!data.contactName.trim()) e.contactName = "Required";
    if (!data.phone.trim()) e.phone = "Required";
    else if (!/^[+\d][\d\s()-]{8,}$/.test(data.phone.trim()))
      e.phone = "Enter a valid phone number";
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email))
      e.email = "Enter a valid email";
    if (!data.businessType) e.businessType = "Required";
    if (data.businessType === "Other" && !data.businessTypeOther.trim())
      e.businessTypeOther = "Please specify";
    if (!data.cuisineFocus) e.cuisineFocus = "Required";
    if (!data.postcodeArea) e.postcodeArea = "Required";
    if (!data.consent) e.consent = "Please confirm to continue";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setGlobalError(""); // <-- ADDED: Clear old errors on new submit

    if (!validate()) {
      // scroll to top of form on error
      const el = document.getElementById("register-form");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    
    setSubmitting(true);

    // <-- CHANGED: Real Supabase call instead of mock timeout
    const result = await submitRegistration(data);

    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setGlobalError(result.error || "Something went wrong. Please try again.");
      const el = document.getElementById("register-form");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="rounded-3xl border border-navy/10 bg-white p-10 text-center shadow-sm"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan/15 text-cyan">
          <Check className="h-6 w-6" strokeWidth={3} />
        </div>
        <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-navy">
          You're registered.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-navy/60">
          Thanks, {data.contactName.split(" ")[0] || "friend"}. We'll be in
          touch with the starter range and pricing
          {data.bestTimeToCall
            ? ` - we'll aim to call you back during ${data.bestTimeToCall.toLowerCase()}.`
            : " shortly."}
        </p>
        <div className="mt-8">
          <Button
            asChild
            className="h-11 rounded-full bg-navy px-6 text-sm font-medium text-white hover:bg-navy-dark"
          >
            <a href="/">Back to home</a>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      id="register-form"
      onSubmit={submit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      noValidate
      className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-10"
    >
      {/* <-- ADDED: Global Error Display */}
      {globalError && (
        <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
          {globalError}
        </div>
      )}

      {/* ============================================================
          SECTION 1 - About your business
         ============================================================ */}
      <SectionLabel>About your business</SectionLabel>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Business name"
          required
          value={data.businessName}
          onChange={(v) => update("businessName", v)}
          error={errors.businessName}
          placeholder="e.g. Mama's Kitchen"
        />
        <Field
          label="Contact name"
          required
          value={data.contactName}
          onChange={(v) => update("contactName", v)}
          error={errors.contactName}
          placeholder="Full name"
        />
        <Field
          label="Phone number"
          required
          type="tel"
          value={data.phone}
          onChange={(v) => update("phone", v)}
          error={errors.phone}
          placeholder="07xxx xxx xxx"
        />
        <Field
          label="Email"
          optional
          type="email"
          value={data.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          placeholder="you@business.co.uk"
        />
        <FieldSelect
          label="Business type"
          required
          value={data.businessType}
          onChange={(v) => update("businessType", v)}
          options={businessTypes}
          error={errors.businessType}
        />
        {data.businessType === "Other" && (
          <Field
            label="Please specify"
            required
            value={data.businessTypeOther}
            onChange={(v) => update("businessTypeOther", v)}
            error={errors.businessTypeOther}
            placeholder="e.g. Cloud kitchen"
          />
        )}
      </div>

      {/* ============================================================
          SECTION 2 - About your kitchen
         ============================================================ */}
      <SectionLabel className="mt-10">About your kitchen</SectionLabel>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FieldSelect
          label="Cuisine focus"
          required
          value={data.cuisineFocus}
          onChange={(v) => update("cuisineFocus", v)}
          options={cuisineFocusOptions}
          error={errors.cuisineFocus}
        />
        <FieldSelect
          label="Postcode area"
          required
          value={data.postcodeArea}
          onChange={(v) => update("postcodeArea", v)}
          options={postcodeAreas}
          error={errors.postcodeArea}
        />
      </div>
      <p className="mt-3 text-[12px] text-navy/45">
        We deliver across N &amp; W London and along the M1/M25 corridor.
      </p>

      {/* ============================================================
          SECTION 3 - A little more (optional)
         ============================================================ */}
      <SectionLabel className="mt-10">
        A little more
        <span className="ml-2 text-[11px] font-normal normal-case tracking-normal text-navy/40">
          optional
        </span>
      </SectionLabel>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FieldSelect
          label="Roughly how much do you spend on food supplies per week?"
          optional
          value={data.weeklySpend}
          onChange={(v) => update("weeklySpend", v)}
          options={weeklySpendOptions}
        />
        <Field
          label="Best time to call you back"
          optional
          value={data.bestTimeToCall}
          onChange={(v) => update("bestTimeToCall", v)}
          placeholder="e.g. Weekday mornings"
        />
      </div>

      {/* ============================================================
          Consent + Submit
         ============================================================ */}
      <div className="mt-10 border-t border-navy/10 pt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={data.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy/20 text-cyan focus:ring-cyan"
          />
          <span className="text-[13px] leading-relaxed text-navy/70">
            I'm happy for Manuella Foods to contact me about my trade
            registration and early pricing.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-2 text-[12px] text-red-500">{errors.consent}</p>
        )}

        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="submit"
            disabled={submitting}
            className="group h-12 w-full rounded-full bg-cyan px-7 text-sm font-semibold text-navy shadow-sm transition-all hover:bg-cyan-light hover:shadow-md disabled:opacity-70 sm:w-auto"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Register now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </Button>

          <p className="text-[12px] text-navy/45">
            Free · Trade only · No commitment
          </p>
        </div>
      </div>
    </motion.form>
  );
}

/* ---------- helpers ---------- */

function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan",
        className
      )}
    >
      {children}
    </p>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  hint,
  type = "text",
  optional = false,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  hint?: string;
  type?: string;
  optional?: boolean;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-2 text-[13px] font-medium text-navy">
        {label}
        {required && <span className="text-cyan">*</span>}
        {optional && !required && (
          <span className="text-[11px] font-normal text-navy/40">
            optional
          </span>
        )}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "h-11 w-full rounded-xl border bg-white px-4 text-sm text-navy outline-none transition-all placeholder:text-navy/30",
          error
            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
            : "border-navy/15 focus:border-cyan focus:ring-2 focus:ring-cyan/15"
        )}
      />
      {hint && !error && (
        <p className="mt-1.5 text-[11px] text-navy/40">{hint}</p>
      )}
      {error && <p className="mt-1.5 text-[11px] text-red-500">{error}</p>}
    </div>
  );
}

function FieldSelect({
  label,
  value,
  onChange,
  options,
  error,
  hint,
  optional = false,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
  hint?: string;
  optional?: boolean;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-2 text-[13px] font-medium text-navy">
        {label}
        {required && <span className="text-cyan">*</span>}
        {optional && !required && (
          <span className="text-[11px] font-normal text-navy/40">
            optional
          </span>
        )}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition-all",
          value ? "text-navy" : "text-navy/40",
          error
            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
            : "border-navy/15 focus:border-cyan focus:ring-2 focus:ring-cyan/15"
        )}
      >
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-navy">
            {opt}
          </option>
        ))}
      </select>
      {hint && !error && (
        <p className="mt-1.5 text-[11px] text-navy/40">{hint}</p>
      )}
      {error && <p className="mt-1.5 text-[11px] text-red-500">{error}</p>}
    </div>
  );
}