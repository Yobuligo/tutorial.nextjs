import Link from "next/link";
import { INavBarLinkProps } from "./INavBarLinkProps";
import styles from "./NavBarLink.module.scss";

export const NavBarLink: React.FC<INavBarLinkProps> = (props) => {
  return (
    <div className={styles.container}>
      <Link className={styles.navBarLink} href={props.link.path}>
        {props.link.title}
      </Link>
    </div>
  );
};
