/* Visibility ==> untuk mengatur/akses dari sebuah kelas
public ==> property/method bisa dipanggil dari mana saja
protected ==> property/method hanya bisa digunakan kelas itu sendiri dan turunnya
private ==> property/method bisa dipanggil dari kelas itu sendiri
*/

class Hewan8 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }

  berjalan() {}
}

class Katak extends Hewan8 {
  private umurTelur: number = 4;
  private umurKecebong: number = 7;
  private umurKatak: number = 90;

  getUmur() {
    console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
  }
}

const katak = new Katak("as", 4, false);
katak.getUmur();
// console.log(katak.umurTelur) // error karena private
