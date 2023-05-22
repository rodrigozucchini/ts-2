export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 0 // los parametros opcionales al final
) => {
  return {id, stock, isNew} // asi es mejor
}
// 0 === false
// "" === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1); // si no le mandamos nada da undefined esa variable
console.log(p2);

const p3 = createProduct(1,false); // si no le mandamos nada da undefined esa variable
console.log(p3);


const p4 = createProduct(1,true, 100); // si no le mandamos nada da undefined esa variable
console.log(p4);
