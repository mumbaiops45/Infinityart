


"use client";
import React, { useEffect, useRef, useState } from "react";
import "../styles/portfolio.modal.css"

const projects = [
  // {
  //   category: "Residential",
  //   title: "Infinity Heights Residences",
  //   location: "Bengaluru",
  //   area: "4.2L sqft",
  //   status: "Completed",
  //   image: "/assets/commercial.jpg",
  // },
  {
    category: "Commercial",
    title: "Grovenour’s House",
    location: "3B+P4+ 57 Story 5 Star Hotel Building at Dubai Marina, U.A.E",
    area: "2.8L sqft",
    status: "Completed",
    image: "/assets/Grovenour.png",
  },
  {
    category: "Residential",
    title: "Al akka Beach Resort",
    location: "B+G+27 Story 5 Star Hotel for Emirates Airlines at Fujairah, U.A.E  ",
    area: "3.5L sqft",
    status: "Completed",
    image: "/assets/akka.png",
  },
  // {
  //   category: "Township",
  //   title: "Elara Mixed-Use Township",
  //   location: "Pune",
  //   area: "12L sqft",
  //   status: "Completed",
  //   image: "/assets/renovation.jpg",
  // },
  {
    category: "Institutional",
    title: "Lusail Multi Purpose indoor Stadium ",
    location: "Lusail Multi Purpose indoor Stadium replica of Medison Square at Doha, Qatar",
    area: "18km ",
    status: "Completed",
    image: "/assets/stadium.png",
  },
  {
    category: "Railways",
    title: "U/G Mashreib Metro Station",
    location: " Doha Qatar.",
    area: "37 Mts",
    status: "Completed",
    image: "/assets/metrostation.png",
  },
  // {
  //   category: "Railways",
  //   title: " Velocity High Speed Rail Corridor",
  //   location: "Mumbai-Ahmedabad",
  //   area: "72km Stretch",
  //   status: "Ongoing",
  //   image: "/assets/htrain.webp",
  // },
];

const filters = [
  "All",
  "Residential",
  "Commercial",
  "Institutional",
  // "Township",
  "Railways"

];

const Portfolio = () => {
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

  return (
    <section className="portfolio-section">

      <div className="portfolio-container">

        {/* Header */}
        <div className="portfolio-header">
          <h2>Our Project Portfolio</h2>
          <p>
            Explore our diverse portfolio of residential, commercial,
            institutional, and township projects delivered with excellence.
          </p>
        </div>

        {/* Filters */}
        <div className="portfolio-filters">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "active" : ""}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`project-card ${visibleCards.includes(String(index)) ? "visible" : ""}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category">{project.category}</div>
                <div className="project-status">{project.status}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-details">
                  <div>📍 {project.location}</div>
                  <div>📐 {project.area}</div>

                </div>
               
                <a
  href="/projects"
  style={{
    textDecoration: "none",
    display: "inline-block",
    marginTop: "37px"
  }}
>
  <button
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #dee2e6",
      padding: "10px 20px",
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "15px",
      fontWeight: "500",
      color: "#212529",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
    }}
  >
    More Info →
  </button>
</a>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Portfolio;