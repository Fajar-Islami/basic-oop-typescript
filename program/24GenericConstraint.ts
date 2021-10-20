// function generics24<T>(arg:T):T  {
//     // console.log(arg.length) // error, karena arg type nya generic, tidak tau type data apa yang dimasukkan
//     return arg
// }

// Contoh generic constraint
interface Length {
  length: number;
}

// Paramter function ini memiliki option yang namamnya length
function generic25<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const gen25 = generic25("Fajar");
console.log("gen25", gen25);

const gen25B = generic25({ length: 10, value: 200 });
console.log("gen25B", gen25B);
