import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.navigation}>
        © 2022 JetRuby. All Rights Reserved
      </nav>
    </footer>
  );
};
export default Footer;
