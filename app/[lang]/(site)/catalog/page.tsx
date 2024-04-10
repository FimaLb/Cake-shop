import CakesCatalogList from "@/components/ui/CakesCatalogList/CakesCatalogList";
import { getCategores } from "@/loaders/category";

export default async function CatalogPage({
  params: { category },
}: {
  params: { category: string };
}) {
  const categores = await getCategores();

  return (
    <section className='flex justify-start items-center'>
      <div className='grid grid-cols-1 gap-10 p-5 sm:grid-cols-2 md:grid-cols-3'>
        <CakesCatalogList data={categores}></CakesCatalogList>
      </div>
    </section>
  );
}
