"use client";

import React from "react";
import { useT } from "./LanguageProvider";
import type { Lang } from "@/lib/dictionaries";

const options: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export default function LanguageToggle() {
  const { lang, setLang, t } = useT();
  return (
    <div className="lang-toggle" role="group" aria-label={t.nav.langLabel}>
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          className={`lang-btn${lang === o.code ? " active" : ""}`}
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
