


"use client";
import React, { useEffect, useRef, useState } from "react";
import "../styles/portfolio.modal.css"

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
    title: "GreenLine Metro Corridor",
    location: "Bengaluru",
    area: "18km Corridor",
    status: "Completed",
    image: "/assets/train.jpg",
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
    title: " Velocity High Speed Rail Corridor",
    location: "Mumbai-Ahmedabad",
    area: "72km Stretch",
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
          </div>
        </div>
      ))}
    </div>

  </div>

</section>
  );
};

export default Portfolio;