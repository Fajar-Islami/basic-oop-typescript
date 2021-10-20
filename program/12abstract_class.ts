/* Abstract class => sebuah kelas yang tidak bisa di instasiasi secara langsung, karena bentuk nya belum kelas
                     pada abstract kelas harus ada 1 method abstrak                       
*/

abstract class Hewan12 {
  constructor(public name: string) {}

  makan(): void {
    console.log(` ${this.name} sedang makan `);
  }

  abstract bergerak(): void; // abstract method, setiap child nya harus menggunakan method ini
}

class Kucing extends Hewan12 {
  constructor() {
    super("kucing");
  }

  bergerak() {
    console.log("Kucing berjalan");
  }
}

class Burung2 extends Hewan12 {
  constructor() {
    super("Burung");
  }

  bergerak() {
    console.log("Burung terbang");
  }
}

const kucing = new Kucing();
kucing.bergerak();

const burung = new Burung2();
burung.bergerak();
