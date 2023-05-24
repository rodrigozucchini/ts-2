import { Product } from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | "createdAt"| "updateAt" | "category"> {
  categoryId: string; // esto porque extendi este que me faltaba
}


 //opuesto al omit, PICK (ELIJO)
// EJEMPLO type example = Pick<Product, "color" | "description">;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

 //opuesto al partial, REQUIRED (OBLIGATORIO) // HAGO QUE TODO SEA OBLIGATORIO
// EJEMPLO type example = rEQUIRED<Product>;

export interface FindProductDto extends Readonly<Partial<Omit<Product, "tags">>> {
  readonly tags: ReadonlyArray<string>; // hacer los dos readonly
}

//con readOnly haces solo lectura
