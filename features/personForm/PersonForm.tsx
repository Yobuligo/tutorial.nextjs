import { PersonProps } from "../personProps/PersonProps";
import { IPersonFormProps } from "./IPersonFormProps";
import styles from "./PersonForm.module.scss";

export const PersonForm: React.FC<IPersonFormProps> = (props) => {
  const create = async () => {
    "use server";
    props.onCreate?.();
  };

  return (
    <form action={create} className={styles.form}>
      <PersonProps />
    </form>
  );
};
