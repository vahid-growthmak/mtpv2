"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";

const inputClass =
  "rounded-xl border border-line bg-white px-4 h-12 focus:border-accent outline-none transition-colors text-[15px] text-ink placeholder:text-ink-muted/70";

export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface-alt p-8 md:p-10">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <h3 className="text-[20px] font-medium text-ink">Application received</h3>
        <p className="max-w-md text-[15px] leading-relaxed text-ink-muted">
          Thanks — our channel team will review your details and be in touch within two business days to confirm fit and next steps.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-ghost mt-2"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-4 rounded-2xl border border-line bg-white p-7 sm:grid-cols-2 md:p-8"
    >
      <label className="flex flex-col gap-2 text-[13px] font-medium text-ink">
        Company name
        <input name="company" required placeholder="Your company" className={inputClass} />
      </label>
      <label className="flex flex-col gap-2 text-[13px] font-medium text-ink">
        Contact name
        <input name="contact" required placeholder="Full name" className={inputClass} />
      </label>
      <label className="flex flex-col gap-2 text-[13px] font-medium text-ink">
        Work email
        <input type="email" name="email" required placeholder="you@company.com" className={inputClass} />
      </label>
      <label className="flex flex-col gap-2 text-[13px] font-medium text-ink">
        Phone
        <input type="tel" name="phone" placeholder="+971 …" className={inputClass} />
      </label>
      <label className="flex flex-col gap-2 text-[13px] font-medium text-ink">
        Country
        <select name="country" required defaultValue="UAE" className={inputClass}>
          <option value="UAE">UAE</option>
          <option value="Oman">Oman</option>
          <option value="KSA">KSA</option>
          <option value="Qatar">Qatar</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 text-[13px] font-medium text-ink">
        Business type
        <select name="businessType" required defaultValue="System Integrator" className={inputClass}>
          <option value="System Integrator">System Integrator</option>
          <option value="Reseller">Reseller</option>
          <option value="ELV Contractor">ELV Contractor</option>
          <option value="Consultant">Consultant</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 text-[13px] font-medium text-ink sm:col-span-2">
        Brands of interest
        <input name="brands" placeholder="e.g. Bosch, Milesight, SAFR …" className={inputClass} />
      </label>
      <label className="flex flex-col gap-2 text-[13px] font-medium text-ink sm:col-span-2">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your verticals and the projects you are pursuing."
          className="rounded-xl border border-line bg-white px-4 py-3 focus:border-accent outline-none transition-colors text-[15px] text-ink placeholder:text-ink-muted/70"
        />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-accent w-full sm:w-auto">
          Submit application <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-3 text-[13px] text-ink-muted">
          We will only use your details to assess partnership fit. No spam.
        </p>
      </div>
    </form>
  );
}
