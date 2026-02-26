"use client";

import Link from "next/link";
import { NAV_LINKS, SERVICES, C } from "../lib/data";

export default function Footer() {
  return (
    <footer style={{ background: C.gray800, color: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 32px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 48, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 7, background: `linear-gradient(135deg,${C.blue},${C.steel})`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700 }}>∞</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em" }}>INFINITY ART PMC</div>
                <div style={{ fontSize: 9, color: C.gray400 }}>Engineering Services Pvt. Ltd. Co.</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: C.gray400, lineHeight: 1.75, maxWidth: 280, marginBottom: 20 }}>
              Professional project management consultancy for India's construction industry — delivered with integrity, precision, and accountability.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["in", "tw", "fb"].map(s => (
                <div key={s} style={{ width: 32, height: 32, borderRadius: 6, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, cursor: "pointer" }}>
                  {s === "in" ? "🔗" : s === "tw" ? "🐦" : "👥"}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.steelLight, marginBottom: 16 }}>Quick Links</div>
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} style={{ textDecoration: "none" }}>
                <div style={{ fontSize: 13, color: C.gray400, marginBottom: 10, cursor: "pointer" }}>{label}</div>
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.steelLight, marginBottom: 16 }}>Our Services</div>
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services#${s.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ fontSize: 13, color: C.gray400, marginBottom: 10, cursor: "pointer" }}>{s.title}</div>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.steelLight, marginBottom: 16 }}>Contact Us</div>
            {[
              ["📍", "Bengaluru, Karnataka, India – 560 001"],
              ["📞", "+91 98XXX XXXXX"],
              ["✉️", "info@infinityartpmc.in"],
              ["🕐", "Mon – Sat: 9:00 AM – 6:00 PM"],
            ].map(([ic, val]) => (
              <div key={val} style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{ic}</span>
                <span style={{ fontSize: 12, color: C.gray400, lineHeight: 1.5 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, padding: "18px 0", fontSize: 11, color: C.gray400 }}>
          <span>© 2024 Infinity Art PMC Engineering Services Pvt. Ltd. Co. All rights reserved.</span>
          <span>Privacy Policy · Terms of Use · Sitemap</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
