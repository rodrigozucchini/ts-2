import { Product } from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | "createdAt"| "updateAt" | "category"> {
  categoryId: string; // esto porque extendi este que me faltaba
}


 //opuesto al omit, PICK (ELIJO)
// EJEMPLO type example = Pick<Product, "color" | "description">;
