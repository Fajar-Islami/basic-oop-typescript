/* Readonly ==? agar property tidak bisa diubah (immutable)
    Perbedaaan dengan const
    Const hanya untuk variabel biasa
    Readonly untuk property di sebuah class
*/
class Person {
  readonly gender: string = "Pria";
}

const person = new Person();
// person.gender = 'Wanita' // Error
