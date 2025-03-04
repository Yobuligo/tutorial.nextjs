import { IHeaderProps } from "./IHeaderProps";

export const Header: React.FC<IHeaderProps> = (props) => {
  return <h1>{props.title}</h1>;
};
