import {faker} from '@faker-js/faker';

import { addProduct, products, updateProduct, findProduct } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    description:faker.commerce.productDescription(),
    image:faker.image.imageUrl(),
    color:faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([]),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({min:10, max: 100}),
    categoryId: faker.string.uuid()
  })
}


console.log(products);

const product = products[0];

updateProduct(product.id, {
  title: "new title",
  stock: 80
});

findProduct({
  stock: 10,
  color: "red",
  tags: ["as", "as"] //ojo con esto array
})
