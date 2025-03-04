import { Title } from "@/components/title/Title";

type Props = { params: { id: string } };

export default function MealPage(props: Props) {
  return (
    <>
      <Title title="Meal" />
      <div>{`Selected meal is ${props.params.id}`}</div>
    </>
  );
}
