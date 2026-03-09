import type { Metadata } from "next";
import styles from "../detail.module.css";

export const metadata: Metadata = {
  title: "Capgemini - Jayesh Gaur",
};

export default function CapgeminiPage() {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <div className={styles.headerMeta}>2019 &mdash; 2021</div>
        <h1 className={styles.pageTitle}>Capgemini</h1>
        <p className={styles.pageSubtitle}>Software Engineer &rarr; DevOps Engineer</p>
      </header>

      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2020 &mdash; 2021</div>
          <h3 className={styles.timelineTitle}>DevOps &amp; Modernization</h3>
          <div className={styles.timelineContent}>
            <p>
              Moved into a DevOps role after demonstrating impact on the project. Advocated for and
              implemented modern technologies to accelerate development &mdash; instead of
              maintaining 17-year-old Java enterprise patterns, pushed for modern tooling and
              practices.
            </p>
            <p>
              Built CI/CD pipelines, automated deployment processes, and helped the team ship faster
              with fewer production incidents.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2019 &mdash; 2020</div>
          <h3 className={styles.timelineTitle}>Software Engineer</h3>
          <div className={styles.timelineContent}>
            <p>
              Joined as a fresh graduate on a 16-year legacy system management project. Started as a
              base software engineer, but quickly identified opportunities to improve processes and
              reduce complexity.
            </p>
            <p>
              Had opinions, shared them, and backed them up with results. This led to the transition
              into DevOps and eventually influenced how the team approached new feature development.
            </p>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Jayesh Gaur &middot; San Francisco &middot; 2026</p>
      </footer>
    </div>
  );
}
