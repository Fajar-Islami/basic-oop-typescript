/*
Static Propery & Method 
    ==> Property/method yang menempel pada kelas itu sendiri
        Untuk memanggilnya dapat langsung panggil aja tanpa harus membuat objek nya
*/

class Ayam {
  static kaki: number = 2;

  static jalan() {
    console.log(`Ayam berjalan dengan ${this.kaki} kaki`); // disini bisa pakai this, karena dia method static
  }

  getKaki() {
    // console.log(this.kaki) // error, karena kaki dianggap sbg property dari objek bukan kelas
    console.log(Ayam.kaki); // bisa
  }
}

console.log(Ayam.kaki);
Ayam.jalan();

const ayam2 = new Ayam();
// ayam2.jalan() // tidak bisa karena method static
ayam2.getKaki();

// ------------------------
// static itu bersifat global, jdi klo diubah berpengaruh kesemua

const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();
const ayam6 = new Ayam();
const ayam7 = new Ayam();

ayam3.getKaki();
ayam4.getKaki();
ayam5.getKaki();
ayam6.getKaki();
ayam7.getKaki();

Ayam.kaki = 4; // maka nilai kaki diatas berubah semua

ayam3.getKaki();
ayam4.getKaki();
ayam5.getKaki();
ayam6.getKaki();
ayam7.getKaki();
