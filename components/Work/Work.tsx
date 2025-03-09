// components/Work/Work.tsx
import React from "react";
import styles from "./Work.module.scss";

interface WorkItem {
  category: string;
  projectName: string;
  year: string;
}

const Work: React.FC = () => {
  const workItems: WorkItem[] = [
    { category: "Agentic OS", projectName: "TRUFFLES", year: "2024" },
    {
      category: "Contextual Interfaces",
      projectName: "INTENT OS",
      year: "2023",
    },
    { category: "AI Hardware", projectName: "ASIMOV", year: "2024" },
    { category: "Wellness", projectName: "VAPOUR", year: "2024" },
    {
      category: "Digital Wellness",
      projectName: "COGNITIVE DIAL",
      year: "2024",
    },
  ];

  return (
    <section className={styles.workSection}>
      <div className={styles.workContainer}>
        <h2 className={styles.heading}>WORK</h2>
        <div className={styles.workGrid}>
          {workItems.map((item, index) => (
            <div key={index} className={styles.workRow}>
              <div className={styles.category}>{item.category}</div>
              <div className={styles.projectName}>{item.projectName}</div>
              <div className={styles.year}>{item.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
