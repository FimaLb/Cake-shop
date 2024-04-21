import CakesFilters from "@/components/ui/CakesFilters/CakesFilters";
import CakesList from "@/components/ui/CakesList/CakesList";
import { getCakesByCategoryAlias } from "@/loaders/cakes";
import { getShapes } from "@/loaders/shapes";
import { notFound } from "next/navigation";

export default async function CakesPage({
  params: { category },
  searchParams: { weight, shape },
}: {
  params: { category: string };
  searchParams: { weight?: string; shape?: string };
}) {
  const cakes = await getCakesByCategoryAlias(category, { weight, shape });
  if (!cakes) {
    return notFound();
  }

  const shapesData = await getShapes();
  const data = {
    listOfCakes: cakes,
    category,
  };

  return (
    <section className='flex justify-start items-center'>
      <div className='flex flex-col mr-10'>
        <CakesFilters shapes={shapesData} />
      </div>
      <div className='grid grid-cols-1 gap-10 p-5 sm:grid-cols-2 md:grid-cols-3'>
        <CakesList data={data}></CakesList>
      </div>
    </section>
  );
}
