import { Book, GraduationCap } from "lucide-react";

import "./Education.css"

import { EducationList } from "./EducationList";
const Education=()=>{
      
  const educationData:EducationList[] = [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Science",
      institution: "Stanford University",
      field: "Computer Science",
      startDate: "2018-09",
      endDate: "2022-05",
      grade: "3.9/4.0",
      description: "Focused on artificial intelligence, machine learning, and software engineering. Dean's List all semesters. Lead developer for university robotics team."
    },
    {
      id: 2,
      degree: "High School Diploma",
      institution: "Lincoln High School",
      field: "Science & Mathematics",
      startDate: "2014-09",
      endDate: "2018-06",
      grade: "95%",
      description: "Graduated with honors. President of Computer Science Club. Participated in national coding competitions."
    }
  ];



    return (
        <>
        <section className="education-section">
        <div className="section-header">
          <h2 className="section-title">
            <GraduationCap size={40} className="title-icon" />
            Education
          </h2>
          <p className="section-subtitle">My academic journey and qualifications</p>

        </div>

        <div className="education-timeline">
              {
                educationData.map((edu)=>(
                    <div key={edu.id}>
                        
                        </div>
                ))
              }
        </div>
        </section>
        </>
    )

    

}

export default Education;