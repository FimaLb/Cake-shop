import { CakesEntity, ShapesEntity } from "@/db-types";
import Image from "next/image";

export interface CakeItem extends CakesEntity {
  shapes: ShapesEntity;
}

export default function CakeItem({ data }: { data: CakeItem | null }) {
  console.log("CakeItem", data);
  return (
    <div className='rounded-lg border bg-card p-5 text-card-foreground shadow-sm flex flex-col'>
      <h1 className='justify-self-center self-center pb-5'>{data?.name}</h1>
      <div className='flex gap-5'>
        <Image
          className='max-h-[180px]'
          src={data?.image ? data.image : "/placeholder.png"}
          width={120}
          height={180}
          alt={data?.alt ? data?.alt : "placeholder"}
        />
        <div>
          <p>Description: {data?.description}</p>
          {data?.discount ? <p>Discount: {data?.discount}%</p> : null}
          <p>Price: {data?.price}</p>
        </div>
      </div>
    </div>
  );
}
