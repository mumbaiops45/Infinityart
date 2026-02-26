"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { C, SERVICES, PROJECTS, STATS, TESTIMONIALS, CASE_STUDIES } from "../lib/data";
import { motion } from 'framer-motion';
import Feedback from "../components/Feedback";
import Start from "../components/Start";
import CaseStudies from "../components/CaseStudies";


const images = [
  "/assets/commercial.jpg",
  "/assets/constengi.jpg",
  "/assets/renovation.jpg",
  "/assets/contructions.jpg"
];

const services = [
  {
    title: "Project Management",
    description:
      "End-to-end project leadership ensuring seamless execution from planning to commissioning.",
  },
  {
    title: "Quality Management",
    description:
      "Strict quality control frameworks delivering reliable, compliant, and high-performance outcomes.",
  },
  {
    title: "Cost Management",
    description:
      "Strategic budgeting, financial planning, and cost optimization for maximum efficiency.",
  },
  {
    title: "Contract Management",
    description:
      "Professional contract handling, tendering, and procurement with complete transparency.",
  },
  {
    title: "Dispute Adjudication Proceedings",
    description:
      "Expert handling of contractual disputes through structured adjudication proceedings, ensuring fair and timely resolution for all parties.",
  },
  {
    title: "Risk Management",
    description:
      "Advanced risk analysis and mitigation strategies ensuring secure project execution.",
  },
  {
    title: "Material Management",
    description:
      "Efficient material planning, procurement, and logistics for uninterrupted workflow.",
  },
];


const projects = [
  {
    category: "Residential",
    title: "Infinity Heights Residences",
    location: "Bengaluru",
    area: "4.2L sqft",
    status: "Completed",
    image: "/assets/commercial.jpg",
  },
  {
    category: "Commercial",
    title: "ArtTech Corporate Campus",
    location: "Hyderabad",
    area: "2.8L sqft",
    status: "Completed",
    image: "/assets/about.jpg",
  },
  {
    category: "Institutional",
    title: "Horizon Convention Centre",
    location: "Chennai",
    area: "1.5L sqft",
    status: "Ongoing",
    image: "/assets/work.jpg",
  },
  {
    category: "Township",
    title: "Elara Mixed-Use Township",
    location: "Pune",
    area: "12L sqft",
    status: "Completed",
    image: "/assets/renovation.jpg",
  },
  {
    category: "Railways",
    title: "Green Line Metro Corridor",
    location: "Mumbai",
    area: "12L sqft",
    status: "Completed",
    image: "/assets/greenmetro.jpg",
  },
  {
    category: "Railways",
    title: "Bullet Train Corridor",
    location: "Mumbai",
    area: "15L sqft",
    status: "Ongoing",
    image: "/assets/bullet.avif",
  },
  {
    category: "Railways",
    title: " Velocity High-Speed Rail Corridor",
    location: "Pune",
    area: "16L sqft",
    status: "Ongoing",
    image: "/assets/htrain.webp",
  },
];


const filters = [
  "All",
  "Residential",
  "Commercial",
  "Institutional",
  "Township",
  "Railways"

];



