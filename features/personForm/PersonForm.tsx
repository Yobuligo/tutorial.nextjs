"use client";

import { ChangeEvent, useState } from "react";
import { IPersonFormProps } from "./IPersonFormProps";

export const PersonForm: React.FC<IPersonFormProps> = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const create = async () => {
    "use server";
    props.onCreate();
  };

  const onChangeFirstname = (event: ChangeEvent<HTMLInputElement>) =>
    setFirstname(event.target.value);

  const onChangeLastname = (event: ChangeEvent<HTMLInputElement>) =>
    setLastname(event.target.value);

  return (
    <form action={create}>
      <input type="text" value={firstname} onChange={onChangeFirstname} />
      <input type="text" value={lastname} onChange={onChangeLastname} />
    </form>
  );
};
