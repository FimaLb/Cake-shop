import { type CakeItem } from "@/components/ui/CakeItem/CakeItem";
import { CakesEntity } from "@/db-types";

export async function getCakesByCategoryAlias(
  category: string
): Promise<CakesEntity[] | null> {
  const res = await fetch(
    `${process.env.API_BASE_PATH}/categories?alias=${category}&_embed=cakes`
  );

  if (!res.ok) {
    return null;
  }
  let currentCategory = await res.json();

  if (currentCategory?.length) {
    currentCategory = currentCategory[0];
  }
  return currentCategory?.cakes?.length ? currentCategory?.cakes : null;
}

export async function getCakeByAlias(entity: string): Promise<CakeItem | null> {
  const res = await fetch(
    `${process.env.API_BASE_PATH}/cakes?alias=${entity}&_embed=shapes`
  );

  if (!res.ok) {
    return null;
  }

  const cake = await res.json();

  return cake?.length ? cake[0] : null;
}
