import { NavSection } from "@/components/navSection/NavSection";
import { ILink } from "@/model/ILink";
import { ReactNode } from "react";

const links: ILink[] = [
  { title: "Homepage", path: "/lesson03/home" },
  { title: "Customers", path: "/lesson03/customers" },
  { title: "Invoices", path: "/lesson03/invoices" },
];

export default function Lesson03Layout(props: { children: ReactNode }) {
  return <NavSection links={links}>{props.children}</NavSection>;
}
