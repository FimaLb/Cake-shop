import { CategoryEntity } from "@/db-types";

export async function getCategores(): Promise<CategoryEntity[] | null> {
  const category = await fetch(`${process.env.API_BASE_PATH}/categories`);

  return category.json();
}

export async function getCategoryByAlias(
  alias: string
): Promise<CategoryEntity | null> {
  const res = await fetch(
    `${process.env.API_BASE_PATH}/categories?alias=${alias}`
  );
  const category = await res.json();
  return category?.length ? category[0] : null;
}
