import { ILink } from "@/model/ILink";
import { ReactNode } from "react";

export interface INavSectionProps {
  children: ReactNode;
  links: ILink[];
}
