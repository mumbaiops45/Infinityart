"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { C, SERVICES, PROJECTS, STATS, TESTIMONIALS, CASE_STUDIES } from "../lib/data";
import { motion } from 'framer-motion';
import Feedback from "../components/Feedback";
import Start from "../components/Start";
import CaseStudies from "../components/CaseStudies";
import Portfolio from "../components/Portfolio";
import "../styles/servicehome.modal.css"


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



export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS.slice(1, 10) : PROJECTS.filter(p => p.type === filter).slice(1, 10);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
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

  if (!mounted) {
    return null;
  }


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


        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(27, 37, 45, 0.7)",
          }}
        ></div>


        <div className="herostly">

          <div style={{
            width: window.innerWidth <= 768 ? "100%" : "50%",
          }}>
            <h1
              style={{
                fontSize: "42px",
                fontWeight: "700",
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


          <div className="hero-rigght"
            // style={{
            //   width: "50%",
            //   display: "flex",
            //   justifyContent: "flex-end",
            // }}
          >
            <div className="performcard">
              <div >
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


              <div>
                <hr style={{ border: "1px solid #ddd", marginBottom: "8px" }} />

                <div
                  style={{
                    marginTop: "15px",
                    display: "flex",
                    fontSize: "12px",
                    textAlign: "center",
                    color: "#333",
                    alignItems: "flex-start",
                  }}
                >
                  {[
                    ["20+", "Years of Excellence"],
                    ["10M+", "Sqft Managed"],
                    ["200+", "Projects Delivered"],
                    ["180+", "Satisfied Clients"],
                    ["20+", "Years of International Exposure in Dubai & Qatar."],
                  ].map((stat, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 8px",
                      }}
                    >
                      <p style={{ fontWeight: "bold", fontSize: "14px", margin: 0 }}>
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


      <div className="somechange">

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
            flexDirection: "row",
            gap: "48px",
            position: "relative",
            zIndex: 10,
            flexWrap: "wrap",
          }}
        >
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            style={{
              flex: "1 1 400px",
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
              Our team brings over 20+ years of construction and project management
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
              flex: "1 1 400px",
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

      <div className="stylesome"
      // style={{
      //   maxWidth: "1200px",
      //   margin: "0 auto",
      //   padding: "4rem 5rem"
      // }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "48px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >

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
              Led by a seasoned team with 20+ years of construction experience, our
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
                backgroundColor: "#1E4D8C",
                color: "white",
                fontWeight: "600",
                padding: "12px 24px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1E4D8C";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#1E4D8C";
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
        <div className="servicehome"
        // style={{
        //   maxWidth: "1280px",
        //   margin: "0 auto",
        //   width: "100%",
        //   display: "grid",
        //   gridTemplateColumns: "1fr 1fr",
        //   gap: "80px",
        //   padding: "80px 24px",
        //   alignItems: "center", 
        // }}
        >
          {/* List of services */}
          <div>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: "1.5rem",
                marginBottom: "24px",
                fontWeight: "700",
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
      <Portfolio />


      {/* ── CASE STUDY TEASER ── */}
      <CaseStudies />

      <Feedback />
      <Start />


    </>
  );
}
