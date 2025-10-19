import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import "./Experience.css";

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const experiences = [
    {
      company: "Flutter Frog Solutions",
      role: "Web Development Intern",
      duration: "Jan 2024 – Mar 2024",
      points: [
        "Developed an Online Directory web app for the Entrepreneurs Forum in Nagercoil.",
        "Built Admin and Client modules using Flutter and Firebase.",
        "Implemented a scalable VLD (View, Logic, Data) architecture.",
      ],
    },
    {
      company: "Personal Projects",
      role: "Full Stack Developer",
      duration: "",
      points: [
        "Created a Student Attendance Management System with Java Servlets and MySQL.",
        "Built a React-based Canvas Editor using Fabric.js for creative editing.",
      ],
    },
  ];

  return (
    <div className="exp-wrapper">
      <motion.div
        className="exp-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="exp-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="exp-item"
            variants={itemVariants}
            onClick={() =>
              window.innerWidth < 768
                ? setActiveIndex(index)
                : setActiveIndex(null)
            }
          >
            <motion.div
              className="exp-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              <h3 className="exp-company">{exp.company}</h3>
              <p className="exp-role">{exp.role}</p>
              {exp.duration && <p className="exp-duration">{exp.duration}</p>}
            </motion.div>

            <motion.ul
              className="exp-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {exp.points.map((p, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6, color: "#c084fc" }}
                  transition={{ duration: 0.3 }}
                >
                  {p}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Overlay */}
      {activeIndex !== null && (
        <motion.div
          className="exp-overlay"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={() => setActiveIndex(null)}
        >
          <div className="overlay-content">
            <h3>{experiences[activeIndex].company}</h3>
            <p>{experiences[activeIndex].role}</p>
            <ul>
              {experiences[activeIndex].points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
