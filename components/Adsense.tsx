"use client";
import { useEffect } from "react";

interface AdsenseProps {
  slot: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function Adsense({ slot }: AdsenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3402648015244749"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
