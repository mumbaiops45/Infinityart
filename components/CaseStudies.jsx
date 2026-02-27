"use client";

import React,{useState, useEffect, useRef} from 'react'
import { caseStudies } from '../lib/casestudies'

const CaseStudies = () => {

     const [visibleCards, setVisibleCards] = useState([]);
      const cardRefs = useRef([]);
    
    
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
          { threshold: 0.25 }
        );
    
        cardRefs.current.forEach((card) => {
          if (card) observer.observe(card);
        });
    
        return () => observer.disconnect();
      }, []);
  return (
    <div>
      <section className="case-studies-section">

        {/* Header */}
        <div className="case-studies-header">
          <div className="header-tag">PROVEN RESULTS</div>

          <h2 className="header-title">Case Studies</h2>

          <p className="header-subtitle">
            Real-world project delivery outcomes showcasing cost control,
            risk mitigation, and fast-track execution.
          </p>
        </div>

        {/* Cards */}
        <div className="case-studies-grid">

          {caseStudies.map((study, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`case-study-card ${visibleCards.includes(String(index)) ? "visible" : "hidden"
                }`}
            >

              {/* Image */}
              <div className="card-image">
                <img src={study.image} alt={study.title} />

                {/* Overlay */}
                <div className="card-overlay"></div>

                {/* Tag */}
                <div className="card-tag">{study.tag}</div>
              </div>

              {/* Content */}
              <div className="card-content">
                <h3 className="card-title">{study.title}</h3>

                {/* Results */}
                <div className="card-results">
                  <div className="result-item">
                    <div className="result-number">{study.result1}</div>
                    <div className="result-label">{study.result1Label}</div>
                  </div>

                  <div className="result-item">
                    <div className="result-number">{study.result2}</div>
                    <div className="result-label">{study.result2Label}</div>
                  </div>
                </div>

                {/* Button */}
                <a href="/case-studies" className="card-button">Read Full Case Study →</a>
              </div>

            </div>
          ))}

        </div>

        {/* CSS */}
        <style jsx>{`
    :root {
      --primery: #1E4D8C; /* you can adjust your primary color */
    }

    .case-studies-section {
      background: #FFFFFF;
      padding: 6rem 1.5rem;
      color: white;
    }

    @media (min-width: 1024px) {
      .case-studies-section {
       padding: 4rem 5rem;
      }
    }

    .case-studies-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .header-tag {
      display: inline-block;
      padding: 0.25rem 1rem;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      border-radius: 9999px;
      margin-bottom: 1rem;
      background: var(--primery);
      color: var(--primery);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .header-title {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: black;
    }

    @media (min-width: 1024px) {
      .header-title {
        font-size: 3rem;
      }
    }

    .header-subtitle {
      color: #9CA3AF; /* gray-400 */
      max-width: 42rem;
      margin: 0 auto;
    }

    .case-studies-grid {
      display: grid;
      gap: 2rem;
    }

    @media (min-width: 768px) {
      .case-studies-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .case-studies-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .case-study-card {
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      background: #121A2B;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.7s ease;
      transform: translateY(4rem);
      opacity: 0;
    }

    .case-study-card.visible {
      transform: translateY(0);
      opacity: 1;
    }

    .case-study-card:hover {
      transform: scale(1.03);
      border-color: var(--primery);
    }

    .card-image {
      position: relative;
      height: 14rem;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.7s;
    }

    .case-study-card:hover .card-image img {
      transform: scale(1.1);
    }

    .card-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, #0A0F1C, transparent 50%, transparent);
    }

    .card-tag {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      background: rgba(0, 0, 0, 0.6);
      color: var(--primery);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .card-content {
      padding: 1.5rem;
    }

    .card-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      line-height: 1.3;
      transition: color 0.3s;
    }

    .case-study-card:hover .card-title {
      color: var(--primery);
    }

    .card-results {
      display: flex;
      gap: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .result-item .result-number {
      font-size: 1.875rem;
      font-weight: 700;
      color: var(--primery);
    }

    .result-item .result-label {
      font-size: 0.875rem;
      color: #9CA3AF;
    }

    .card-button {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--primery);
      transition: transform 0.3s;
      background: none;
      border: none;
      cursor: pointer;
    }

    .card-button:hover {
      transform: translateX(0.5rem);
    }
  `}</style>
      </section>
    </div>
  )
}

export default CaseStudies
