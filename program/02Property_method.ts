class Hewan3 {
  // Property
  nama: string = "";
  kaki: number = 0;
  mamalia: boolean = false;

  // Method
  bernafas() {
    console.log(`${this.nama} sedang bernafas`);
  }
}

const hewan3 = new Hewan3();
hewan3.nama = "Katak";
hewan3.kaki = 4;

hewan3.bernafas();
console.log(hewan3);
