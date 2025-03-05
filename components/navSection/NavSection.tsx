import { NavBar } from "../navbar/NavBar";
import { INavSectionProps } from "./INavSectionProps";
import styles from "./NavSection.module.scss";

export const NavSection: React.FC<INavSectionProps> = (props) => {
  return (
    <div className={styles.navSection}>
      <NavBar links={props.links} />
      <div>{props.children}</div>
    </div>
  );
};
