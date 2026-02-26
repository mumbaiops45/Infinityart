"use client";
import { useState } from "react";
import Link from "next/link";
import { C, CASE_STUDIES } from "../../lib/data";
import CaseStudies from "../../components/CaseStudies";

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
      <CaseStudies/>

      {/* Overview cards */}
      

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