export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS.slice(1, 10) : PROJECTS.filter(p => p.type === filter).slice(1, 10);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [
              ...new Set([...prev, entry.target.dataset.index]),
            ]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  const [visibleCardss, setVisibleCardss] = useState([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCardss((prev) => [
              ...new Set([...prev, entry.target.dataset.index]),
            ]);
          }
        });
      },
      { threshold: 0.25 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}


      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginTop: "48px",
              transition: "opacity 1s ease-in-out",
              opacity: index === current ? 1 : 0,
            }}
          />
        ))}

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(27, 37, 45, 0.7)",
          }}
        ></div>

        {/* Content Container */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            width: "100%",
            padding: "0 32px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#fff",
          }}
        >
          {/* Left Section */}
          <div style={{ width: "50%" }}>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                marginTop: "78px",
                lineHeight: "1.2",
              }}
            >
              Engineering Projects.{" "}
              <span style={{ color: "#ffffff" }}>
                Delivered with Precision.
              </span>
            </h1>

            <p style={{ fontSize: "20px", marginTop: "20px" }}>
              Infinity Art PMC Engineering Services provides end-to-end project
              management consultancy to India's leading developers and institutions —
              from concept to commissioning.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
              <button
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#1E4D8C",
                  color: "#fff",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                Explore Project
              </button>

              <button
                style={{
                  padding: "12px 24px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                  color: "#fff",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                Learn More
              </button>
            </div>

            {/* Features */}
            <ul
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "24px",
                fontSize: "16px",
                listStyle: "none",
                padding: 0,
              }}
            >
              <li>✓ ISO Certified</li>
              <li>✓ 20+ Years Expertise</li>
              <li>✓ Pan-India Presence</li>
            </ul>
          </div>

          {/* Right Section */}
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "16px",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                marginTop: "78px",
                width: "380px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                fontFamily: "sans-serif",
              }}
            >
              <div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "12px",
                  }}
                >
                  PERFORMANCE OVERVIEW
                </p>

                {/* Progress Item */}
                {[
                  { label: "On-Time Delivery Rate", value: 98 },
                  { label: "Client Satisfaction", value: 99 },
                  { label: "Avg. Cost Saving Delivered", value: 18 },
                ].map((item, i) => (
                  <div key={i} style={{ marginBottom: "12px" }}>
                    <p style={{ color: "#555", fontSize: "14px" }}>
                      {item.label}
                    </p>
                    <p
                      style={{
                        color: "#1E4D8C",
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginBottom: "4px",
                      }}
                    >
                      {item.value}%
                    </p>
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "#e5e5e5",
                        height: "8px",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        style={{
                          width: `${item.value}%`,
                          backgroundColor: "#1E4D8C",
                          height: "8px",
                          borderRadius: "999px",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div>
                <hr style={{ border: "1px solid #ddd", marginBottom: "8px" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    textAlign: "center",
                    gap: "4px",
                    color: "#333",
                  }}
                >
                  {[
                    ["20+", "Years of Excellence"],
                    ["10M+", "Sqft Managed"],
                    ["200+", "Projects Delivered"],
                    ["180+", "Satisfied Clients"],
                    [
                      "20+",
                      "Years of International Exposure in Dubai & Qatar.",
                    ],
                  ].map((stat, i) => (
                    <div key={i}>
                      <p style={{ fontWeight: "bold", fontSize: "14px" }}>
                        {stat[0]}
                      </p>
                      <span style={{ fontSize: "11px", color: "#777" }}>
                        {stat[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 72,
              alignItems: "center"
            }}
          >
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
      </section> */}

      <div
        style={{
          position: "relative",
          background: "linear-gradient(to right, #f9fafb, #ffffff, #f9fafb)",
          padding: "80px 32px",
          overflow: "hidden",
        }}
      >
        {/* Background Blur Circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "384px",
            height: "384px",
            backgroundColor: "#e9d5ff",
            borderRadius: "50%",
            opacity: 0.2,
            filter: "blur(60px)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "384px",
            height: "384px",
            backgroundColor: "#c7d2fe",
            borderRadius: "50%",
            opacity: 0.2,
            filter: "blur(60px)",
          }}
        ></div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "relative",
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "48px",
            color: "#111827",
            zIndex: 10,
          }}
        >
          About Infinity Art PMC Engineering Services
        </motion.h1>

        {/* Main Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "row", // <-- changed from column to row
            gap: "48px",
            position: "relative",
            zIndex: 10,
            flexWrap: "wrap", // makes it responsive
          }}
        >
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            style={{
              flex: "1 1 400px", // grow, shrink, basis for responsiveness
              color: "#374151",
              lineHeight: "1.7",
            }}
          >
            <div style={{ marginBottom: "20px", fontSize: "18px" }}>
              Built on integrity and driven by excellence, Infinity Art PMC Engineering
              Services Pvt. Ltd. Co. is dedicated to delivering top-quality project
              management consultancy services.
            </div>

            <div style={{ marginBottom: "20px", fontSize: "18px" }}>
              We provide reliable PMC solutions for residential, commercial,
              institutional, and township projects. Our goal is to ensure every
              project is completed on time, within budget, and to the highest
              standards.
            </div>

            <div style={{ fontSize: "18px" }}>
              Our team brings over 30 years of construction and project management
              experience. We focus on accountability, transparency, and measurable
              results to give our clients peace of mind.
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            style={{
              flex: "1 1 400px", // grow, shrink, basis for responsiveness
            }}
          >
            <img
              src="/assets/about.jpg"
              alt="About Infinity Art PMC"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                objectFit: "cover",
                transition: "transform 0.7s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </motion.div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      {/* <section className="section-alt">
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
      </section> */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row", // <-- changed to row
            gap: "48px",
            alignItems: "flex-start",
            flexWrap: "wrap", // makes it responsive
          }}
        >
          {/* Image Section */}
          <div
            style={{
              flex: "1 1 400px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <img
              src="/assets/work.jpg"
              alt="Infinity Art PMC Work"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                objectFit: "cover",
                transition: "all 0.5s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = "grayscale(100%) brightness(90%)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "none";
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                backgroundColor: "#2563EB",
                color: "white",
                fontWeight: "bold",
                padding: "8px 16px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                fontSize: "14px",
              }}
            >
              20+ Years Experience
            </div>
          </div>

          {/* Text Section */}
          <div style={{ flex: "1 1 400px" }}>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "24px",
                lineHeight: "1.2",
              }}
            >
              Built on Integrity. <br /> Driven by Excellence.
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#374151",
                marginBottom: "16px",
              }}
            >
              Infinity Art PMC Engineering Services Pvt. Ltd. Co. is a premier project
              management consultancy delivering reliable PMC services across
              residential, commercial, institutional, and township sectors.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#374151",
                marginBottom: "24px",
              }}
            >
              Led by a seasoned team with 30+ years of construction experience, our
              approach is rooted in accountability, transparency, and measurable
              results.
            </p>

            {/* Vision & Mission */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "24px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F3F4F6",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#DBEAFE";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#F3F4F6";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  🎯 Our Vision
                </p>
                <p style={{ color: "#374151" }}>
                  To be the most trusted PMC partner delivering consistent value and
                  excellence.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#F3F4F6",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#DBEAFE";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#F3F4F6";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  🤝 Our Mission
                </p>
                <p style={{ color: "#374151" }}>
                  Committed to core accountability grounded in integrity and ethical
                  practices.
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              style={{
                backgroundColor: "#2563EB",
                color: "white",
                fontWeight: "600",
                padding: "12px 24px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1D4ED8";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#2563EB";
              }}
              onClick={() => {
                window.location.href = "/about";
              }}
            >
              More About Us &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* ── PROJECTS ── */}
      {/* <section className="section">
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
      </section> */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F8FAFC",
          overflow: "hidden",
        }}
      >
        {/* Full-width heading */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#1E4D8C",
            color: "white",
            padding: "64px 24px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "8px" }}>
            Engineering Solutions
          </h1>
          <p style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            Built for Excellence & Performance
          </p>
        </div>

        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "33.333%",
            opacity: 0.1,
            backgroundColor: "var(--primery)",
          }}
        />

        {/* Main content grid */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // two-column layout
            gap: "80px",
            padding: "80px 24px",
            alignItems: "center", // vertical center for both columns
          }}
        >
          {/* List of services */}
          <div>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: "0.875rem",
                marginBottom: "24px",
                fontWeight: "600",
                color: "var(--primery)",
              }}
            >
              Our Core Services
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  style={{
                    cursor: "pointer",
                    padding: "16px",
                    borderRadius: "12px",
                    transition: "all 0.3s",
                    backgroundColor: active === index ? "#E0F2FF" : "transparent",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: active === index ? "#1E4D8C" : "#4B5563",
                      transform: active === index ? "translateX(16px)" : "none",
                      transition: "all 0.3s",
                    }}
                  >
                    {service.title}
                  </h3>

                  <div
                    style={{
                      height: "3px",
                      marginTop: "8px",
                      borderRadius: "9999px",
                      width: active === index ? "128px" : "0",
                      backgroundColor: active === index ? "#1E4D8C" : "transparent",
                      transition: "all 0.5s",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Service detail card */}
          <div
            style={{
              display: "flex",
              alignItems: "center", // vertically center the card
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "480px" }}>
              <span
                style={{
                  fontSize: "120px",
                  fontWeight: 700,
                  opacity: 0.1,
                  position: "absolute",
                  top: "-64px",
                  left: "-40px",
                  userSelect: "none",
                  color: "var(--primery)",
                }}
              >
                0{active + 1}
              </span>

              <div
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  padding: "40px",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                  border: "1px solid #F3F4F6",
                  borderRadius: "32px",
                  transition: "all 0.5s",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: 600,
                    marginBottom: "16px",
                    color: "var(--primery)",
                  }}
                >
                  {services[active].title}
                </h3>
                <p
                  style={{
                    color: "#4B5563",
                    fontSize: "1.125rem",
                    lineHeight: 1.75,
                  }}
                >
                  {services[active].description}
                </p>
                <br />
                <br />
                <a
                  href="/services"
                  style={{
                    color: '#2563EB',
                    textDecoration: 'none',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#1E40AF'}  
                  onMouseLeave={e => e.currentTarget.style.color = '#2563EB'}  
                >
                  Read more 
                </a>
              </div>
               
            </div>
          </div>
         
        </div>
      </section>

      {/* Proftfolio Section */}
      <section
        style={{
          backgroundColor: "#1E4D8C",
          color: "white",
          padding: "80px 0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <h2
              style={{
                fontWeight: "700",
                marginBottom: "24px",
                fontSize: "2.25rem",
              }}
            >
              Our Project Portfolio
            </h2>
            <p style={{ color: "white", maxWidth: "700px", margin: "0 auto" }}>
              Explore our diverse portfolio of residential, commercial, institutional,
              and township projects delivered with excellence.
            </p>
          </div>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "56px",
            }}
          >
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: "8px 24px",
                  borderRadius: "9999px",
                  border: activeFilter === filter ? "1px solid var(--primery)" : "1px solid rgba(255,255,255,0.2)",
                  backgroundColor: activeFilter === filter ? "var(--primery)" : "transparent",
                  color: activeFilter === filter ? "white" : "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  boxShadow: activeFilter === filter ? "0 4px 10px rgba(0,0,0,0.5)" : "none",
                  transition: "all 0.3s",
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth >= 1024 ? "row" : "column",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  backgroundColor: "black",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  transition: "transform 1s, opacity 1s",
                  transform: visibleCardss.includes(String(index)) ? "translateY(0)" : "translateY(64px)",
                  opacity: visibleCardss.includes(String(index)) ? 1 : 0,
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: window.innerWidth >= 1024 ? "45%" : "100%",
                    height: window.innerWidth >= 1024 ? "auto" : window.innerWidth >= 640 ? "18rem" : "16rem",
                    position: "relative",
                  }}
                >
                  <img
                    src={project.image}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      padding: "4px 16px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      borderRadius: "9999px",
                      backgroundColor: "var(--primery)",
                    }}
                  >
                    {project.category}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      padding: "4px 16px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      borderRadius: "9999px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    width: window.innerWidth >= 1024 ? "55%" : "100%",
                    padding: window.innerWidth >= 1024 ? "40px" : "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      marginBottom: "16px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "32px",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <div>📍 {project.location}</div>
                    <div>📐 {project.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
  type="button"
  className="btn btn-light"
  style={{
    cursor: 'pointer',
    marginTop: '30px',         
    display: 'block', 
    borderRadius: '7px',          
    marginLeft: 'auto',         
    marginRight: 'auto',        
    padding: '12px 24px',        
    fontSize: '16px' 
  }}
  onClick={() => {
    window.location.href = '/projects';
  }}
>
  View All Project
</button>
        </div>
      </section>

      {/* ── CASE STUDY TEASER ── */}
      <CaseStudies/>
      
      <Feedback />
      <Start />

      {/* ── TESTIMONIALS ── */}
     

      {/* ── CTA BANNER ── */}
      {/* <section style={{ background: C.blue, padding: "72px 32px", textAlign: "center" }}>
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
      </section> */}
    </>
  );
}
