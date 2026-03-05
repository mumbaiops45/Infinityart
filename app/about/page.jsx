

import Link from "next/link";
import { C, STATS, TESTIMONIALS } from "../../lib/data";
import "../../styles/aboutpage.modal.css"

export const metadata = { title: "About Us | Infinity Art PMC" };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">About Us</div>
          <h1 className="section-title" style={{ fontSize: "clamp(32px,4vw,52px)", maxWidth: 640 }}>
            Built on Integrity.<br /><span className="blue">Driven by Excellence.</span>
          </h1>
          <p className="para" style={{ maxWidth: 560, marginTop: 14 }}>
            Established to raise the bar for project management in India's construction sector, Infinity Art PMC delivers results that speak for themselves.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="abutstly">
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                height: 420,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                border: `1px solid ${C.border}`,
              }}
            >
              <img
                src="/assets/whowe.jpg"
                alt="Integrity"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />


              <span
                style={{
                  fontSize: 100,
                  opacity: 0.09,
                  position: "absolute",
                }}
              >
                🏛
              </span>
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  background: C.blue,
                  color: "#fff",
                  borderRadius: 10,
                  padding: "18px 24px",
                }}
              >
                <div style={{ fontSize: 38, fontWeight: 700 }}>2010</div>
                <div style={{ fontSize: 12, opacity: 0.85 }}>Year Established</div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  background: "#fff",
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: "14px 18px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: C.blue }}>20+</div>
                <div style={{ fontSize: 10, color: C.muted }}>Years of Experience</div>
              </div>
            </div>


            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Who We Are</h2>
              <p className="para" style={{ marginBottom: 16 }}>
                Infinity Art PMC Engineering Services Pvt. Ltd. Co. was founded with a singular vision: to bring genuine professionalism and accountability to India's construction project management space.
              </p>
              <p className="para" style={{ marginBottom: 16 }}>
                Since inception, we have grown to manage over 5 million sq. ft. of development area across residential, commercial, institutional, and township projects for some of India's most respected developers.
              </p>
              <p className="para" style={{ marginBottom: 28 }}>
                Our leadership team brings over three decades of combined experience across the full construction lifecycle — from feasibility and design management through to commissioning and handover. This depth of knowledge means we anticipate challenges before they arise and deliver solutions that protect our clients' interests at every stage.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">
                  Work With Us
                </Link>
                <Link href="/projects" className="btn-outline">
                  Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

       <h1 className="engineering-main-heading">Our Expertise & Commitments</h1>

      <section className="engineering-section">
        {/* <h1 className="engineering-main-heading">Our Expertise & Commitments</h1> */}
       

        <div className="engineering-card">
          <img className="engineering-image" src="/assets/excellence.jpg" alt="Management Excellence" />
          <div className="engineering-text-container">
            <h2 className="engineering-title">Management Excellence</h2>
            <p className="engineering-text">
              We have delivered change management across varied works including Costing, Project Management, Contracts Management, IPC Billing and QS services. Core strength lies in Management, executed with utmost care and responsibility.
            </p>
          </div>
        </div>

        <div className="engineering-card">
          <img className="engineering-image" src="/assets/infrastructure.webp" alt="Infrastructure Expertise" />
          <div className="engineering-text-container">
            <h2 className="engineering-title">High-End Infrastructure Expertise</h2>
            <p className="engineering-text">
              Proficient in High-speed Rail, elevated viaducts, River Bridges, Rail Crossings, Highway Crossings, Metro Tunnel Structures, TVS systems, Interface services, ELV Controls, Rolling Stocks, Tracks, S&T systems, Installation, Testing, Commissioning, and handing over to clients.
            </p>
          </div>
        </div>

        <div className="engineering-card">
          <img className="engineering-image" src="/assets/projectDelivery.avif" alt="Project Delivery" />
          <div className="engineering-text-container">
            <h2 className="engineering-title">Seamless Project Delivery</h2>
            <p className="engineering-text">
              Our team ensures resolution of project conflicts across vast infrastructure sectors. Projects are completed without disruptions and delays, with adherence to FIDIC and Indian Construction Law in case of any delays.
            </p>
          </div>
        </div>

        <div className="engineering-card">
          <img className="engineering-image" src="/assets/managementclaim.jpg" alt="Execution & Claims Management" />
          <div className="engineering-text-container">
            <h2 className="engineering-title">Execution & Claims Management</h2>
            <p className="engineering-text">
              Core competencies include Project Execution & Management, Bid process, and Claims. Extensive experience in correspondence for various infrastructure structures and mixed-use projects, including EOT delay analysis.
            </p>
          </div>
        </div>

        <div className="engineering-card">
          <img className="engineering-image" src="/assets/arbitrationSupport.jpg" alt="Dispute & Arbitration Support" />
          <div className="engineering-text-container">
            <h2 className="engineering-title">Dispute & Arbitration Support</h2>
            <p className="engineering-text">
              Expertise in Commercial Litigation and Dispute Adjudication Process deliverables, defending cases in accordance with DAB / Arbitrators panels.
            </p>
          </div>
        </div>
      </section>


      <section style={{ background: C.blue, padding: "64px 32px" }}>
        <div className="container">
          <div className="aboutfeedback">
            {STATS.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 44, fontWeight: 700, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Our Foundation</div>
            <h2 className="section-title">Vision & <span className="blue">Mission</span></h2>
          </div>
          <div className="gridstyl" >
            {[
              { icon: "🎯", title: "Our Vision", text: "To be the most trusted and respected project management consultancy in India — the partner every developer turns to when quality, reliability, and accountability are non-negotiable." },
              { icon: "🤝", title: "Our Mission", text: "To deliver measurable value at every stage of the construction lifecycle through core accountability, transparent communication, and engineering excellence rooted in integrity and ethics." },
              { icon: "⭐", title: "Our Values", text: "Integrity in every decision. Accountability in every action. Excellence in every deliverable. Respect for every stakeholder. These are not aspirations — they are the minimum standard we hold ourselves to." },
              { icon: "🏆", title: "Our Commitment", text: "We commit to treating every project as if it were our own — bringing the same care, diligence, and drive to a ₹5 Cr residential development as we do to a ₹500 Cr township." },
            ].map(item => (
              <div key={item.title} className="card">
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p className="para">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Our People</div>
            <h2 className="section-title">Leadership <span className="blue">Team</span></h2>
          </div>
          <div className="leadteam" >

            {[
              { name: "Mr. Rajesh Arora", role: "Principal Consultant & CEO", image: "/assets/rajesh.jpg", exp: "32 years", spec: "Project & Programme Management", bio: "Civil Engineering graduate with over three decades of experience managing landmark construction projects across South India. Founded Infinity Art PMC to bring world-class PMC standards to Indian developers." },
              { name: "Ms. Priya Nair", role: "Director – Quality & Risk", image: "/assets/priya.avif", exp: "22 years", spec: "Quality Assurance & Risk Management", bio: "A certified project management professional (PMP) with extensive experience establishing quality frameworks for large-scale commercial and institutional projects." },
              { name: "Mr. Arun Shetty", role: "Head – Cost Management", image: "/assets/arun.jpg", exp: "18 years", spec: "Quantity Surveying & Contract Management", bio: "Chartered quantity surveyor with deep expertise in cost planning, value engineering, and contract administration across residential and commercial developments." },
            ].map(p => (
              <div key={p.name} className="card">
                <img src={p.image} alt={p.name} style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", marginBottom: 16 }} />
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{p.name}</h3>
                <div style={{ fontSize: 12, color: C.blue, fontWeight: 600, marginBottom: 4 }}>{p.role}</div>
                <div style={{ fontSize: 11, color: C.muted, marginBottom: 14 }}>{p.exp} experience · {p.spec}</div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our <span className="blue">Process</span></h2>
          </div>
          <div className="stlsection" >

            {[
              ["01", "Client Brief & Discovery", "We deeply understand your objectives, budget, and timeline before any planning begins."],
              ["02", "Planning & Programming", "Comprehensive budgeting, scheduling, and milestone planning aligned with design intent."],
              ["03", "Managed Execution", "Stringent supervision, contractor coordination, quality checks, and stakeholder reporting."],
              ["04", "Commissioning & Handover", "Final snag clearing, full documentation, certifications, and professional client handover."],
            ].map(([n, t, d]) => (
              <div key={n} style={{ padding: "32px 24px", borderTop: `4px solid ${n === "01" ? C.blue : C.gray100}` }}>
                <div style={{ fontSize: 44, fontWeight: 800, color: C.gray100, lineHeight: 1, marginBottom: 14 }}>{n}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">What Clients Say</div>
            <h2 className="section-title">Trusted by <span className="blue">Industry Leaders</span></h2>
          </div>
          <div className="trustedclint" >

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

      {/* CTA */}
      <section style={{ background: C.blue, padding: "72px 32px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "#fff", marginBottom: 14 }}>Let's Build Something Great Together</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>Tell us about your project and let's discuss how Infinity Art PMC can add value.</p>
          <Link href="/contact" style={{ background: "#fff", color: C.blue, textDecoration: "none", fontSize: 13, fontWeight: 700, padding: "13px 32px", borderRadius: 8 }}>Contact Our Team →</Link>
        </div>
      </section>
    </>
  );
}
