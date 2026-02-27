
import Link from "next/link";
import { C, CLIENTS, TESTIMONIALS, STATS } from "../../lib/data";
import Feedback from "../../components/Feedback";
import "../../styles/client.modal.css"
import {features}  from "../../lib/clientsay"


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
          <div className="statusname">
            {/* style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 32 }} */}
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
        <div className="section-header">
          <div className="section-label">Our Partners</div>
          <h2 className="section-title">
            Clients Who <span className="blue">Trust Us</span>
          </h2>
        </div>
        
        <div className="client-grid">
          {CLIENTS.map((client, index) => (
            <div 
              key={client} 
              className="client-card"
              style={{ '--card-index': index }} // For animation delay
            >
              <div className="client-avatar">{client[0]}</div>
              <div className="client-name">{client}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Feedback/>
      {/* Why clients choose us */}
          <section className="whychoose-section">
      <div className="whychoose-container">
        <div className="whychoose-header">
          <div className="whychoose-label">Why Choose Us</div>
          <h2 className="whychoose-title">
            What Sets Us <span className="whychoose-highlight">Apart</span>
          </h2>
        </div>
        
        <div className="whychoose-grid">
          {features.map((feature, index) => (
            <div key={index} className="whychoose-card">
              <div className="whychoose-icon-wrapper">
                <span className="whychoose-icon">{feature.icon}</span>
              </div>
              <div className="whychoose-content">
                <h3 className="whychoose-card-title">{feature.title}</h3>
                <p className="whychoose-description">{feature.description}</p>
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
