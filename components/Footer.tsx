"use client";

import React from "react";
import { useT } from "./LanguageProvider";

export default function Footer() {
  const { t } = useT();
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "21624146409";

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-motion.png" alt="Motion Agency" />
            </div>
            <p className="footer-tagline">{t.footer.tagline}</p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                ig
              </a>
              <a href="#" className="social-link" aria-label="Twitter / X">
                tw
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              <li>
                <a href="#">{t.footer.quick.home}</a>
              </li>
              <li>
                <a href="#process">{t.footer.quick.process}</a>
              </li>
              <li>
                <a href="#projects">{t.footer.quick.portfolio}</a>
              </li>
              <li>
                <a href="#about">{t.footer.quick.about}</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.servicesH}</h4>
            <ul>
              <li>
                <a href="#">{t.footer.services.web}</a>
              </li>
              <li>
                <a href="#">{t.footer.services.leadgen}</a>
              </li>
              <li>
                <a href="#">{t.footer.services.automation}</a>
              </li>
              <li>
                <a href="#">{t.footer.services.seo}</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.contact}</h4>
            <ul>
              <li>
                <a href="mailto:hello@motionagency.com">
                  hello@motionagency.com
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">{t.footer.copyright}</span>
          <span className="footer-copy">{t.footer.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
