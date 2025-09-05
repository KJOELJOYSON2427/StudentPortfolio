"use client";

import styles from "./skills.module.css";
import { Code, Database, Layout, Cloud } from "lucide-react";
import React, { useState } from "react";
import SkillDialog from "./SkillDialog";

type Skill = {
  label: string;
  icon: React.ReactNode;
  gradient: string;
  experience: string;
  level: number;
  details: string[];
};

const skills: Skill[] = [
  {
    label: "Frontend",
    icon: <Layout size={22} />,
    gradient: styles.gradientBlue,
    experience: "2+ years",
    level: 85,
    details: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "Backend",
    icon: <Database size={22} />,
    gradient: styles.gradientGreen,
    experience: "1.5 years",
    level: 70,
    details: ["Node.js", "Spring Boot", "Express.js", "NestJS"],
  },
  {
    label: "Cloud",
    icon: <Cloud size={22} />,
    gradient: styles.gradientPurple,
    experience: "1 year",
    level: 65,
    details: ["AWS EC2", "Lambda", "S3", "DynamoDB"],
  },
  {
    label: "Coding",
    icon: <Code size={22} />,
    gradient: styles.gradientOrange,
    experience: "3+ years",
    level: 90,
    details: ["MySQL", "MongoDB", "Postgres",  "Neon", "Firebase"],
  },
];

function Skills() {
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleOpen = (skill: Skill) => {
    setSelectedSkill(skill);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSkill(null);
  };

  return (
    <div className={styles.skillsGrid}>
      {skills.map((skill, i) => (
        <div
          key={i}
          className={`${styles.skillCard} ${skill.gradient}`}
          title={skill.experience}
          onClick={() => handleOpen(skill)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.icon}>{skill.icon}</div>
          <span className="mb-2">{skill.label}</span>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <span className="text-sm mt-1">{skill.level}%</span>
        </div>
      ))}

      {selectedSkill && (
        <SkillDialog
          open={open}
          onClose={handleClose}
          label={selectedSkill.label}
          details={selectedSkill.details}
        />
      )}
    </div>
  );
}

export default Skills;
