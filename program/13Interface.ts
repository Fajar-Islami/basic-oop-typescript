/*
Interface   ==> sebuah perjanjian/ kontrak yang mana semua property/method pada interface harus diimplementasikan
                pada class yang mengimplementasikannya
*/

interface AndroidPhone {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("Menu tapped");
  }
  home(): void {
    console.log("Home tapped");
  }
  back(): void {
    console.log("Back tapped");
  }
}

class Asus implements AndroidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("Menu tapped");
  }
  home(): void {
    console.log("Home tapped");
  }
  back(): void {
    console.log("Back tapped");
  }
}

class GameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back() {
    console.log(`Kembali ke menu utama digame`);
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}

const samsung = new Samsung("Type A");
const game = new GameA(samsung);

game.home();
game.back();
game.menu();

// --- IPhone
interface ApplePhone {
  home(): void;
}

class IPhone implements ApplePhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  home(): void {
    console.log("Muncul global");
  }
}

const iphone = new IPhone("IPhone SE");
// const game2 = new GameA(iphone) // error, karena interface GameA adalah AndroidPhone, bukan ApplePhone
