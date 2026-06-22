"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/icons";

const enquiryTypes = ["Partner", "Sales", "Vendor", "Support"] as const;

const labelClass = "mb-2 block text-[13px] font-medium text-ink";
const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 h-12 text-[15px] text-ink placeholder:text-ink-muted/70 focus:border-accent outline-none transition-colors";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-line bg-surface-alt p-8 md:p-10">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <h3 className="display mt-5 text-[24px] text-ink">Enquiry received</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-muted">
          Thanks — we&rsquo;ll route your enquiry to the right desk.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn btn-ghost mt-8"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-6 md:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="enquiryType" className={labelClass}>
            Enquiry type
          </label>
          <select id="enquiryType" name="enquiryType" required className={`${inputClass} appearance-none`}>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full name
            </label>
            <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="company" className={labelClass}>
              Company
            </label>
            <input id="company" name="company" type="text" required placeholder="Company name" className={inputClass} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClass}>
              Work email
            </label>
            <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input id="phone" name="phone" type="tel" placeholder="+971 ..." className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, brands or opportunity."
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/70 focus:border-accent outline-none transition-colors"
          />
        </div>

        <button type="submit" className="btn btn-accent w-full">
          Send enquiry <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
