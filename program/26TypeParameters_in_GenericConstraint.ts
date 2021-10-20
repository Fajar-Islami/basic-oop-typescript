// Keyof ==> key dari generic pertama
function getProperty<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "a"));
console.log(getProperty(x, "b"));
// console.log(getProperty(x, "z")); // error, karena keyof harus berada di variabel x ini
