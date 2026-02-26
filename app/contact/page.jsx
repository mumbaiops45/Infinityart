"use client";
import { useState } from "react";
import { C } from "../../lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>

    { /*make the responsive  */}
    <style jsx>{`
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.6fr;
      gap: 72px;
      align-items: start;
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
`}</style>
      <div className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">Contact Us</div>
          <h1 className="section-title" style={{ fontSize: "clamp(32px,4vw,52px)", maxWidth: 600 }}>
            Let's Build <span className="blue">Together</span>
          </h1>
          <p className="para" style={{ maxWidth: 520, marginTop: 14 }}>
            Ready to discuss your project? Our team of experienced PMC professionals is here to consult, plan, and deliver excellence from day one.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 72, alignItems: "start"  
          }}> */}
         <div className="contact-grid" >
           
            <div>
              <div className="section-label">Reach Us</div>
              <h2 className="section-title" style={{ fontSize: 28 }}>Contact <span className="blue">Details</span></h2>
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  ["📍", "Address", "Infinity Art PMC Engineering Services\nBengaluru, Karnataka, India – 560 001"],
                  ["📞", "Phone", "+91 98XXX XXXXX\n+91 80XXXX XXXX"],
                  ["✉️", "Email", "info@infinityartpmc.in\nprojects@infinityartpmc.in"],
                  ["🕐", "Office Hours", "Monday – Saturday\n9:00 AM – 6:00 PM IST"],
                ].map(([ic, label, val]) => (
                  <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 46, height: 46, borderRadius: 10, background: C.bluePale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{ic}</div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: C.text, lineHeight: 1.6, whiteSpace: "pre-line" }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>

             
              <div style={{ marginTop: 40, padding: "24px", background: C.bluePale, border: `1px solid ${C.gray200}`, borderRadius: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.blue, marginBottom: 14 }}>Quick Response Guarantee</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["✓ Reply within 4 business hours","✓ Free initial consultation","✓ No obligation assessment"].map(i => (
                    <div key={i} style={{ fontSize: 13, color: C.muted }}>{i}</div>
                  ))}
                </div>
              </div>
            </div>

           
            <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 14, boxShadow: "0 4px 24px rgba(30,77,140,0.10)", overflow: "hidden" }}>
              <div style={{ background: C.blue, padding: "20px 32px" }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Send Us a Message</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>We'll get back to you within 4 business hours</div>
              </div>

              {sent ? (
                <div style={{ padding: "60px 32px", textAlign: "center" }}>
                  <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Message Sent!</h3>
                  <p style={{ fontSize: 15, color: C.muted, maxWidth: 360, margin: "0 auto 28px", lineHeight: 1.7 }}>Thank you for reaching out. Our team will review your enquiry and contact you within 4 business hours.</p>
                  <button onClick={() => setSent(false)} style={{ background: C.blue, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, padding: "12px 28px", borderRadius: 8, cursor: "pointer" }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ padding: "32px", display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 600, color: C.gray600, letterSpacing: "0.04em", display: "block", marginBottom: 5 }}>Full Name *</label>
                      <input required placeholder="Your full name" style={{ width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "11px 14px", fontSize: 14, background: C.offWhite, outline: "none", fontFamily: "inherit" }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 600, color: C.gray600, letterSpacing: "0.04em", display: "block", marginBottom: 5 }}>Company Name</label>
                      <input placeholder="Your company" style={{ width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "11px 14px", fontSize: 14, background: C.offWhite, outline: "none", fontFamily: "inherit" }} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 600, color: C.gray600, letterSpacing: "0.04em", display: "block", marginBottom: 5 }}>Email Address *</label>
                      <input required type="email" placeholder="you@example.com" style={{ width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "11px 14px", fontSize: 14, background: C.offWhite, outline: "none", fontFamily: "inherit" }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 600, color: C.gray600, letterSpacing: "0.04em", display: "block", marginBottom: 5 }}>Phone Number *</label>
                      <input required placeholder="+91 XXXXX XXXXX" style={{ width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "11px 14px", fontSize: 14, background: C.offWhite, outline: "none", fontFamily: "inherit" }} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 600, color: C.gray600, letterSpacing: "0.04em", display: "block", marginBottom: 5 }}>Project Type</label>
                      <select style={{ width: "100%", border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "11px 14px", fontSize: 14, background: C.offWhite, outline: "none", fontFamily: "inherit" }}>
                        <option value="">Select type</option>
                        {["Residential","Commercial","Institutional","Township","Industrial","Other"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 600, color: C.gray600, letterSpacing: "0.04em", display: "block", marginBottom: 5 }}>Project Value (Approx.)</label>
                      <select style={{ width: "100%", border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "11px 14px", fontSize: 14, background: C.offWhite, outline: "none", fontFamily: "inherit" }}>
                        <option value="">Select range</option>
                        {["Below ₹5 Cr","₹5 Cr – ₹25 Cr","₹25 Cr – ₹100 Cr","₹100 Cr – ₹500 Cr","Above ₹500 Cr"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 600, color: C.gray600, letterSpacing: "0.04em", display: "block", marginBottom: 5 }}>Service Required</label>
                    <select style={{ width: "100%", border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "11px 14px", fontSize: 14, background: C.offWhite, outline: "none", fontFamily: "inherit" }}>
                      <option value="">Select service</option>
                      {["Project Management","Quality Management","Cost Management","Contract Management","Risk Management","Material Management","Full PMC Suite"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 600, color: C.gray600, letterSpacing: "0.04em", display: "block", marginBottom: 5 }}>Project Description *</label>
                    <textarea required placeholder="Tell us about your project — location, stage, key requirements, timelines..." style={{ width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "11px 14px", fontSize: 14, background: C.offWhite, height: 120, resize: "vertical", outline: "none", fontFamily: "inherit" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <input type="checkbox" id="consent" style={{ marginTop: 2 }} />
                    <label htmlFor="consent" style={{ fontSize: 12, color: C.muted, lineHeight: 1.5 }}>I consent to Infinity Art PMC storing my submitted information to respond to my enquiry.</label>
                  </div>
                  <button type="submit" style={{ background: C.blue, border: "none", color: "#fff", fontSize: 14, fontWeight: 600, padding: "14px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit" }}>
                    Submit Enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-label">Find Us</div>
            <h2 className="section-title">Our <span className="blue">Location</span></h2>
          </div>
          <div style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${C.border}`, height: 360, background: `linear-gradient(135deg,${C.bluePale},${C.gray200})`, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 56 }}>📍</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: C.blue }}>Bengaluru, Karnataka, India</div>
            <div style={{ fontSize: 14, color: C.muted }}>Embed Google Maps here by replacing this section with an &lt;iframe&gt; tag</div>
            <a href="https://maps.google.com/?q=Bengaluru,Karnataka" target="_blank" rel="noopener noreferrer" style={{ background: C.blue, color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 600, padding: "10px 22px", borderRadius: 8 }}>Open in Google Maps →</a>
          </div>
        </div>
      </section>
    </>
  );
}


// "use client";
// import { useState } from "react";
// import { C } from "../../lib/data";

// export default function ContactPage() {
//   const [sent, setSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSent(true);
//   };

//   return (
//     <>
//       <div className="page-hero">
//         <div className="container hero-inner">
//           <div className="section-label">Contact Us</div>
//           <h1 className="section-title">
//             Let's Build <span className="blue">Together</span>
//           </h1>
//           <p className="para">
//             Ready to discuss your project? Our team of experienced PMC
//             professionals is here to consult, plan, and deliver excellence from
//             day one.
//           </p>
//         </div>
//       </div>

//       <section className="section">
//         <div className="container grid-2">
          
         
//           <div>
//             <div className="section-label">Reach Us</div>
//             <h2 className="section-title small">
//               Contact <span className="blue">Details</span>
//             </h2>

//             <div className="info-list">
//               {[
//                 ["📍", "Address", "Infinity Art PMC Engineering Services\nBengaluru, Karnataka, India – 560 001"],
//                 ["📞", "Phone", "+91 98XXX XXXXX\n+91 80XXXX XXXX"],
//                 ["✉️", "Email", "info@infinityartpmc.in\nprojects@infinityartpmc.in"],
//                 ["🕐", "Office Hours", "Monday – Saturday\n9:00 AM – 6:00 PM IST"],
//               ].map(([ic, label, val]) => (
//                 <div key={label} className="info-item">
//                   <div className="info-icon">{ic}</div>
//                   <div>
//                     <div className="info-label">{label}</div>
//                     <div className="info-value">{val}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="quick-box">
//               <div className="quick-title">Quick Response Guarantee</div>
//               <div className="quick-list">
//                 <div>✓ Reply within 4 business hours</div>
//                 <div>✓ Free initial consultation</div>
//                 <div>✓ No obligation assessment</div>
//               </div>
//             </div>
//           </div>

         
//           <div className="form-card">
//             <div className="form-header">
//               <div>Send Us a Message</div>
//               <span>We'll get back to you within 4 business hours</span>
//             </div>

//             {sent ? (
//               <div className="success-box">
//                 <div className="success-icon">✅</div>
//                 <h3>Message Sent!</h3>
//                 <p>
//                   Thank you for reaching out. Our team will review your enquiry
//                   and contact you within 4 business hours.
//                 </p>
//                 <button onClick={() => setSent(false)}>
//                   Send Another Message
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="form-body">

//                 <div className="grid-2-sm">
//                   <input required placeholder="Full Name *" />
//                   <input placeholder="Company Name" />
//                 </div>

//                 <div className="grid-2-sm">
//                   <input required type="email" placeholder="Email Address *" />
//                   <input required placeholder="Phone Number *" />
//                 </div>

//                 <div className="grid-2-sm">
//                   <select>
//                     <option>Project Type</option>
//                     <option>Residential</option>
//                     <option>Commercial</option>
//                     <option>Industrial</option>
//                   </select>

//                   <select>
//                     <option>Project Value</option>
//                     <option>Below ₹5 Cr</option>
//                     <option>₹5 Cr – ₹25 Cr</option>
//                     <option>₹25 Cr – ₹100 Cr</option>
//                   </select>
//                 </div>

//                 <textarea
//                   required
//                   placeholder="Project Description *"
//                 />

//                 <button type="submit" className="submit-btn">
//                   Submit Enquiry →
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

     
//       <style jsx>{`

//         .container {
//           width: 90%;
//           max-width: 1200px;
//           margin: auto;
//         }

//         .hero-inner {
//           padding: 80px 0;
//         }

//         .section-title {
//           font-size: clamp(28px, 4vw, 52px);
//           max-width: 600px;
//         }

//         .section-title.small {
//           font-size: 28px;
//         }

//         .grid-2 {
//           display: grid;
//           grid-template-columns: 1fr 1.6fr;
//           gap: 60px;
//           align-items: start;
//         }

//         .grid-2-sm {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 16px;
//         }

//         .info-list {
//           margin-top: 30px;
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//         }

//         .info-item {
//           display: flex;
//           gap: 16px;
//         }

//         .info-icon {
//           width: 46px;
//           height: 46px;
//           background: ${C.bluePale};
//           border-radius: 10px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .info-value {
//           white-space: pre-line;
//           font-size: 14px;
//         }

//         .quick-box {
//           margin-top: 40px;
//           padding: 20px;
//           background: ${C.bluePale};
//           border-radius: 10px;
//         }

//         .form-card {
//           background: #fff;
//           border-radius: 14px;
//           overflow: hidden;
//           box-shadow: 0 4px 24px rgba(0,0,0,0.08);
//         }

//         .form-header {
//           background: ${C.blue};
//           color: white;
//           padding: 20px;
//           font-weight: 600;
//         }

//         .form-header span {
//           font-size: 12px;
//           display: block;
//           opacity: 0.8;
//         }

//         .form-body {
//           padding: 30px;
//           display: flex;
//           flex-direction: column;
//           gap: 18px;
//         }

//         input, select, textarea {
//           padding: 12px;
//           border-radius: 8px;
//           border: 1px solid ${C.border};
//           width: 100%;
//         }

//         textarea {
//           height: 120px;
//           resize: vertical;
//         }

//         .submit-btn {
//           background: ${C.blue};
//           color: white;
//           border: none;
//           padding: 14px;
//           border-radius: 8px;
//           font-weight: 600;
//           cursor: pointer;
//         }

//         .success-box {
//           padding: 50px 30px;
//           text-align: center;
//         }

//         .success-icon {
//           font-size: 48px;
//           margin-bottom: 15px;
//         }

//         /* ================= RESPONSIVE ================= */

//         @media (max-width: 1024px) {
//           .grid-2 {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 768px) {
//           .grid-2-sm {
//             grid-template-columns: 1fr;
//           }

//           .hero-inner {
//             padding: 50px 0;
//           }

//           .form-body {
//             padding: 20px;
//           }
//         }

//       `}</style>
//     </>
//   );
// }

