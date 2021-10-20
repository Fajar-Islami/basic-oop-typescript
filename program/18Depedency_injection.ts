/* 
Depedency Injection
Dengan adanya interface, kita bisa inject class ke class lain secara dinamis
*/

// Contoh standard
class Store {
  private name: string = "Store A";
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class FashionProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store(); // Secara otomatis yg dimasukan adl Store A
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

class TechProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store(); // Secara otomatis yg dimasukan adl Store A
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

const baju = new FashionProduct("Baju Lengan Panjang", 250000);
baju.sell();

// ------------------------
// Contoh depedency injection dengan interface

interface IStore {
  name: string;
  profit: number;
  getProfit(): number;
}

class TokoLama implements IStore {
  name: string = "Toko Lama";
  profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class TokoBaru implements IStore {
  name: string = "Toko Baru";
  profit: number = 2500;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class HijabProduct {
  private store: IStore;
  private name: string;
  private price: number;

  // Paramter mengacu langsung ke interface
  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

class FoodProduct {
  private store: IStore;
  private name: string;
  private price: number;

  // Paramter mengacu langsung ke interface
  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const hijabBagus = new HijabProduct(tokoLama, "hijab mahal", 50000);
const hijabBagus2 = new HijabProduct(tokoLama, "hijab mahal2", 150000);

// console.log(hijabBagus);
// console.log(hijabBagus2);
hijabBagus.sell();
hijabBagus2.sell();
