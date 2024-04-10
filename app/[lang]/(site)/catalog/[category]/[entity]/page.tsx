import CakeItem from "@/components/ui/CakeItem/CakeItem";
import { getCakeByAlias } from "@/loaders/cakes";

export default async function CakePage({
  params: { category, entity },
}: {
  params: { category: string; entity: string };
}) {
  const cake = await getCakeByAlias(entity);

  return (
    <section className='flex justify-center align-middle pt-20'>
      <CakeItem data={cake}></CakeItem>
    </section>
  );
}
