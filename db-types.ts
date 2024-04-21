export interface Catalog {
  users?: UsersEntity[] | null;
  customer_message?: CustomerMessageEntity[] | null;
  category?: CategoryEntity[] | null;
  cakes?: CakesEntity[] | null;
  shapes?: ShapesEntity[] | null;
}
export interface UsersEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  provider: "credential" | "github" | "google";
  isAdmin: boolean;
}
export interface CustomerMessageEntity {
  id: string;
  name: string;
  email: string;
  message: string;
}
export interface CategoryEntity {
  id: string;
  alias: string;
  name: string;
  image: string;
  alt?: string;
  description?: string;
  userId: string;
}
export interface CakesEntity {
  id: string;
  isPublished: boolean;
  name: string;
  alt: string;
  description?: string;
  price: number;
  discount: number;
  addedAt: string;
  updatedAt: string;
  image: string;
  alias: string;
  categoryId: string;
  userId: string;
  weight?: number | null;
  shapeId?: string | null;
}
export interface ShapesEntity {
  id: string;
  name: string;
}
