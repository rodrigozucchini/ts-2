type Sizes = "S" | "M" | "XL";
//type Product = {
//  id: string | number;
//  title: string;
//  createdAt: Date;
//  stock: number;
//  size?: Sizes;
//}

//porque usar INTERFACE?
// La razón es sencilla, con las interfaces podemos heredar otras interfaces, y con los type no podemos hacer eso.
// INTERFACE FUNCIONA IGUAL QUE EL TYPE
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}


const products: Product[] = [];

products.push({
  id: 1,
  title: "p1",
  createdAt: new Date(),
  stock: 90
})
