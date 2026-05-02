import styles from "./page.module.css";

const roles = [
  {
    title:    "Data Engineer",
    company:  "TelefonicaTech",
    period:   "Feb 2026 – Present",
    duration: "Current",
    points: [
      "Driving data engineering solutions and cloud-based data architecture at TelefonicaTech.",
      "Working on advanced data pipelines and analytics platforms leveraging Azure ecosystem.",
      "Contributing to intelligent systems transformation and scalable data infrastructure.",
    ],
  },
  {
    title:    "Associate Consultant",
    company:  "Capgemini",
    period:   "Jan 2025 – Feb 2026",
    duration: "1 yr 2 mos",
    points: [
      "Led data engineering initiatives and designed scalable big data pipelines.",
      "Drove intelligent systems transformation using Azure Databricks and PySpark.",
      "Mentored junior analysts and conducted architecture reviews.",
    ],
  },
  {
    title:    "Senior Analyst",
    company:  "Capgemini",
    period:   "Nov 2023 – Jan 2025",
    duration: "1 yr 3 mos",
    points: [
      "Developed robust data integration solutions using Azure Data Factory (ADF).",
      "Optimized Synapse Analytics queries, achieving significant performance improvements.",
      "Collaborated with cross-functional teams to deliver end-to-end data workflows.",
    ],
  },
  {
    title:    "Analyst",
    company:  "Capgemini",
    period:   "Apr 2022 – Oct 2023",
    duration: "1 yr 7 mos",
    points: [
      "Built and maintained ETL pipelines for large-scale data ingestion.",
      "Performed SQL performance tuning and query optimization.",
      "Gained hands-on experience in Azure cloud services and data modeling.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main>
      <section className="section container">
        {/* Header */}
        <div className={styles.pageHeader}>
          <p className={styles.tag}>Career Journey</p>
          <h1 className="section-title">Professional Experience</h1>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-gem"></div>
            <div className="divider-line right"></div>
          </div>
          <p className={styles.summary}>
            Currently at <strong>TelefonicaTech</strong>, with over{" "}
            <strong>4 years</strong> of progressive growth across data engineering roles —
            previously at <strong>Capgemini</strong> driving impactful data solutions
            across the Azure ecosystem.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {roles.map((role, i) => (
            <div key={role.title} className={styles.timelineItem}>
              {/* Dot & line */}
              <div className={styles.dotCol}>
                <div className={styles.dot}>
                  <span className={styles.dotInner} />
                </div>
                {i < roles.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={`glass-card ${styles.card} fade-up delay-${i + 1}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <h2 className={`${styles.roleTitle} serif`}>{role.title}</h2>
                    <p className={styles.company}>{role.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{role.period}</span>
                    <span className={styles.duration}>{role.duration}</span>
                  </div>
                </div>
                <ul className={styles.points}>
                  {role.points.map((pt) => (
                    <li key={pt} className={styles.point}>
                      <span className={styles.bullet}>—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
