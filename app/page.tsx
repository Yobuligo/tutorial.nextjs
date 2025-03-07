import { LinkList } from "@/components/linkList/LinkList";
import { useTest } from "@/hooks/useTest";
import { ILink } from "@/model/ILink";

const lessons: ILink[] = [
  { title: "Lesson 01", path: "/lesson01" },
  { title: "Lesson 02", path: "/lesson02" },
  { title: "Lesson 03", path: "/lesson03" },
];

export default async function Home() {
  const test = useTest();

  return (
    <div>
      {test.render()}
      <div>Hello World</div>
      <div>Select a lesson:</div>
      <LinkList links={lessons} />
    </div>
  );
}
