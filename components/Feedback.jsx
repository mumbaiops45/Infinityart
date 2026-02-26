"use client";

import  { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { feedbacks } from "../lib/Feedback";
import "../styles/feedback.modal.css"

const FeedbackCard = ({ feedback }) => (
  <div className="feedback-card">
    <p className="feedback-comment">"{feedback.comment}"</p>
    <div className="feedback-stars">
      {[...Array(feedback.rating)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
    <p className="feedback-name">{feedback.name}</p>
    <p className="feedback-role">{feedback.role}</p>
  </div>
);

const Feedback = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const cardsPerView = 3;
  const totalSlides = Math.ceil(feedbacks.length / cardsPerView);

  useEffect(() => {
    const container = containerRef.current;
    let scrollIndex = currentIndex;

    const interval = setInterval(() => {
      if (!isPaused && container) {
        scrollIndex = (scrollIndex + 1) % totalSlides;
        setCurrentIndex(scrollIndex);
        container.scrollTo({
          left: scrollIndex * container.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex, totalSlides]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="feedback-section">
      <h2>What Our Clients Say</h2>

      <div
        className="feedback-container"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {feedbacks.concat(feedbacks).map((fb, idx) => (
          <FeedbackCard key={idx} feedback={fb} />
        ))}
      </div>

      <div className="feedback-dots">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            className={`feedback-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
