import React from "react";
import { motion, Variants } from "framer-motion";
import { styles } from "./Experience-styles";

const Experience: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <div style={styles.wrapper}>
      <motion.div
        style={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          style={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <motion.div variants={itemVariants} style={styles.item}>
          <motion.span
            style={styles.badge}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            ✨ Achievement
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 style={styles.companyName}>Flutter Frog Solutions</h3>
            <p style={styles.role}>Web Development Intern</p>
            <p style={styles.duration}>Jan 2024 – Mar 2024</p>
            <ul style={styles.list}>
              {[
                "Developed an Online Directory web app for the Entrepreneurs Forum in Nagercoil.",
                "Built Admin and Client modules using Flutter and Firebase.",
                "Implemented a scalable VLD (View, Logic, Data) architecture.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  style={styles.listItem}
                  whileHover={{ x: 5, color: "#7c3aed" }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} style={styles.item}>
          <motion.span
            style={styles.badge}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            ✨ Achievement
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3 style={styles.companyName}>Personal Projects</h3>
            <p style={styles.role}>Full Stack Developer</p>
            <ul style={styles.list}>
              {[
                "Created a Student Attendance Management System with Java Servlets and MySQL.",
                "Built a React-based Canvas Editor using Fabric.js for creative editing.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  style={styles.listItem}
                  whileHover={{ x: 5, color: "#7c3aed" }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;