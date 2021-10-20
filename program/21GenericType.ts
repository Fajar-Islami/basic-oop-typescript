/*
Kalau Interface lebih ke objek, kalau type lebih ke variabel
*/
type Generics2<T> = T;

function genericFunction2<T>(value: T): Generics2<T> {
  return value;
}

console.log(genericFunction2<string>("fajar"));
console.log(genericFunction2<number>(12));
console.log(genericFunction2<boolean>(true));
