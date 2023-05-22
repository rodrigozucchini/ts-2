export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number // los parametros opcionales al final
) => {
  return {id, stock: stock ?? 0, isNew: isNew ?? true} // asi es mejor
}
// 0 === false
// "" === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1, true); // si no le mandamos nada da undefined esa variable
console.log(p2);

const p3 = createProduct(1,false, 0); // si no le mandamos nada da undefined esa variable
console.log(p3);
