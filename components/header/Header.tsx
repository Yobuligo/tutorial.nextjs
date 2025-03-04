import logoImg from "@/assets/log_ph.png";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logoImg.src} alt="Logo" />
      <h1>Tutorial Next.js</h1>
      <div></div>
    </header>
  );
};
