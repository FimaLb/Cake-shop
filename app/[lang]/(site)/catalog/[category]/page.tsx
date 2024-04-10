import CakesList from "@/components/ui/CakesList/CakesList";
import { getCakesByCategoryAlias } from "@/loaders/cakes";

export default async function CakesPage({
  params: { category },
}: {
  params: { category: string };
}) {
  const cakes = await getCakesByCategoryAlias(category);
  const data = {
    listOfCakes: cakes,
    category,
  };

  return (
    <section className='flex justify-start items-center'>
      <div className='grid grid-cols-1 gap-10 p-5 sm:grid-cols-2 md:grid-cols-3'>
        <CakesList data={data}></CakesList>
      </div>
    </section>
  );
}
