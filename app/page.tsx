import { LinkList } from "@/components/linkList/LinkList";
import { ILink } from "@/model/ILink";

const lessons: ILink[] = [
  { title: "Lesson 01", path: "/lesson01" },
  { title: "Lesson 02", path: "/lesson02" },
];

export default function Home() {
  return (
    <div>
      <div>Hello World</div>
      <div>Select a lesson:</div>
      <LinkList links={lessons} />
    </div>
  );
}
