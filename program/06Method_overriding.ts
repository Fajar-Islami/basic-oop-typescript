//  Method Overriding ==> berfungsi untuk menggantikan method di parent class
class Hewan7 {
  nama: string = "";

  bernafas() {
    console.log("Sedang bernafas");
  }
}

class Katak extends Hewan7 {
  bernafas() {
    console.log("Katak bernafas");
  }
}

const katak = new Katak();
katak.bernafas(); // method yang dijalankan method anak
