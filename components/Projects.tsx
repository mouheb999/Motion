"use client";

import React from "react";
import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Projects() {
  const { t } = useT();

  const items = [
    {
      key: "drivelux",
      image: "/portfolio/carrent.png",
      alt: "DriveLux Car Rental website preview",
      ...t.projects.items.drivelux,
    },
    {
      key: "elite",
      image: "/portfolio/dentist.png",
      alt: "Elite Dental Clinic website preview",
      ...t.projects.items.elite,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <div className="section-tag">{t.projects.tag}</div>
            <h2 className="section-title">
              {t.projects.titleA}
              <br />
              {t.projects.titleB}
            </h2>
          </div>
          <a href="#" className="btn-ghost" style={{ whiteSpace: "nowrap" }}>
            {t.projects.viewAll}
          </a>
        </div>
        <Reveal className="projects-grid">
          {items.map((p) => (
            <div className="project-card" key={p.key}>
              <div className="project-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.alt} loading="lazy" />
              </div>
              <div className="project-body">
                <span className="project-tag">{p.tag}</span>
                <div className="project-name">{p.name}</div>
                <div className="project-problem">{t.projects.problemLabel}</div>
                <p className="project-desc">{p.problem}</p>
                <div className="project-problem">{t.projects.builtLabel}</div>
                <p className="project-desc">{p.built}</p>
                <div className="project-result">
                  <span className="result-arrow">↑</span>
                  <span className="result-text">{p.result}</span>
                </div>
                <a href="#" className="project-link">
                  {t.projects.viewProject} <ArrowRight />
                </a>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
