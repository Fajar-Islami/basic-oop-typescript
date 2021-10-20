// Getter Setter ==> untuk mengambil/set property pada class

class ProductA {
  private _price: number = 0;
  private discount: number = 0.05;

  get price() {
    return this._price;
  }

  // Set tidak ada tipe pengembalian
  set price(value: number) {
    this._price = value - value * this.discount;
  }
}

const productA = new ProductA();
productA.price = 2000; // menjalankan method set price
console.log(productA.price);
