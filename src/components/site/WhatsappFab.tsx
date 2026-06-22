"use client";

import { useEffect, useState } from "react";
import { company } from "@/data/site";
import { Chat } from "@/components/icons";

export function WhatsappFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={company.whatsapp}
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_30px_-8px_rgba(30,106,255,0.6)] transition-all duration-300 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent/50" />
      <Chat className="relative h-6 w-6" />
    </a>
  );
}
