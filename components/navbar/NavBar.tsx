"use client";

import { usePathname } from "next/navigation";
import { NavBarLink } from "../navBarLink/NavBarLink";
import { INavBarProps } from "./INavBarProps";
import styles from "./NavBar.module.scss";

export const NavBar = (props: INavBarProps) => {
  const pathname = usePathname();

  const content = props.links.map((link, index) => (
    <NavBarLink key={index} link={link} isSelected={pathname === link.path} />
  ));

  return <div className={styles.navBar}>{content}</div>;
};
