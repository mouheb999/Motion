"use client";

import React from "react";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function Testimonials() {
  const { t } = useT();
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div
          style={{
            textAlign: "center",
            maxWidth: 520,
            margin: "0 auto 16px",
          }}
        >
          <div className="section-tag">{t.testimonials.tag}</div>
          <h2 className="section-title">{t.testimonials.title}</h2>
        </div>
        <Reveal className="testi-grid">
          {t.testimonials.items.map((tt) => (
            <div key={tt.name} className="testi-card">
              <div className="testi-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>
              <div className="testi-quote">{tt.quote}</div>
              <div className="testi-author">
                <div className="testi-avatar">{tt.initials}</div>
                <div>
                  <div className="testi-name">{tt.name}</div>
                  <div className="testi-role">{tt.role}</div>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
