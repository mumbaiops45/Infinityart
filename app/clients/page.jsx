



import Link from "next/link";
import { C, CLIENTS, TESTIMONIALS, STATS } from "../../lib/data";
import Feedback from "../../components/Feedback";

export const metadata = { title: "Clients | Infinity Art PMC" };

export default function ClientsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Our Clients</div>
          <h1 className="section-title" style={{ fontSize: "clamp(32px,4vw,52px)", maxWidth: 600 }}>
            Trusted by India's <span className="blue">Best Developers</span>
          </h1>
          <p className="para" style={{ maxWidth: 520, marginTop: 14 }}>
            From boutique residential developers to India's largest real estate groups, our clients trust us to deliver their most important projects.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: C.blue, padding: "56px 32px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 32 }}>
            {STATS.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 40, fontWeight: 700, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Our Partners</div>
            <h2 className="section-title">Clients Who <span className="blue">Trust Us</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginBottom: 16 }}>
            {CLIENTS.map((c) => (
              <div key={c} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 10, padding: "24px 20px", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 2px 8px rgba(30,77,140,0.05)" }}>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: `linear-gradient(135deg,${C.blue},${C.steelLight})`, color: "#fff", fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{c[0]}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.text, lineHeight: 1.3 }}>{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Feedback/>

      {/* Testimonials */}
      {/* <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">What Clients Say</div>
            <h2 className="section-title">Client <span className="blue">Testimonials</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card">
                <div style={{ display: "flex", marginBottom: 14 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#f59e0b", fontSize: 14 }}>★</span>)}
                </div>
                <div style={{ fontSize: 40, color: C.gray200, lineHeight: 0.8, marginBottom: 14 }}>"</div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, marginBottom: 20 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg,${C.blue},${C.steel})`, color: "#fff", fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{t.name[0]}</div>
                  <div><div style={{ fontSize: 13, fontWeight: 700 }}>{t.name}</div><div style={{ fontSize: 11, color: C.muted }}>{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why clients choose us */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">What Sets Us <span className="blue">Apart</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              ["🎯","Single Point Accountability","One dedicated PMC team. One point of contact. Full ownership from day one."],
              ["📊","Real-Time Transparency","Live dashboards and weekly reports mean you always know your project's exact status."],
              ["⚡","Speed Without Compromise","We move fast — but never at the expense of quality. Our track record proves it."],
              ["🤝","Long-Term Partnerships","Over 70% of our projects come from repeat clients. Relationships are everything to us."],
            ].map(([ic, t, d]) => (
              <div key={t} className="card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: C.bluePale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{ic}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{t}</h3>
                  <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.blue, padding: "72px 32px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "#fff", marginBottom: 14 }}>Join Our Growing Client Family</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>Experience the Infinity Art PMC difference — professional, accountable, and results-driven.</p>
          <Link href="/contact" style={{ background: "#fff", color: C.blue, textDecoration: "none", fontSize: 13, fontWeight: 700, padding: "13px 32px", borderRadius: 8 }}>Get In Touch →</Link>
        </div>
      </section>
    </>
  );
}
