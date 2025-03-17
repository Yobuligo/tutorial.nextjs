import { LinkList } from "@/components/linkList/LinkList";
import { lessons } from "./lessons";
// import { useTest } from "@/hooks/useTest";

export default async function Home() {
  // const test = useTest();

  return (
    <div>
      {/* {test.render()} */}
      <div>Hello World</div>
      <div>Select a lesson:</div>
      <LinkList links={lessons} />
    </div>
  );
}
