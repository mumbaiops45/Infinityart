"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { C, SERVICES, PROJECTS, STATS, TESTIMONIALS, CASE_STUDIES } from "../lib/data";

// const images = [
//   "/assets/elarla12.jpg",
//   "/assets/horizon.jpg",
//   "/assets/villa1.avif",
//   "/assets/mrsconvention.jpg"
// ];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS.slice(0, 6) : PROJECTS.filter(p => p.type === filter).slice(0, 6);

  // useEffect(() =>{
  //   const interval = setInterval(() => {
  //     setCurrent(prev => (prev + 1) % images.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [])

  return (
    <>
      {/* ── HERO ── */}

      <section style={{ minHeight: "100vh", background: `linear-gradient(150deg,#fff 0%,${C.bluePale} 55%,#d6e6f8 100%)`, display: "flex", flexDirection: "column", paddingTop: 72, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.blue},${C.steel},${C.steelLight})` }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: `radial-gradient(circle,${C.blue} 1px,transparent 1px)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", flex: 1, position: "relative" }}>
          <div className="fade-up">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.bluePale, border: `1px solid ${C.gray200}`, color: C.blue, fontSize: 11, fontWeight: 600, padding: "5px 14px", borderRadius: 20, marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)", flexShrink: 0 }} />
              Trusted Project Management Consultancy
            </div>
            <h1 style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.18, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
              Engineering Projects.<br /><span style={{ color: C.blue }}>Delivered with Precision.</span>
            </h1>
            <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
              Infinity Art PMC Engineering Services provides end-to-end project management consultancy to India's leading developers and institutions — from concept to commissioning.
            </p>
            <div style={{ display: "flex", gap: 14, marginBottom: 28, flexWrap: "wrap" }}>
              <Link href="/projects" className="btn-primary">Explore Projects</Link>
              <Link href="/about" className="btn-outline">Learn More</Link>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {["✓ ISO Certified", "✓ 16+ Years Expertise", "✓ Pan-India Presence"].map(t => (
                <span key={t} style={{ fontSize: 12, color: C.steel, fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>


     
          <div className="fade-up" style={{ animationDelay: "0.15s" }}>
            <div style={{ background: "#fff", borderRadius: 14, boxShadow: "0 8px 40px rgba(30,77,140,0.14)", padding: "28px 32px", border: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.steel, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Performance Overview </div>
              {[["On-Time Delivery Rate", "96%", 96], ["Client Satisfaction", "98%", 98], ["Avg. Cost Savings Delivered", "18%", 60]].map(([l, v, p]) => (
                <div key={l} style={{ marginBottom: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: C.muted }}>{l}</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: C.blue }}>{v}</span>
                  </div>
                  <div style={{ height: 5, background: C.gray100, borderRadius: 3 }}>
                    <div style={{ height: "100%", width: `${p}%`, background: `linear-gradient(90deg,${C.blue},${C.steelLight})`, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${C.border}`, margin: "20px 0" }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
                {STATS.map(s => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: C.blue }}>{s.value}</div>
                    <div style={{ fontSize: 10, color: C.muted, marginTop: 3, lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C.border}`, background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)", padding: "14px 32px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", position: "relative" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: "0.1em", whiteSpace: "nowrap" }}>TRUSTED BY</span>
          {["Prestige Group", "Brigade Enterprises", "Sobha Ltd.", "Puravankara", "Godrej Properties", "Mantri Developers"].map((c, i, a) => (
            <span key={c} style={{ fontSize: 12, color: C.steel, fontWeight: 600, paddingRight: 20, borderRight: i < a.length - 1 ? `1px solid ${C.border}` : "none" }}>{c}</span>
          ))}
        </div>
      </section>
      {/* <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: 72,
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${images[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out"
      }}
    >
     
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.blue},${C.steel},${C.steelLight})` }} />
      
      
      <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: `radial-gradient(circle,${C.blue} 1px,transparent 1px)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />

     
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", flex: 1, position: "relative" }}>
        
        
        <div className="fade-up">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.bluePale, border: `1px solid ${C.gray200}`, color: C.blue, fontSize: 11, fontWeight: 600, padding: "5px 14px", borderRadius: 20, marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)", flexShrink: 0 }} />
            Trusted Project Management Consultancy
          </div>
          <h1 style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.18, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            Engineering Projects.<br /><span style={{ color: C.blue }}>Delivered with Precision.</span>
          </h1>
          <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
            Infinity Art PMC Engineering Services provides end-to-end project management consultancy to India's leading developers and institutions — from concept to commissioning.
          </p>
          <div style={{ display: "flex", gap: 14, marginBottom: 28, flexWrap: "wrap" }}>
            <Link href="/projects" className="btn-primary">Explore Projects</Link>
            <Link href="/about" className="btn-outline">Learn More</Link>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["✓ ISO Certified", "✓ 16+ Years Expertise", "✓ Pan-India Presence"].map(t => (
              <span key={t} style={{ fontSize: 12, color: C.steel, fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>

      
        <div className="fade-up" style={{ animationDelay: "0.15s" }}>
          <div style={{ background: "#fff", borderRadius: 14, boxShadow: "0 8px 40px rgba(30,77,140,0.14)", padding: "28px 32px", border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.steel, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Performance Overview </div>
            {[["On-Time Delivery Rate", "96%", 96], ["Client Satisfaction", "98%", 98], ["Avg. Cost Savings Delivered", "18%", 60]].map(([l, v, p]) => (
              <div key={l} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: C.muted }}>{l}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: C.blue }}>{v}</span>
                </div>
                <div style={{ height: 5, background: C.gray100, borderRadius: 3 }}>
                  <div style={{ height: "100%", width: `${p}%`, background: `linear-gradient(90deg,${C.blue},${C.steelLight})`, borderRadius: 3 }} />
                </div>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${C.border}`, margin: "20px 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
              {STATS.map(s => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: C.blue }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 3, lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

   
      <div style={{ borderTop: `1px solid ${C.border}`, background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)", padding: "14px 32px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", position: "relative" }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: "0.1em", whiteSpace: "nowrap" }}>TRUSTED BY</span>
        {["Prestige Group", "Brigade Enterprises", "Sobha Ltd.", "Puravankara", "Godrej Properties", "Mantri Developers"].map((c, i, a) => (
          <span key={c} style={{ fontSize: 12, color: C.steel, fontWeight: 600, paddingRight: 20, borderRight: i < a.length - 1 ? `1px solid ${C.border}` : "none" }}>{c}</span>
        ))}
      </div>
    </section> */}
      {/* ── ABOUT SNIPPET ── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 72,
              alignItems: "center"
            }}
          >
            {/* LEFT IMAGE BLOCK */}
            <div
              style={{
                borderRadius: 12,
                height: 380,
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${C.border}`
              }}
            >
              <img
                src="/assets/integrity.jpg"
                alt="Integrity"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />

              {/* Years Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  background: C.blue,
                  color: "#fff",
                  borderRadius: 8,
                  padding: "14px 20px"
                }}
              >
                <div style={{ fontSize: 32, fontWeight: 700 }}>16+</div>
                <div style={{ fontSize: 11, opacity: 0.85 }}>
                  Years of Excellence
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT BLOCK */}
            <div>
              <div className="section-label">Who We Are</div>

              <h2 className="section-title">
                Built on Integrity.
                <br />
                <span className="blue">Driven by Excellence.</span>
              </h2>

              <p className="para" style={{ marginBottom: 14 }}>
                Infinity Art PMC Engineering Services Pvt. Ltd. Co. is a premier
                project management consultancy delivering reliable PMC services
                across residential, commercial, institutional, and township sectors.
              </p>

              <p className="para" style={{ marginBottom: 28 }}>
                Led by a seasoned team with 30+ years of construction experience,
                our approach is rooted in accountability, transparency, and measurable
                results.
              </p>

              {/* Vision & Mission Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                  marginBottom: 28
                }}
              >
                {[
                  [
                    "🎯",
                    "Our Vision",
                    "To be the most trusted PMC partner delivering consistent value and excellence."
                  ],
                  [
                    "🤝",
                    "Our Mission",
                    "Committed to core accountability grounded in integrity and ethical practices."
                  ]
                ].map(([ic, t, d]) => (
                  <div key={t} className="card">
                    <div style={{ fontSize: 20, marginBottom: 8 }}>{ic}</div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        marginBottom: 6
                      }}
                    >
                      {t}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: C.muted,
                        lineHeight: 1.6
                      }}
                    >
                      {d}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary">
                More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">Our Core <span className="blue">Services</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {SERVICES.map((s) => (
              <Link key={s.slug} href="/services" style={{ textDecoration: "none" }}>
                <div className="card" style={{ cursor: "pointer", height: "100%" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: C.bluePale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, marginBottom: 14 }}>{s.short}</p>
                  <span style={{ color: C.blue, fontSize: 12, fontWeight: 600 }}>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn-primary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">Our Portfolio</div>
            <h2 className="section-title">Projects That <span className="blue">Define Us</span></h2>
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            {["All", "Residential", "Commercial", "Institutional", "Township"].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ background: filter === f ? C.blue : "#fff", border: `1.5px solid ${filter === f ? C.blue : C.border}`, color: filter === f ? "#fff" : C.muted, fontSize: 12, fontWeight: filter === f ? 600 : 500, padding: "7px 18px", borderRadius: 20, cursor: "pointer" }}>{f}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {filtered.map(p => (
              <Link key={p.image} href="/projects" style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 10px rgba(30,77,140,0.05)", cursor: "pointer" }}>
                  <div style={{ height: 160, position: "relative" }}>
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />

                    <div style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      background: C.blue,
                      color: "#fff",
                      fontSize: 9,
                      fontWeight: 700,
                      padding: "3px 9px",
                      borderRadius: 20
                    }}>
                      {p.type}
                    </div>

                    <div style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      background: p.status === "Completed" ? "#e6f4ea" : "#fff8e1",
                      color: p.status === "Completed" ? "#2e7d32" : "#e65100",
                      fontSize: 9,
                      fontWeight: 700,
                      padding: "3px 9px",
                      borderRadius: 20
                    }}>
                      {p.status === "Completed" ? "✓ Completed" : "⏳ Ongoing"}
                    </div>
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{p.name}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.muted }}>
                      <span>📍 {p.location}</span>
                      <span style={{ color: C.blue, fontWeight: 600 }}>📐 {p.area}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/projects" className="btn-primary">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY TEASER ── */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Proven Results</div>
            <h2 className="section-title">Case <span className="blue">Studies</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {CASE_STUDIES.map(cs => (
              <Link key={cs.slug} href="/case-studies" style={{ textDecoration: "none" }}>
                <div className="card" style={{ height: "100%", cursor: "pointer" }}>
                  <div style={{ display: "inline-block", background: C.bluePale, color: C.blue, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", padding: "3px 10px", borderRadius: 20, marginBottom: 14 }}>{cs.tag}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, lineHeight: 1.4 }}>{cs.title}</h3>
                  <div style={{ display: "flex", gap: 20, marginBottom: 14 }}>
                    <div><div style={{ fontSize: 24, fontWeight: 700, color: C.blue }}>{cs.m1v}</div><div style={{ fontSize: 11, color: C.muted }}>{cs.m1l}</div></div>
                    <div><div style={{ fontSize: 24, fontWeight: 700, color: C.blue }}>{cs.m2v}</div><div style={{ fontSize: 11, color: C.muted }}>{cs.m2l}</div></div>
                  </div>
                  <span style={{ color: C.blue, fontSize: 12, fontWeight: 600 }}>Read Full Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">What Clients Say</div>
            <h2 className="section-title">Trusted by <span className="blue">Industry Leaders</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card">
                <div style={{ fontSize: 40, color: C.gray200, lineHeight: 0.8, marginBottom: 14 }}>"</div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, marginBottom: 20 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: `linear-gradient(135deg,${C.blue},${C.steel})`, color: "#fff", fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: C.muted }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: C.blue, padding: "72px 32px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 700, color: "#fff", marginBottom: 14 }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Let our expert team guide your project from concept to commissioning. Get in touch today.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#fff", color: C.blue, textDecoration: "none", fontSize: 13, fontWeight: 700, padding: "13px 28px", borderRadius: 8 }}>Get In Touch →</Link>
            <Link href="/projects" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 13, fontWeight: 600, padding: "11px 24px", borderRadius: 8 }}>View Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
