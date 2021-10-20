// Constructor ==> method yang dipanggil terlebih dahulu ketika objek dibuat menggunakan kelas

class Hewan2 {
  constructor() {
    console.log("Baris ini dijalankan terlebih dahulu");
  }
}

const ayam = new Hewan2();
