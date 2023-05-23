// Nico => [N,i,c,o] => string => string[];
// [N,i,c,o]=> Nico => string[] => string;

//sobrecarga solo con function sin const
//Ej:
function parseStr2(input: string): string[];
function parseStr2(input: string[]): string;


function parseStr2(input: string | string[]){
  if (Array.isArray(input)) {
    return input.join(""); //string
  } else {
    return input.split(""); //string[]
  }
}

const rtaArray1 = parseStr2("Nico");
console.log("rtaArray", "Nico ->", rtaArray1);

const rtaStr1 = parseStr2(["N","i","c","o"]);
console.log("rtaStr", "[N,i,c,o] ->", rtaStr1);
