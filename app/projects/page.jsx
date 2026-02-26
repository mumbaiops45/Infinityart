"use client";
import { useState } from "react";
import Link from "next/link";
import { C, PROJECTS } from "../../lib/data";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [status, setStatus] = useState("All");
  const types = ["All", "Residential", "Commercial", "Institutional", "Township"];
  const statuses = ["All", "Completed", "Ongoing"];

  const filtered = PROJECTS.filter(p =>
    (filter === "All" || p.type === filter) &&
    (status === "All" || p.status === status)
  );

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Our Portfolio</div>
          <h1 className="section-title" style={{ fontSize: "clamp(32px,4vw,52px)", maxWidth: 600 }}>
            Projects That <span className="blue">Define Us</span>
          </h1>
          <p className="para" style={{ maxWidth: 520, marginTop: 14 }}>
            Over 80 projects delivered across residential, commercial, institutional, and township sectors — each one a testament to our commitment to quality.
          </p>
          <div style={{ display: "flex", gap: 32, marginTop: 36, flexWrap: "wrap" }}>
            {[["160+", "Projects Delivered"], ["10M+", "Sqft Managed"], ["96%", "On-Time Rate"], ["₹2000Cr+", "Value Managed"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.blue }}>{v}</div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div style={{ display: "flex", gap: 24, marginBottom: 36, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, color: C.muted, fontWeight: 600, alignSelf: "center", marginRight: 4 }}>Type:</span>
              {types.map(t => (
                <button key={t} onClick={() => setFilter(t)} style={{ background: filter === t ? C.blue : "#fff", border: `1.5px solid ${filter === t ? C.blue : C.border}`, color: filter === t ? "#fff" : C.muted, fontSize: 12, fontWeight: filter === t ? 600 : 500, padding: "6px 16px", borderRadius: 20, cursor: "pointer" }}>{t}</button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, color: C.muted, fontWeight: 600, alignSelf: "center", marginRight: 4 }}>Status:</span>
              {statuses.map(s => (
                <button key={s} onClick={() => setStatus(s)} style={{ background: status === s ? C.blue : "#fff", border: `1.5px solid ${status === s ? C.blue : C.border}`, color: status === s ? "#fff" : C.muted, fontSize: 12, fontWeight: status === s ? 600 : 500, padding: "6px 16px", borderRadius: 20, cursor: "pointer" }}>{s}</button>
              ))}
            </div>
            <span style={{ fontSize: 12, color: C.muted, marginLeft: "auto" }}>{filtered.length} projects</span>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {filtered.map(p => (
              <div key={p.slug} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 10px rgba(30,77,140,0.05)" }}>
                <div
                  style={{
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Image */}
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />


                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: C.blue,
                      color: "#fff",
                      fontSize: 9,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {p.type}
                  </div>


                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: p.status === "Completed" ? "#e6f4ea" : "#fff8e1",
                      color: p.status === "Completed" ? "#2e7d32" : "#e65100",
                      fontSize: 9,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {p.status === "Completed" ? "✓ Completed" : "⏳ Ongoing"}
                  </div>


                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      right: 12,
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(4px)",
                      borderRadius: 8,
                      padding: "10px 14px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 11, color: C.muted }}>📍 {p.location}</span>
                    <span style={{ fontSize: 11, color: C.blue, fontWeight: 700 }}>{p.value}</span>
                  </div>
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.muted, paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
                    <span>📐 {p.area}</span>
                    <span>📅 {p.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: C.muted }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>No projects match your filters</div>
              <button onClick={() => { setFilter("All"); setStatus("All"); }} style={{ background: C.blue, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, padding: "10px 22px", borderRadius: 8, cursor: "pointer", marginTop: 16 }}>Reset Filters</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.blue, padding: "72px 32px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "#fff", marginBottom: 14 }}>Want to See Your Project Here?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>Partner with Infinity Art PMC and let's create something exceptional together.</p>
          <Link href="/contact" style={{ background: "#fff", color: C.blue, textDecoration: "none", fontSize: 13, fontWeight: 700, padding: "13px 32px", borderRadius: 8 }}>Start a Conversation →</Link>
        </div>
      </section>
    </>
  );
}
