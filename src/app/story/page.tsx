import type { Metadata } from "next";
import styles from "../detail.module.css";

export const metadata: Metadata = {
  title: "Story.com - Jayesh Gaur",
};

export default function StoryPage() {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <div className={styles.headerMeta}>June 2023 &mdash; Present</div>
        <h1 className={styles.pageTitle}>Founding Engineer @ Story.com</h1>
        <p className={styles.pageSubtitle}>Building the future of storytelling.</p>
      </header>

      <div className={styles.statsGrid}>
        <div className={styles.stat}>
          <div className={styles.statValue}>500K+</div>
          <div className={styles.statLabel}>Monthly Active Users</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>HF0 W24</div>
          <div className={styles.statLabel}>Batch</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>$2M</div>
          <div className={styles.statLabel}>Raised</div>
        </div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2026</div>
          <h3 className={styles.timelineTitle}>What&apos;s Next</h3>
          <div className={styles.timelineContent}>
            <p>
              The models are finally good enough. The gap between AI-generated content and actual
              production quality is closing. Our job now is to bridge it completely. Not AI slop.
              Real stories that hold up next to anything made the traditional way.
            </p>
            <p>
              We&apos;re shifting from one-shot creations to becoming a full platform for content
              creators. An AI-native video editor that gives creators real control. The technology
              caught up to the vision. Now we build the tools that let people use it.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>Late 2025</div>
          <h3 className={styles.timelineTitle}>The Transition</h3>
          <div className={styles.timelineContent}>
            <p>
              Leadership changed. Someone had to make sure things kept moving. The priority was
              simple: stabilize the team, keep the momentum, make sure nothing falls through the
              cracks.
            </p>
            <p>
              Remote team across timezones, sprint planning, product decisions. The goal was
              smoothness &mdash; no friction, no gaps. Keep shipping, keep the team aligned, keep
              the company on track.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2025</div>
          <h3 className={styles.timelineTitle}>Growing the Team</h3>
          <div className={styles.timelineContent}>
            <p>
              Hiring is harder than building product. We flew candidates in, ran trials, learned
              that finding people who actually care is the real challenge. Built a culture where the
              team stays because they want to, not because they have to.
            </p>
            <p>
              The ones who stuck around became family. Late night debugging sessions, shared wins,
              shared frustrations. A startup is just people believing in the same thing long enough
              to make it real.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2024 - 2025</div>
          <h3 className={styles.timelineTitle}>Learning the Craft</h3>
          <div className={styles.timelineContent}>
            <p>
              The hardest part wasn&apos;t the technology. It was understanding what makes a story
              actually work. We partnered with creators, watched hours of content, studied what
              separates forgettable from unforgettable.
            </p>
            <p>
              Pacing. Emotional beats. Visual rhythm. The stuff film schools teach in years, we had
              to figure out and encode into AI systems. Every conversation with a creator became a
              lesson. Every piece of feedback became a feature.
            </p>
            <p>
              The goal shifted from &ldquo;generate videos&rdquo; to &ldquo;generate stories worth
              watching.&rdquo; That meant building AI that understood creativity, not just followed
              prompts.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2024 - 2025</div>
          <h3 className={styles.timelineTitle}>Building for Scale</h3>
          <div className={styles.timelineContent}>
            <p>
              Growing users meant growing infrastructure. Auto-scaling, database architecture, API
              reliability. The unsexy work that makes everything else possible. When the product
              works, nobody notices the backend. When it breaks, everyone does.
            </p>
            <p>
              2024 was the year image models got good. Flux came out of Black Forest Labs and
              suddenly AI-generated images were actually usable. We built around that. Then 2025 hit
              and everything shifted to video. Sora, Veo, Kling. Models that could generate actual
              motion, actual scenes. The technology finally caught up to what we were trying to
              build.
            </p>
            <p>
              I built the orchestration layer that ties it all together. LangGraph workflows
              coordinating specialized AI agents. PostgreSQL state persistence so sessions survive
              server restarts. Real-time WebSocket streaming so users see progress as it happens.
              The plumbing that turns bleeding-edge models into a product people can actually use.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>August 2024</div>
          <h3 className={styles.timelineTitle}>The Fundraise</h3>
          <div className={styles.timelineContent}>
            <p>
              $2M raised. Coming out of HF0 with real traction meant investors were paying
              attention. The fundraise opened doors for hiring, but also raised the stakes on
              everything we built.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>Mid 2024</div>
          <h3 className={styles.timelineTitle}>San Francisco</h3>
          <div className={styles.timelineContent}>
            <p>
              Packed up and moved from New York. The startup scene, the energy, the people who
              understand what it takes to build something from scratch. SF felt like the right place
              to be.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>January - March 2024</div>
          <h3 className={styles.timelineTitle}>HF0</h3>
          <div className={styles.timelineContent}>
            <p>
              Twelve weeks in a mansion with the top 10 teams. They said it would be the most
              productive weeks of our lives. They were right.
            </p>
            <p>
              We pivoted the entire product. From children&apos;s books to AI video generation.
              Rebuilt everything. New backend, new infrastructure, new vision. Ship it, fix it
              later, move fast. Demo day was March 19th. Story.com was born.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>Late 2023</div>
          <h3 className={styles.timelineTitle}>The Numbers That Got Us In</h3>
          <div className={styles.timelineContent}>
            <p>
              Nobody expected StoryBird to grow like it did. Text-based AI content meant SEO worked
              in our favor. Every story generated was indexed, discoverable, bringing in organic
              traffic we never paid for.
            </p>
            <p>
              The revenue and traffic numbers for a product this simple surprised everyone, including
              us. That&apos;s what caught HF0&apos;s attention. Not a fancy pitch deck, just real
              traction that didn&apos;t make sense on paper.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>Mid 2023</div>
          <h3 className={styles.timelineTitle}>StoryBird Takes Off</h3>
          <div className={styles.timelineContent}>
            <p>
              Amazon publishing integration changed everything. Suddenly users weren&apos;t just
              generating stories, they were publishing actual books. The product had found something
              real.
            </p>
            <p>
              We kept shipping features, optimizing the pipeline, watching the numbers climb. A
              small team building something people actually wanted. No playbook, just iteration and
              paying attention to what worked.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>June 2023</div>
          <h3 className={styles.timelineTitle}>The Beginning</h3>
          <div className={styles.timelineContent}>
            <p>
              Three person team. Remote. I was in New York building the backend from scratch. The
              product was StoryBird.ai, an AI-powered children&apos;s book generator. Simple
              concept, but it worked.
            </p>
            <p>
              My job was to make things work. Backend systems, ML pipelines, infrastructure,
              whatever needed building. That never changed, even as everything else did.
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
