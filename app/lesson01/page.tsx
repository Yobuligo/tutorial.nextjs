import { LinkList } from "@/components/linkList/LinkList";
import { Title } from "@/components/title/Title";
import { ILink } from "@/model/ILink";

const links: ILink[] = [
  { title: "Meals", path: "/lesson01/meals" },
  { title: "Share Meal", path: "/lesson01/meals/share" },
  { title: "Community", path: "/lesson01/community" },
];

export default function Lesson01Page() {
  return (
    <div>
      <Title title="Lesson 01" />;
      <LinkList links={links} />
    </div>
  );
}
