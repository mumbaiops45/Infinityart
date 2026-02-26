
"use client";

import React from 'react';
import "../styles/start.modal.css"
import Link from 'next/link';

const Start = () => {
    return (
        <div className="start-section">
            <h1>Ready to Start Your Project?</h1>
            <p>
                Let our expert team guide your project from concept to commissioning. Get in touch today.
            </p>
            <div className="start-buttons">
                <Link href="/contact">
                    <button
                        className="btn-yellow"
                        style={{ cursor: "pointer" }}
                    >
                        Get In Touch
                    </button>
                </Link>

                <Link href="/projects">
                    <button
                        className="btn-white"
                        style={{ cursor: "pointer" }}
                    >
                        View Our Work
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Start;