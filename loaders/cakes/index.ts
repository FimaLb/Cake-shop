import { type CakeItem } from "@/components/ui/CakeItem/CakeItem";
import { CakesEntity } from "@/db-types";

export async function getCakesByCategoryAlias(
  category: string,
  filters?: {
    weight?: string;
    shape?: string;
  }
): Promise<CakesEntity[] | null> {
  const res = await fetch(
    `${process.env.API_BASE_PATH}/categories?alias=${category}&_embed=cakes`,
    {
      next: {
        tags: ["cakes-by-category-alias"],
      },
    }
  );

  if (!res.ok) {
    return null;
  }
  let currentCategory = await res.json();

  if (currentCategory?.length) {
    currentCategory = currentCategory[0];
  }

  if (currentCategory?.cakes?.length) {
    let cakes = currentCategory?.cakes;
    if (filters?.weight) {
      cakes = cakes.filter((cake: CakesEntity) =>
        cake.weight && filters.weight ? +filters.weight <= cake.weight : false
      );
    }
    if (filters?.shape) {
      cakes = cakes.filter((cake: CakesEntity) =>
        cake.shapeId && filters.shape ? cake.shapeId === filters.shape : false
      );
    }
    return cakes;
  } else {
    return null;
  }
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
