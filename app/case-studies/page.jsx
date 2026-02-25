"use client";
import { useState } from "react";
import Link from "next/link";
import { C, CASE_STUDIES } from "../../lib/data";

export default function CaseStudiesPage() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Proven Results</div>
          <h1 className="section-title" style={{ fontSize: "clamp(32px,4vw,52px)", maxWidth: 600 }}>
            Case <span className="blue">Studies</span>
          </h1>
          <p className="para" style={{ maxWidth: 520, marginTop: 14 }}>
            Real challenges. Real solutions. Measurable outcomes. See how Infinity Art PMC has delivered transformative results for our clients.
          </p>
        </div>
      </div>

      {/* Overview cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 72 }}>
            {CASE_STUDIES.map((cs, i) => (
              <div key={cs.slug} onClick={() => { setActive(i); document.getElementById("detail").scrollIntoView({ behavior: "smooth" }); }}
                style={{ background: active === i ? C.bluePale : "#fff", border: `${active === i ? 2 : 1}px solid ${active === i ? C.blue : C.border}`, borderRadius: 12, padding: "24px", cursor: "pointer", transition: "all 0.2s" }}>
                <div style={{ display: "inline-block", background: active === i ? C.blue : C.bluePale, color: active === i ? "#fff" : C.blue, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", padding: "3px 10px", borderRadius: 20, marginBottom: 14 }}>{cs.tag}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, lineHeight: 1.4 }}>{cs.title}</h3>
                <div style={{ display: "flex", gap: 20, marginBottom: 16 }}>
                  <div><div style={{ fontSize: 26, fontWeight: 700, color: C.blue }}>{cs.m1v}</div><div style={{ fontSize: 11, color: C.muted }}>{cs.m1l}</div></div>
                  <div><div style={{ fontSize: 26, fontWeight: 700, color: C.blue }}>{cs.m2v}</div><div style={{ fontSize: 11, color: C.muted }}>{cs.m2l}</div></div>
                </div>
                <div style={{ display: "flex", gap: 8, fontSize: 11, color: C.muted }}>
                  <span>🏗 {cs.sector}</span>
                  <span>📍 {cs.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detail */}
          <div id="detail" style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 14, boxShadow: "0 6px 30px rgba(30,77,140,0.10)", overflow: "hidden" }}>
            <div style={{ background: C.blue, padding: "28px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{CASE_STUDIES[active].tag}</div>
                <h2 style={{ color: "#fff", fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 700, maxWidth: 600 }}>{CASE_STUDIES[active].title}</h2>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                {[["🏗", CASE_STUDIES[active].sector], ["📍", CASE_STUDIES[active].location], ["⏱", CASE_STUDIES[active].duration], ["👤", CASE_STUDIES[active].client]].map(([ic, v]) => (
                  <div key={v} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 14 }}>{ic}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", marginTop: 3 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
              {[
                ["The Challenge", "🔴", CASE_STUDIES[active].challenge],
                ["Our Solution", "🔵", CASE_STUDIES[active].solution],
                ["The Outcome", "🟢", CASE_STUDIES[active].outcome],
              ].map(([title, ic, text]) => (
                <div key={title} style={{ padding: "32px 28px", borderRight: title !== "The Outcome" ? `1px solid ${C.border}` : "none" }}>
                  <div style={{ fontSize: 14, marginBottom: 8 }}>{ic}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: C.blue, marginBottom: 14 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75 }}>{text}</p>
                </div>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${C.border}`, padding: "24px 28px", display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
              {[[CASE_STUDIES[active].m1v, CASE_STUDIES[active].m1l], [CASE_STUDIES[active].m2v, CASE_STUDIES[active].m2l]].map(([v, l]) => (
                <div key={l} style={{ textAlign: "center", padding: "0 24px", borderRight: `1px solid ${C.border}`, lastChild: { border: "none" } }}>
                  <div style={{ fontSize: 38, fontWeight: 700, color: C.blue }}>{v}</div>
                  <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>{l}</div>
                </div>
              ))}
              <div style={{ textAlign: "center", padding: "0 24px" }}>
                <div style={{ fontSize: 38, fontWeight: 700, color: C.blue }}>{CASE_STUDIES[active].sector}</div>
                <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>Project Sector</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Our Methodology</div>
            <h2 className="section-title">How We Achieve <span className="blue">Results</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {[["🔍","Diagnose","We conduct a thorough diagnostic of the project's current state before recommending any intervention."],["📐","Plan","A structured action plan is developed with clear milestones, owners, and success metrics."],["⚙️","Execute","We deploy our team on-site and implement the plan with daily monitoring and course correction."],["📊","Report","Regular, transparent reporting ensures clients have full visibility of progress and outcomes."]].map(([ic, t, d]) => (
              <div key={t} className="card">
                <div style={{ fontSize: 28, marginBottom: 12 }}>{ic}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.blue, padding: "72px 32px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "#fff", marginBottom: 14 }}>Facing a Project Challenge?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>Our experts have seen and solved it before. Let us help you achieve exceptional outcomes.</p>
          <Link href="/contact" style={{ background: "#fff", color: C.blue, textDecoration: "none", fontSize: 13, fontWeight: 700, padding: "13px 32px", borderRadius: 8 }}>Talk to Our Team →</Link>
        </div>
      </section>
    </>
  );
}
