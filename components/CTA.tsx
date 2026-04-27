"use client";

import React from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import CalendlyEmbed from "./CalendlyEmbed";
import { useT } from "./LanguageProvider";

const ArrowRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CTA() {
  const { t } = useT();
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "21624146409";
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <section className="cta-section" id="book">
      <div className="container">
        <div className="section-tag">{t.cta.tag}</div>
        <h2 className="section-title">
          {t.cta.titleA}
          <br />
          {t.cta.titleB}
        </h2>
        <p
          className="section-sub"
          style={{ maxWidth: 500, margin: "16px auto 0" }}
        >
          {t.cta.sub}
        </p>

        {calendly ? (
          <div className="calendly-wrap">
            <CalendlyEmbed url={calendly} />
          </div>
        ) : (
          <div className="calendly-fallback">
            <div className="calendly-fallback-icon">📅</div>
            <div className="calendly-fallback-title">{t.cta.fallback.title}</div>
            <p className="calendly-fallback-sub">
              {t.cta.fallback.sub} <code>.env.local</code>{" "}
              {t.cta.fallback.envHint}
            </p>
            <pre className="calendly-fallback-code">
              <span style={{ color: "var(--blue-light)" }}>
                NEXT_PUBLIC_CALENDLY_URL
              </span>
              =https://calendly.com/your-link/30min
            </pre>
          </div>
        )}

        <div className="cta-actions">
          <a
            href={calendly || "#book"}
            target={calendly ? "_blank" : undefined}
            rel={calendly ? "noopener noreferrer" : undefined}
            className="btn-primary"
            style={{ fontSize: 16, padding: "18px 36px" }}
          >
            {calendly ? t.cta.openCalendly : t.cta.schedule}
            <ArrowRight size={18} />
          </a>
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn"
          >
            <WhatsAppIcon size={18} fill="currentColor" />
            {t.cta.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
