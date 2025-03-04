import { ITitleProps } from "./ITitleProps";

export const Title: React.FC<ITitleProps> = (props) => {
  return <h1>{props.title}</h1>;
};
