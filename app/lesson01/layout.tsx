import { ReactNode } from "react";

export default function Lesson01Layout(props: { children: ReactNode }) {
  return (
    <div>
      Hello World
      {props.children}
    </div>
  );
}
