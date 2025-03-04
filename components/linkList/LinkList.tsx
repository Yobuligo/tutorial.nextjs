import componentStyles from '@/styles/component.module.scss';
import Link from "next/link";
import { ILinkList } from "./ILinkListProps";
import styles from "./LinkList.module.scss";

export const LinkList: React.FC<ILinkList> = (props) => {
  return (
    <div className={styles.linkList}>
      {props.links.map((link, index) => (
        <div key={index}>
          <Link className={componentStyles.link} href={link.path}>{link.title}</Link>
        </div>
      ))}
    </div>
  );
};
