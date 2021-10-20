// Typescript sifatnya global, jika ada function yang sama namnya maka akan error

namespace NameSpaceExample {
  // Walaupun nama kelas Hewan sudah terpakai tidak error, hanya saja tidak bisa di ekspos keluar
  export class Hewan {}
  export const kodok = new Hewan();
}

// Cara memanggil kelas ini diluar namespace
const belalang = new NameSpaceExample.Hewan();
