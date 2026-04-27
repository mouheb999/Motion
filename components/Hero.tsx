"use client";

import React from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useT } from "./LanguageProvider";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  const { t } = useT();
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "21624146409";

  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            {t.hero.eyebrow}
          </div>
          <h1>
            {t.hero.titleA}
            <br />
            <em>{t.hero.titleEm}</em>
            <br />
            {t.hero.titleC}
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-actions">
            <a href="#book" className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight />
            </a>
            <a
              href={`https://wa.me/${wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <WhatsAppIcon size={16} fill="currentColor" />
              {t.hero.ctaWa}
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">
                50<span>+</span>
              </span>
              <span className="stat-label">{t.hero.stats.projects}</span>
            </div>
            <div className="stat">
              <span className="stat-num">
                3<span>×</span>
              </span>
              <span className="stat-label">{t.hero.stats.leads}</span>
            </div>
            <div className="stat">
              <span className="stat-num">
                98<span>%</span>
              </span>
              <span className="stat-label">{t.hero.stats.sat}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="logo-container">
            <div className="logo-glow" />
            <div className="logo-ring" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-motion.png"
              alt="Motion Agency Logo"
              className="logo-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
