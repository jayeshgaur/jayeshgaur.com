import Link from "next/link";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          JG
        </Link>
        <ul className={styles.links}>
        <li>
          <Link href="/#ventures">Ventures</Link>
        </li>
        <li>
          <Link href="/#press">Press</Link>
        </li>
        <li>
          <a href="mailto:jayeshg.716@gmail.com">Contact</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/jayeshgaur" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
}
