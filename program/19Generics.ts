/* Generic <T> ==> menjadikan function/class/interface memiliki berbagai macam tipe data dinamis
Jika menggunakan tipe data any, tidak bisa mendeteksi tipe data yang diinput, seperti 
tidak bisa pakai fitur length untuk string, lowercase
kalau number tidak bisa pakai toFixed
*/
function getData(value: any) {
  return value;
}

const data1 = getData(123);
console.log(data1); // tidak memunculkan option tipe data

function getData2<T>(value: T): T {
  return value;
}

const data2 = getData2<string>("Fajar");
console.log(data2.length);

const data3 = getData2<number>(3);
console.log(data3.toFixed(2));
