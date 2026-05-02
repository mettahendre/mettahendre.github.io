import styles from "./page.module.css";
import Link from "next/link";

const skills = [
  { name: "Azure Data Factory" },
  { name: "Azure Databricks" },
  { name: "Azure Synapse Analytics" },
  { name: "PySpark" },
  { name: "SQL" },
  { name: "Python" },
  { name: "Data Pipelines" },
  { name: "Microsoft SQL Server" },
];

const certs = [
  { title: "Databricks Certified Data Engineer Associate", issued: "Nov 2024" },
  { title: "Microsoft Certified: Azure Fundamentals",      issued: "Nov 2024" },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        {/* Decorative blobs */}
        <div className={styles.blob1} />
        <div className={styles.blob2} />

        <div className={`${styles.heroInner} container`}>
          <div className={`${styles.avatarWrap} fade-up delay-1`}>
            <div className={styles.avatarRing}>
              <img
                src="/profile.jpg"
                alt="Metta Hendre"
                className={styles.avatar}
              />
            </div>
          </div>

          <div className={`${styles.heroText} fade-up delay-2`}>
            <p className={styles.greeting}>Hello, I&apos;m</p>
            <h1 className={`${styles.name} serif`}>Metta Hendre</h1>
            <p className={styles.headline}>
              Data Engineer at TelefonicaTech &nbsp;·&nbsp; Databricks Certified &nbsp;·&nbsp; Azure Specialist
            </p>
            <p className={styles.location}>Mumbai, Maharashtra, India</p>

            <div className={styles.ctas}>
              <Link href="/experience" className="btn btn-primary">
                View Experience
              </Link>
              <a
                href="https://www.linkedin.com/in/metta-h-87a127218/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mettahendre"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Summary ── */}
      <section className="section container">
        <h2 className="section-title fade-up">About Me</h2>
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-gem"></div>
          <div className="divider-line right"></div>
        </div>
        <div className={`glass-card ${styles.aboutCard} fade-up delay-1`}>
          <p className={styles.aboutText}>
            A passionate Data Engineer with <strong>4+ years of experience</strong>, currently at{" "}
            <strong>TelefonicaTech</strong> and previously at <strong>Capgemini</strong>, specializing in
            building robust data pipelines and intelligent systems transformation using the Azure ecosystem.
            I thrive at the intersection of cloud architecture and data engineering,
            turning complex data challenges into elegant, scalable solutions.
          </p>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section container">
        <h2 className="section-title fade-up">Core Skills</h2>
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-gem"></div>
          <div className="divider-line right"></div>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((s, i) => (
            <div key={s.name} className={`glass-card ${styles.skillCard} fade-up delay-${(i % 4) + 1}`}>
              <span className={styles.skillName}>{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications Preview ── */}
      <section className="section container">
        <h2 className="section-title fade-up">Certifications</h2>
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-gem"></div>
          <div className="divider-line right"></div>
        </div>
        <div className={styles.certsRow}>
          {certs.map((c) => (
            <div key={c.title} className={`glass-card ${styles.certCard} fade-up delay-2`}>
              <p className={styles.certTitle}>{c.title}</p>
              <p className={styles.certDate}>Issued: {c.issued}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Metta Hendre &mdash; Crafted with ♥
        </p>
        <div className={styles.footerLinks}>
          <a href="https://www.linkedin.com/in/metta-h-87a127218/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className={styles.dot}>·</span>
          <a href="https://github.com/mettahendre" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
