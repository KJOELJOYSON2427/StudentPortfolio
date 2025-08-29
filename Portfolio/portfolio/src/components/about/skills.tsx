"use client";

import styles from "./skills.module.css";
 
import { Code, Database, Layout, Cloud } from "lucide-react"; 

import React from 'react'

type Skill ={
    label:string;
    icon:React.ReactNode;
    gradient:string;
    experience:string;
};

const skills: Skill[] = [
  {
    label: "Frontend",
    icon: <Layout size={22} />,
    gradient: styles.gradientBlue,
    experience: "2+ years",
  },
  {
    label: "Backend",
    icon: <Database size={22} />,
    gradient: styles.gradientGreen,
    experience: "1.5 years",
  },
  {
    label: "Cloud",
    icon: <Cloud size={22} />,
    gradient: styles.gradientPurple,
    experience: "1 year",
  },
  {
    label: "Coding",
    icon: <Code size={22} />,
    gradient: styles.gradientOrange,
    experience: "3+ years",
  },
];

function Skills() {
  return (
    <div className={styles.skillCard}>
        {
            skills.map((skill, i)=>(
               <div key={i}
               className={`${styles.skillCard} ${skill.gradient}`}
               title={skill.experience}
               >
                <div className={styles.icon}>
                    {
                        skill.icon
                    }
                    </div>
                
                   
               </div> 
            ))
        }
    </div>
  )
}

export default skills