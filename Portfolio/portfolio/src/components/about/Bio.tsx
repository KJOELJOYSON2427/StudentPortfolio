"use client";

import React from "react";
import "./details.css";
import { useTheme } from "@/context/ThemeProvider.Context";

const Bio = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`bio-container ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Heading */}
      <div className="bio-header">
        <h2 className="bio-title">K Joel Joyson</h2>
        <p className="bio-subtitle">
          Aspiring Software Developer with a strong passion for technology,
          problem-solving, and innovation 👨‍💻
        </p>
      </div>

      {/* Image + Text */}
      <div className="bio-content">
        <img
          width={200}
          height={200}
          src="/icons/Student.jpg"
          alt="Profile"
          className="bio-image"
        />
        <div className="bio-text">
          <p>
            I love building <strong>interactive web applications</strong> and
            continuously learning new technologies. My core skills include{" "}
            <strong>React, JavaScript, and Backend Development</strong>.
          </p>
          <p>
            Beyond coding, I enjoy exploring creative ideas, working on side
            projects, and contributing to open-source communities. 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
