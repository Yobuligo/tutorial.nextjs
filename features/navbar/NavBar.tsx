import { NavBarLink } from "../navBarLink/NavBarLink";
import { INavBarProps } from "./INavBarProps";
import styles from "./NavBar.module.scss";

export const NavBar = (props: INavBarProps) => {
  const content = props.links.map((link, index) => (
    <NavBarLink key={index} link={link} />
  ));

  return <div className={styles.navBar}>{content}</div>;
};
