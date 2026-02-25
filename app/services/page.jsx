import Link from "next/link";
import { C, SERVICES } from "../../lib/data";

export const metadata = { title: "Services | Infinity Art PMC" };

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Our Services</div>
          <h1 className="section-title" style={{ fontSize: "clamp(32px,4vw,52px)", maxWidth: 600 }}>
            Comprehensive PMC <span className="blue">Solutions</span>
          </h1>
          <p className="para" style={{ maxWidth: 540, marginTop: 14 }}>
            From early-stage planning to final commissioning, our six core service areas cover every aspect of successful project delivery.
          </p>
        </div>
      </div>

      {/* Services detail */}
      <section className="section">
        <div className="container">
          {SERVICES.map((s, i) => (
            <div key={s.slug} id={s.slug} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1.3fr" : "1.3fr 1fr", gap: 64, alignItems: "center", marginBottom: 96, paddingBottom: 96, borderBottom: i < SERVICES.length - 1 ? `1px solid ${C.border}` : "none" }}>
              {i % 2 !== 0 && (
                <div>
                  <div className="section-label">{`0${i + 1}`}</div>
                  <h2 className="section-title">{s.title}</h2>
                  <p className="para" style={{ marginBottom: 20 }}>{s.desc}</p>
                  <div style={{ marginBottom: 28 }}>
                    {s.benefits.map(b => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: C.bluePale, color: C.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0 }}>✓</div>
                        <span style={{ fontSize: 14, color: C.muted }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary">Discuss Your Project →</Link>
                </div>
              )}
              <div style={{
                borderRadius: 14,
                minHeight: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${C.border}`,
                position: "relative",
                overflow: "hidden",
                background: `linear-gradient(135deg,${C.bluePale},${C.gray100})`
              }}>
                <img
                  src={s.image}
                  alt={s.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0
                  }}
                />
                <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, zIndex: 1 }}>
                  <div style={{ background: "rgba(255,255,255,0.95)", border: `1px solid ${C.border}`, borderRadius: 10, padding: "16px 20px" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.blue, marginBottom: 4 }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: C.muted }}>{s.short}</div>
                  </div>
                </div>
              </div>
              {i % 2 === 0 && (
                <div>
                  <div className="section-label">{`0${i + 1}`}</div>
                  <h2 className="section-title">{s.title}</h2>
                  <p className="para" style={{ marginBottom: 20 }}>{s.desc}</p>
                  <div style={{ marginBottom: 28 }}>
                    {s.benefits.map(b => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: C.bluePale, color: C.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0 }}>✓</div>
                        <span style={{ fontSize: 14, color: C.muted }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary">Discuss Your Project →</Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">The Infinity Art PMC <span className="blue">Advantage</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              ["🏆", "Proven Track Record", "80+ projects delivered across sectors with consistently high client satisfaction scores."],
              ["🔬", "Data-Driven Decisions", "We leverage real-time project data and analytics to make informed decisions at every stage."],
              ["🤝", "Client-First Approach", "Your objectives drive every decision we make. We act as your dedicated in-house PMC team."],
              ["⚡", "Rapid Mobilisation", "Our established systems and pre-qualified contractor networks mean we can mobilise fast."],
              ["📊", "Full Transparency", "Regular progress reports, cost dashboards, and open communication — no surprises."],
              ["🌱", "Sustainable Practices", "We integrate sustainability and green building principles into every project we manage."],
            ].map(([ic, t, d]) => (
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
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "#fff", marginBottom: 14 }}>Ready to Discuss Your Project?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>Our team is ready to provide a tailored PMC solution for your development.</p>
          <Link href="/contact" style={{ background: "#fff", color: C.blue, textDecoration: "none", fontSize: 13, fontWeight: 700, padding: "13px 32px", borderRadius: 8 }}>Get a Free Consultation →</Link>
        </div>
      </section>
    </>
  );
}
