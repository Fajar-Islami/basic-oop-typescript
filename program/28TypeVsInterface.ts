// type UserType={
//     name:string
// }

// interface UserInterface{
//     name:string
// }

// class User1 implements UserType{
//     name:string='User 1'
// }

// class User2 implements UserInterface{
//     name:string='User 1'
// }

/* Perbedaaan Type dan Interface

Interface ==> dipakai jika ingin membuat objek baru / method dari sebuah object spt object class. Cocok dipasang di class
- Hanya bisa bentuk objek
- Bisa di merge
- bisa extend class


Type ==> cocok dipakai untuk membuat variabel/function.
- Bisa berbentuk langsung type data / berbentuk objek
- Tidak bisa di merge, tapi intersection
- tidak bisa extend sebuah class


*/

// Contoh 1
type Phone = string
interface Phone1{
    name:string
}


// Contoh 2

// Seakan2 dimerge
interface Dino{name:string}
interface Dino{weight:number}
class Dino2 implements Dino{
    name: string;
    weight: number;

}

// Error karena duplikat, tidak bisa digabung
type Dino3{name:string}
type Dino3{weight:number}
class Dino4 implements Dino{
    name: string;
    weight: number;

}

// Contoh 3
type Name={
    name:string
}

type Age={
    age:number
}

// Merge type
type Employe1 = Name & Age
type Employe2 = Name | Age

const employe:Employe1={
    name:'FAR',
    age:20
}