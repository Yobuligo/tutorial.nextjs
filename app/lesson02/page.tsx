"use client";

import { Title } from "@/components/title/Title";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Lesson02Page() {
  const [counter, setCounter] = useState(0);
  const path = usePathname();

  const onClick = () =>
    setCounter((previous) => {
      previous++;
      return previous;
    });

  return (
    <div>
      <div>
        <Title title="Lesson 02" />
      </div>
      <div>{`Current count is ${counter}`}</div>
      <button onClick={onClick}>Increase</button>
      <p>{`Current path is ${path}`}</p>
    </div>
  );
}
