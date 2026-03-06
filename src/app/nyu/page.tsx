import type { Metadata } from "next";
import Link from "next/link";
import styles from "../detail.module.css";

export const metadata: Metadata = {
  title: "NYU - Jayesh Gaur",
};

export default function NYUPage() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        &larr; Back to Home
      </Link>

      <header className={styles.pageHeader}>
        <div className={styles.headerMeta}>2021 &mdash; 2023</div>
        <h1 className={styles.pageTitle}>New York University</h1>
        <p className={styles.pageSubtitle}>Master of Science in Computer Engineering</p>
      </header>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>The Pivot</h2>
        <div className={styles.sectionContent}>
          <p>
            After two years at Capgemini, I knew traditional backend work had run its course. I
            wanted to understand AI properly. Not just use the APIs, but actually get how the
            systems work under the hood.
          </p>
          <p>
            NYU Tandon was a hard reset. Two years of machine learning, neural networks, and all
            the math that makes modern AI tick. I wasn&apos;t there for the degree. I was there to
            learn how to build things I couldn&apos;t build before.
          </p>

          <div className={styles.highlightBox}>
            <p>
              &ldquo;The best engineers aren&apos;t specialists. They understand systems deeply
              enough to connect things others can&apos;t see.&rdquo;
            </p>
          </div>

          <p>
            Going from backend to AI wasn&apos;t starting over. It was adding a new layer. The same
            instincts that helped me build reliable systems translated directly to building AI
            pipelines that actually work in production. Tandon gave me the theory. The real learning
            came from building.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          <a
            href="https://github.com/jayeshgaur/Python-Framework-for-Scalable-ML"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <h3 className={styles.projectName}>Simple Classifier</h3>
            <p className={styles.projectDesc}>
              Python framework for ML workflows. Data prep, hyperparameter tuning, and model
              comparison in one pipeline. Built for people who want to experiment fast without
              boilerplate.
            </p>
          </a>

          <a
            href="https://github.com/jayeshgaur/Chess-Puzzle-Generator"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <h3 className={styles.projectName}>Chess Puzzle Generator</h3>
            <p className={styles.projectDesc}>
              Algorithmic generation of aesthetic chess puzzles. Optimized for beauty and
              counter-intuitive solutions, not just difficulty.
            </p>
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Jayesh Gaur &middot; San Francisco &middot; 2026</p>
      </footer>
    </div>
  );
}
