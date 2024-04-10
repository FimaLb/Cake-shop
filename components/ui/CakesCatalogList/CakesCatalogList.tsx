import { CategoryEntity } from "@/db-types";
import Link from "next/link";
import CardItem from "@/components/ui/CardItem";

export default function CakesCatalogList({
  data,
}: {
  data: CategoryEntity[] | null;
}) {
  return (
    <>
      {data?.map((category) => (
        <Link
          className='flex justify-center flex-wrap'
          key={category.id}
          href={`catalog/${category.alias}`}
        >
          <CardItem data={category} />
        </Link>
      ))}
    </>
  );
}
