class Hewan4 {
  nama: string;
  kaki: number;

  // Constructor agar lebih hemat space dalam membuat objek
  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

const burung = new Hewan4("burung", 2);
console.log(burung);

////////////////////////////////
// cara kedua
class Hewan41 {
  constructor(public nama: string, public kaki: number) {}
}

const burung2 = new Hewan41("burung 2", 2);
console.log(burung2);
