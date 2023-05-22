const withoutEnd = () => {
  while(true) {
    console.log("nunca parar de aprender")
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === "string"){
    return "es string";
  } else if (Array.isArray(input)){
    return "es array";
  } else {
    return fail("no much")
  }
};

console.log(example("hola"));
console.log(example([1,2,3]));
console.log(example(12));
console.log(example("Wfail"));
