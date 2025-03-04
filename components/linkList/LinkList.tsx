import Link from "next/link";
import { ILinkList } from "./ILinkListProps";
import styles from "./LinkList.module.scss";

export const LinkList: React.FC<ILinkList> = (props) => {
  return (
    <div className={styles.linkList}>
      {props.links.map((link, index) => (
        <div key={index}>
          <Link href={link.path}>{link.title}</Link>
        </div>
      ))}
    </div>
  );
};
