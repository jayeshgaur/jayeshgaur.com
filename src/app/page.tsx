import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div>
          <h1 className={styles.heroTitle}>Jayesh Gaur</h1>
          <p className={styles.heroTagline}>Hacker/Engineer &middot; San Francisco</p>
          <div className={styles.heroCta}>
            <a href="#ventures" className={styles.btnPrimary}>
              View my work
            </a>
            <a href="#contact" className={styles.btnGhost}>
              Get in touch &rarr;
            </a>
          </div>
        </div>
        <div>
          <p className={styles.bigQuote}>&ldquo;I ship things that work.&rdquo;</p>
          <p className={styles.subtext}>
            Every problem has a solution. Systems, Infra, AI. I build what the problem needs.
            Whatever it takes.
          </p>
        </div>
      </section>

      {/* Ventures */}
      <section className={styles.section} id="ventures">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Ventures</h2>
        </div>

        <div className={styles.venturesGrid}>
          <Link href="/story" className={styles.ventureCard}>
            <div className={styles.ventureInfo}>
              <div className={styles.ventureHeader}>
                <span className={styles.ventureName}>Story.com</span>
                <span className={styles.ventureBadge}>Current</span>
              </div>
              <p className={styles.ventureTagline}>
                Building the future of storytelling. 500K+ monthly users.
              </p>
            </div>
            <div className={styles.ventureMeta}>
              <div className={styles.ventureDates}>2023 - Present</div>
              <span className={styles.ventureArrow}>&rarr;</span>
            </div>
          </Link>

          <Link href="/nyu" className={styles.ventureCard}>
            <div className={styles.ventureInfo}>
              <div className={styles.ventureHeader}>
                <span className={styles.ventureName}>New York University</span>
              </div>
              <p className={styles.ventureTagline}>
                MS Computer Engineering. Where backend met AI.
              </p>
            </div>
            <div className={styles.ventureMeta}>
              <div className={styles.ventureDates}>2021 - 2023</div>
              <span className={styles.ventureArrow}>&rarr;</span>
            </div>
          </Link>

          <Link href="/capgemini" className={styles.ventureCard}>
            <div className={styles.ventureInfo}>
              <div className={styles.ventureHeader}>
                <span className={styles.ventureName}>Capgemini</span>
              </div>
              <p className={styles.ventureTagline}>
                Software Engineer &rarr; DevOps. Modernized a 16-year legacy system.
              </p>
            </div>
            <div className={styles.ventureMeta}>
              <div className={styles.ventureDates}>2019 - 2021</div>
              <span className={styles.ventureArrow}>&rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Press */}
      <section className={styles.section} id="press">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Press</h2>
        </div>

        <div className={styles.writingGrid}>
          <a
            href="https://techfundingnews.com/from-clips-to-stories-the-systems-engineering-shaping-the-future-of-ai-video/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.writingCard}
          >
            <h3 className={styles.writingTitle}>
              From Clips to Stories: Systems Engineering in AI Video
            </h3>
            <div className={styles.writingSource}>
              <span>Tech Funding News</span>
              <span className={styles.writingArrow}>&rarr;</span>
            </div>
          </a>

          <a
            href="https://aijourn.com/why-the-next-era-of-ai-video-depends-on-orchestration-not-just-models/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.writingCard}
          >
            <h3 className={styles.writingTitle}>
              Why the Next Era of AI Video Depends on Orchestration
            </h3>
            <div className={styles.writingSource}>
              <span>AI Journal</span>
              <span className={styles.writingArrow}>&rarr;</span>
            </div>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.section} id="contact">
        <div className={styles.contactInner}>
          <div>
            <h2 className={styles.contactTitle}>Let&apos;s build something</h2>
            <p className={styles.contactDesc}>
              Open to engineering roles, consulting, and interesting problems. If you&apos;re
              working on something good, I&apos;d love to hear about it.
            </p>
          </div>
          <div className={styles.contactLinks}>
            <a href="mailto:jayeshg.716@gmail.com" className={styles.contactLink}>
              <span>jayeshg.716@gmail.com</span>
              <span className={styles.contactArrow}>&rarr;</span>
            </a>
            <a
              href="https://github.com/jayeshgaur"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span>GitHub</span>
              <span className={styles.contactArrow}>&rarr;</span>
            </a>
            <a
              href="https://linkedin.com/in/jayeshgaur"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span>LinkedIn</span>
              <span className={styles.contactArrow}>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>Jayesh Gaur&trade; &middot; Built with intent</span>
          <span>San Francisco &middot; &copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
