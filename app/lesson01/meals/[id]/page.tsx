import { Header } from "@/components/header/Header";

type Props = { params: { id: string } };

export default function MealPage(props: Props) {
  return (
    <>
      <Header title="Meal" />
      <div>{`Selected meal is ${props.params.id}`}</div>
    </>
  );
}
