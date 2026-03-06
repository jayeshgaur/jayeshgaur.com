import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>Jayesh Gaur &middot; Built with intent</span>
        <span>San Francisco &middot; &copy; 2026</span>
      </div>
    </footer>
  );
}
