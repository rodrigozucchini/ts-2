import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Sizes = "S" | "M" | "XL";
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}

//DTOs
//Es una abreviatura para referirnos a Data Transfer Objects u Objeto de Transferencias de datos.
//Hay momentos particulares en los que nosotros no necesitamos del todo los tipos, es decir, hay parámetros que no hacen falta, por ejemplo, mandarlos al momento de la creación de un objeto, ya que estos son automáticos como el ID o la fecha de creación.

