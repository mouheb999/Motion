"use client";

import React, { useEffect, useState } from "react";
import { useT } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useT();
  const [open, setOpen] = useState(false);

  // Close on resize back to desktop and lock body scroll while open.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const links = [
    { href: "#packages", label: t.nav.packages },
    { href: "#process", label: t.nav.process },
    { href: "#projects", label: t.nav.portfolio },
    { href: "#about", label: t.nav.about },
  ];

  return (
    <>
      <nav>
        <a href="#" className="nav-logo" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-motion.png" alt="Motion Agency" />
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <LanguageToggle />
          <a href="#book" className="nav-cta">
            {t.nav.cta}
          </a>
          <button
            type="button"
            className={`nav-toggle${open ? " is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down panel */}
      <div className={`nav-mobile${open ? " is-open" : ""}`} aria-hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#book" className="nav-cta" onClick={close}>
          {t.nav.cta}
        </a>
      </div>
      {open && <div className="nav-backdrop" onClick={close} />}
    </>
  );
}
