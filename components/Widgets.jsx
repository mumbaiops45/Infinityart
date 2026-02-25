"use client";
import { useState } from "react";
import { C } from "../lib/data";

export function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919800000000&text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20PMC%20services."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 999,
        width: 56, height: 56, borderRadius: "50%",
        background: "#25D366", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 28, boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        textDecoration: "none", transition: "transform 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      💬
    </a>
  );
}

export function EnquiryPopup({ onClose }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(10,20,40,0.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 14, boxShadow: "0 20px 60px rgba(0,0,0,0.25)", width: "100%", maxWidth: 520, overflow: "hidden", position: "relative" }}>
        <div style={{ background: C.blue, padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>Quick Enquiry</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 2 }}>We'll get back to you within 24 hours</div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 18, cursor: "pointer", width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>
        {sent ? (
          <div style={{ padding: "48px 28px", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Enquiry Sent!</div>
            <div style={{ fontSize: 14, color: C.muted, marginBottom: 24 }}>Thank you for reaching out. Our team will contact you shortly.</div>
            <button onClick={onClose} style={{ background: C.blue, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, padding: "11px 28px", borderRadius: 8, cursor: "pointer" }}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[["Full Name *","Your name","text"],["Phone *","+91 XXXXX XXXXX","tel"]].map(([l,p,t]) => (
                <div key={l}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.gray600, marginBottom: 5 }}>{l}</div>
                  <input required type={t} placeholder={p} style={{ width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 7, padding: "9px 12px", fontSize: 13, background: C.offWhite, outline: "none" }} />
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.gray600, marginBottom: 5 }}>Email Address *</div>
              <input required type="email" placeholder="you@example.com" style={{ width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 7, padding: "9px 12px", fontSize: 13, background: C.offWhite, outline: "none" }} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.gray600, marginBottom: 5 }}>Project Type</div>
              <select style={{ width: "100%", border: `1.5px solid ${C.border}`, borderRadius: 7, padding: "9px 12px", fontSize: 13, background: C.offWhite, outline: "none" }}>
                {["Select type","Residential","Commercial","Institutional","Township","Industrial","Other"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.gray600, marginBottom: 5 }}>Message</div>
              <textarea placeholder="Briefly describe your project..." style={{ width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 7, padding: "9px 12px", fontSize: 13, background: C.offWhite, height: 80, resize: "vertical", outline: "none" }} />
            </div>
            <button type="submit" style={{ background: C.blue, border: "none", color: "#fff", fontSize: 13, fontWeight: 600, padding: "12px", borderRadius: 8, cursor: "pointer" }}>
              Submit Enquiry →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function EnquiryTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ position: "fixed", bottom: 96, right: 28, zIndex: 998, background: C.blue, border: "none", color: "#fff", fontSize: 11, fontWeight: 700, padding: "10px 16px", borderRadius: 8, cursor: "pointer", boxShadow: "0 4px 16px rgba(30,77,140,0.35)", letterSpacing: "0.04em", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        QUICK ENQUIRY
      </button>
      {open && <EnquiryPopup onClose={() => setOpen(false)} />}
    </>
  );
}
