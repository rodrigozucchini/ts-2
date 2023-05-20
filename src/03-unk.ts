let anyVar :any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {}; // <-- anyVar a esta altura es un objeto vacio

//let isNew:boolean = anyVar;// ❌ asigna el tipo boolean a una variable que esta definida como objeto, y esto puede provocar que tus programas fallen

//anyVar.doSomething();// ❌no corrige el tipado erroneo, ya que el metodo  doSometing() no existe
//anyVar.touppercase();// ❌tampoco corrige typos, ya que en este caso el metodo touppercase esta mal escrito pero al ser any no lo reconoce.

let unknowVar: unknown;

unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

//unknowVar.doSomething(); //✅ reconoce que el metodo no existe. y lo marca como error

// verificacion de tipos
if (typeof unknowVar ==="string") {
//  unknowVar.touppercase() //✅ corrige los errores de typos, en este caso nos advierte que el metodo esta mal escrito.
  unknowVar.toUpperCase(); //✅ Si se define de entrada que la variable será un string permite las ayudas de VSC y lo reconoce como string.
}
if (typeof unknowVar ==="boolean") {
  let isNew2:boolean=unknowVar // ✅ si se hace la verificacion, especificando que la variable será un booleano entonces no marca error
}
//let isNew2:boolean=unknowVar ✅// si no se hace la verificacion, lo marca como error, ya que unknowVar esta declarada como objeto
//en las funciones

const parse =(str:string):unknown=>{
  return JSON.parse(str); // evita que la funcion explote debido no darle formato adecuado en este caso en formato JSON.
}
