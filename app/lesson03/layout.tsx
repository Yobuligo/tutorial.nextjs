import { NavBar } from "@/features/navbar/NavBar";
import { ReactNode } from "react";
import styles from "./layout.module.scss";
import { ILink } from "@/model/ILink";

const links: ILink[] = [
  { title: "Homepage", path: "/lesson03/home" },
  { title: "Customers", path: "/lesson03/customers" },
  { title: "Invoices", path: "/lesson03/invoices" },
];

export default function Lesson03Layout(props: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <NavBar links={links} />
      <div>{props.children}</div>
    </div>
  );
}
