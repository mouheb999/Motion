"use client";

import React from "react";
import { useT } from "./LanguageProvider";

export default function Marquee() {
  const { t } = useT();
  const loop = [...t.marquee, ...t.marquee];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {loop.map((label, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
