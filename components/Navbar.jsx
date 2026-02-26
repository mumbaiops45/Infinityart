"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, C } from "../lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isHome = pathname === "/";
  const navBg = scrolled || !isHome ? C.white : "transparent";
  const navShadow = scrolled || !isHome ? "0 2px 16px rgba(30,77,140,0.09)" : "none";
  const navBorder = scrolled || !isHome ? `1px solid ${C.border}` : "none";

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: navBg, borderBottom: navBorder, boxShadow: navShadow, transition: "all 0.3s" }}>
        
        <div style={{ height: 3, background: `linear-gradient(90deg,${C.blue},${C.steel},${C.steelLight})` }} />
        <div style={{ background: "white", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", height: 66, gap: 8 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: "auto" }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: `linear-gradient(135deg,${C.blue},${C.steel})`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, flexShrink: 0 }}>∞</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.blue, letterSpacing: "0.06em", lineHeight: 1.2 }}>INFINITY ART PMC</div>
              <div style={{ fontSize: 9, color: C.muted }}>Engineering Services Pvt. Ltd. Co.</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", gap: 2, alignItems: "center" }} className="desktop-nav">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link key={href} href={href} style={{ textDecoration: "none" }}>
                  <span style={{ display: "block", padding: "8px 12px", borderRadius: 6, fontSize: 13, fontWeight: active ? 700 : 500, color: active ? C.blue : C.muted, background: active ? C.bluePale : "transparent", transition: "all 0.15s" }}>
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button style={{ background: C.blue, border: "none", color: "#fff", fontSize: 12, fontWeight: 600, padding: "10px 20px", borderRadius: 8, cursor: "pointer", whiteSpace: "nowrap", marginLeft: 8 }}>
              Enquire Now
            </button>
          </Link>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: `1px solid ${C.border}`, color: C.text, fontSize: 18, cursor: "pointer", padding: "6px 10px", borderRadius: 6, marginLeft: 8 }} className="burger">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: C.white, borderTop: `1px solid ${C.border}`, padding: "12px 32px 20px" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                <div style={{ padding: "10px 0", fontSize: 14, fontWeight: 500, color: pathname === href ? C.blue : C.muted, borderBottom: `1px solid ${C.gray100}` }}>
                  {label}
                </div>
              </Link>
            ))}
            <Link href="/contact" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
              <button style={{ background: C.blue, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, padding: "11px 24px", borderRadius: 8, cursor: "pointer", marginTop: 12, width: "100%" }}>
                Enquire Now
              </button>
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </>
  );
}
