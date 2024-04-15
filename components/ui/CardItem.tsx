import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CakesEntity, CategoryEntity } from "@/db-types";
import Image from "next/image";

type CardEntity = CategoryEntity | CakesEntity;

export default function CardItem({ data }: { data: CardEntity | null }) {
  const description = data?.description ? data?.description : "";
  const alt = data?.alt ? data?.alt : "placeholder";

  return (
    <>
      <Card className='flex flex-col items-center justify-center flex-wrap min-w-[220px] max-w-[220px]'>
        <CardHeader>
          <CardTitle className='text-center'>{data?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            className='max-h-[180px]'
            src={data?.image ? data.image : "/placeholder.png"}
            width={120}
            height={180}
            alt={alt}
          />
        </CardContent>
        <CardFooter className='text-center'>{description}</CardFooter>
      </Card>
    </>
  );
}
