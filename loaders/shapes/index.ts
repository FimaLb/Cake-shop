import { ShapesEntity } from "@/db-types";

export async function getShapes(): Promise<ShapesEntity[] | null> {
  const shapes = await fetch(`${process.env.API_BASE_PATH}/shapes`);

  if (!shapes.ok) {
    return null;
  }
  const res = await shapes.json();
  console.log("getShapes", res);
  return res;
}
