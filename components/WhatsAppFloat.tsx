"use client";

import React from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useT } from "./LanguageProvider";

export default function WhatsAppFloat() {
  const { t, lang } = useT();
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "21624146409";
  const messageEn =
    "Hi Motion, I'd like to learn more about your services.";
  const messageFr =
    "Bonjour Motion, j'aimerais en savoir plus sur vos services.";
  const message = encodeURIComponent(lang === "fr" ? messageFr : messageEn);

  return (
    <a
      href={`https://wa.me/${wa}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.hero.ctaWa}
      className="wa-float"
    >
      <WhatsAppIcon size={26} fill="white" />
    </a>
  );
}
