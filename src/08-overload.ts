// Nico => [N,i,c,o] => string => string[];
// [N,i,c,o]=> Nico => string[] => string;

//sobrecarga solo con function sin const
//Ej:
//la sobrecarga esta en el  9 como solucion
function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(""); //string
  } else {
    return input.split(""); //string[]
  }
}

const rtaArray = parseStr("Nico");
console.log("rtaArray", "Nico ->", rtaArray);

const rtaStr = parseStr(["N","i","c","o"]);
console.log("rtaStr", "[N,i,c,o] ->", rtaStr);
