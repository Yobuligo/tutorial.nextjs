import { ILesson } from "@/model/ILesson";
import Link from "next/link";

const lessons: ILesson[] = [{ title: "Lesson 01", path: "/lesson01" }];

export default function Home() {
  const renderedLessons = lessons.map((lesson, index) => (
    <div key={index}>
      <Link href={lesson.path}>{lesson.title}</Link>
    </div>
  ));

  return (
    <div>
      <div>Hello World</div>
      <div>Select a lesson:</div>
      <div>{renderedLessons}</div>
    </div>
  );
}
