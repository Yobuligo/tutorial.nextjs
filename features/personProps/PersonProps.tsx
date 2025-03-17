"use client";
import { ChangeEvent, useState } from "react";
import styles from "./PersonProps.module.scss";

export const PersonProps: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onChangeFirstname = (event: ChangeEvent<HTMLInputElement>) =>
    setFirstname(event.target.value);

  const onChangeLastname = (event: ChangeEvent<HTMLInputElement>) =>
    setLastname(event.target.value);

  return (
    <>
      <div className={styles.labeledInput}>
        <label className={styles.label} htmlFor="firstname">
          Firstname
        </label>
        <input
          id="firstname"
          className={styles.input}
          type="text"
          value={firstname}
          onChange={onChangeFirstname}
        />
      </div>
      <div className={styles.labeledInput}>
        <label className={styles.label} htmlFor="lastname">
          Lastname
        </label>
        <input
          id="lastname"
          className={styles.input}
          type="text"
          value={lastname}
          onChange={onChangeLastname}
        />
      </div>
    </>
  );
};
