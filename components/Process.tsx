"use client";

import React from "react";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function Process() {
  const { t } = useT();
  return (
    <section id="process" style={{ background: "var(--navy)" }}>
      <div className="container">
        <div style={{ maxWidth: 560 }}>
          <div className="section-tag">{t.process.tag}</div>
          <h2 className="section-title">{t.process.title}</h2>
        </div>
        <Reveal className="process-steps">
          {t.process.steps.map((s, i) => (
            <div key={i} className="step">
              <div className="step-num">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
