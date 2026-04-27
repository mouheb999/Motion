"use client";

import React from "react";
import Script from "next/script";

type Props = {
  url: string;
  /** Pixel height of the embed. Calendly recommends ~700px. */
  height?: number;
};

/**
 * Inline Calendly widget themed to match the Motion design.
 * The Calendly script auto-detects `.calendly-inline-widget` on load and
 * mounts the iframe. We use `next/script` with `lazyOnload` so it never
 * blocks the page.
 */
export default function CalendlyEmbed({ url, height = 720 }: Props) {
  // Theme params keep the iframe visually consistent with the dark UI.
  const params = new URLSearchParams({
    hide_event_type_details: "0",
    hide_gdpr_banner: "1",
    background_color: "0a1326",
    text_color: "e8ecf7",
    primary_color: "1c5fff",
  });
  const themedUrl = `${url}?${params.toString()}`;

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={themedUrl}
        style={{ minWidth: 320, height, width: "100%" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
