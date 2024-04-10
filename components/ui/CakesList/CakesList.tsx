import Link from "next/link";
import CardItem from "@/components/ui/CardItem";
import { CakesEntity } from "@/db-types";

export default function CakesList({
  data,
}: {
  data: { listOfCakes: CakesEntity[] | null; category: string };
}) {
  return (
    <>
      {data?.listOfCakes?.map((cakes) => (
        <Link
          className='flex justify-center flex-wrap'
          key={cakes.id}
          href={`${data.category}/${cakes.alias}`}
        >
          <CardItem data={cakes} />
        </Link>
      ))}
    </>
  );
}
