"use client";

import React from "react";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function Packages() {
  const { t } = useT();
  const items = [
    { key: "starter", icon: "🚀", featured: false, ...t.packages.items.starter },
    { key: "growth", icon: "📈", featured: true, ...t.packages.items.growth },
    { key: "business", icon: "🏛️", featured: false, ...t.packages.items.business },
  ];

  return (
    <section className="packages" id="packages">
      <div className="container">
        <div
          style={{
            textAlign: "center",
            maxWidth: 600,
            margin: "0 auto 56px",
          }}
        >
          <div className="section-tag">{t.packages.tag}</div>
          <h2 className="section-title">
            {t.packages.titleA}
            <br />
            {t.packages.titleB}
          </h2>
          <p className="section-sub">{t.packages.sub}</p>
        </div>
        <Reveal className="packages-grid">
          {items.map((p) => (
            <div
              key={p.key}
              className={`pkg-card${p.featured ? " featured" : ""}`}
            >
              {p.featured && <div className="pkg-badge">{t.packages.badge}</div>}
              <div className="pkg-icon">{p.icon}</div>
              <div className="pkg-name">{p.name}</div>
              <div className="pkg-desc">{p.desc}</div>
              <div className="pkg-price">{p.price}</div>
              <div className="pkg-price-note">{t.packages.priceNote}</div>
              <ul className="pkg-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="check" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#book" className="pkg-btn">
                {t.packages.cta}
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
