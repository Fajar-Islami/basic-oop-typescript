class Hewan6 {
  nama: string;
  kaki: number;

  // Constructor agar lebih hemat space dalam membuat objek
  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

class Katak6 extends Hewan6 {
  beracun: boolean;

  // Di copy argumen di parent
  constructor(nama: string, kaki: number, beracun: boolean) {
    super(nama, kaki);
    this.beracun = beracun;
  }
}

const katak6 = new Katak6("Katak", 4, false);
console.log(katak6);
