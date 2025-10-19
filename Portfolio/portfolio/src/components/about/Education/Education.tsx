import { Award, Book, Calendar, GraduationCap } from "lucide-react";

import styles from"./Education.module.css"

import { EducationList } from "./EducationList";

const Education = () => {
  const educationData: EducationList[] = [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Science",
      institution: "Stanford University",
      field: "Computer Science",
      startDate: "2018-09",
      endDate: "2022-05",
      grade: "3.9/4.0",
      description:
        "Focused on artificial intelligence, machine learning, and software engineering. Dean's List all semesters. Lead developer for university robotics team.",
    },
    {
      id: 2,
      degree: "High School Diploma",
      institution: "Lincoln High School",
      field: "Science & Mathematics",
      startDate: "2014-09",
      endDate: "2018-06",
      grade: "95%",
      description:
        "Graduated with honors. President of Computer Science Club. Participated in national coding competitions.",
    },
  ];

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section className={styles.educationSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <GraduationCap size={40} className={styles.titleIcon} />
          Education
        </h2>
        <p className={styles.sectionSubtitle}>
          My academic journey and qualifications
        </p>
      </div>

      <div className={styles.educationTimeline}>
        {educationData.map((edu) => (
          <div key={edu.id} className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <div className={styles.educationTitle}>
                <h3 className={styles.degreeName}>{edu.degree}</h3>
                <p className={styles.institutionName}>{edu.institution}</p>
                <p className={styles.fieldName}>{edu.field}</p>
              </div>
              <div className={styles.educationMeta}>
                <div className={styles.dateRange}>
                  <Calendar size={16} />
                  <span>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
                {
                  edu.grade &&(
                    <div className={styles.grade}>
                      <Award size={16}/>
                      <span>{edu.grade}</span>
                      </div>
                  )
                }
              </div>
            </div>
            {
              edu.description && (
                <p className={styles.educationDescription}>
                {edu.description}
                </p>
              )
            }
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
