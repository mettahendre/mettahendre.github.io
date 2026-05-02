import styles from "./page.module.css";

const education = [
  {
    degree:  "Bachelor of Engineering (BE)",
    school:  "Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)",
    period:  "Aug 2018 – Jul 2022",
    grade:   "9.16 CGPA",
  },
  {
    degree:  "HSSC – Science",
    school:  "Kendriya Vidyalaya (KV)",
    period:  "Completed 2018",
    grade:   "",
  },
];

const certs = [
  {
    title:   "Databricks Certified Data Engineer Associate",
    issuer:  "Databricks",
    issued:  "Nov 2024",
    expires: "Nov 2026",
    color:   "var(--royal-rose)",
  },
  {
    title:   "Microsoft Certified: Azure Fundamentals",
    issuer:  "Microsoft",
    issued:  "Nov 2024",
    expires: "No expiry",
    color:   "var(--royal-gold)",
  },
];

export default function EducationPage() {
  return (
    <main>
      {/* ── Education ── */}
      <section className="section container">
        <p className={styles.tag}>Academic Background</p>
        <h1 className="section-title">Education</h1>
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-gem"></div>
          <div className="divider-line right"></div>
        </div>

        <div className={styles.eduGrid}>
          {education.map((e, i) => (
            <div
              key={e.degree}
              className={`glass-card ${styles.eduCard} fade-up delay-${i + 1}`}
            >
              <h2 className={`${styles.degree} serif`}>{e.degree}</h2>
              <p className={styles.school}>{e.school}</p>
              <p className={styles.period}>{e.period}</p>
              {e.grade && (
                <span className={styles.gradeBadge}>{e.grade}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section container">
        <p className={styles.tag}>Credentials</p>
        <h2 className="section-title">Certifications</h2>
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-gem"></div>
          <div className="divider-line right"></div>
        </div>

        <div className={styles.certGrid}>
          {certs.map((c, i) => (
            <div
              key={c.title}
              className={`glass-card ${styles.certCard} fade-up delay-${i + 1}`}
            >
              <div className={styles.certTop} style={{ borderColor: c.color }}>
                <span className={styles.certIssuer} style={{ color: c.color }}>
                  {c.issuer}
                </span>
              </div>
              <h3 className={styles.certTitle}>{c.title}</h3>
              <div className={styles.certMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Issued</span>
                  <span className={styles.metaValue}>{c.issued}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Expires</span>
                  <span className={styles.metaValue}>{c.expires}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
