"use client";

import React from "react";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

export default function About() {
  const { t } = useT();
  return (
    <section className="about-section" id="about">
      <div className="container">
        <Reveal className="about-wrap">
          <div>
            <div className="section-tag">{t.about.tag}</div>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="section-sub" style={{ marginTop: 16 }}>
              {t.about.sub}
            </p>
            <div className="about-features">
              {t.about.features.map((f) => (
                <div className="about-feat" key={f.title}>
                  <div className="feat-icon">{f.icon}</div>
                  <div>
                    <div className="feat-title">{f.title}</div>
                    <div className="feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="about-visual-title">{t.about.deliverTitle}</div>
            {t.about.metrics.map((m) => (
              <div className="metric-row" key={m.label}>
                <div className="metric-label">
                  <span>{m.label}</span>
                  <span className="metric-val">{m.value}%</span>
                </div>
                <div className="metric-bar">
                  <div
                    className="metric-fill"
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="about-stats-row">
              <div>
                <div className="about-stat-num">{t.about.stat1.value}</div>
                <div className="about-stat-label">{t.about.stat1.label}</div>
              </div>
              <div>
                <div className="about-stat-num">{t.about.stat2.value}</div>
                <div className="about-stat-label">{t.about.stat2.label}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
