// Konsep Parent - Child

// Ini parent
class Hewan5 {
  // Semua property diturunkan ke child
  nama: string = "";
  kaki: number = 0;

  bernafas() {
    console.log("nafas");
  }
}

// Ini child
class Burung5 extends Hewan5 {
  warna: string = "merah";
}

const burung5 = new Burung5();
burung5.nama = "kenari";
burung5.kaki = 2;
burung5.warna = "kuning";
console.log(burung5);
burung5.bernafas();
