import logoImg from "@/assets/log_ph.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image className={styles.logo} src={logoImg} alt="Logo" />
      </Link>
      <h1>Tutorial Next.js</h1>
      <div></div>
    </header>
  );
};
