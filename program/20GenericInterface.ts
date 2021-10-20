interface Generics<T> {
  propA: T;
}

function genericFunction<T>(value: T): Generics<T> {
  let data: Generics<T> = {
    propA: value,
  };

  return data;
}

console.log(genericFunction<string>("fajar"));
console.log(genericFunction<number>(12));
console.log(genericFunction<boolean>(true));
