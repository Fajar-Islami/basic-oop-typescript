interface Student {
  readonly nama: string;
  readonly age: number;
}

let student: Student = { nama: "Ahmad", age: 25 }; // sifatnya constant
// student.nama ='Ahmad' // error, karena nama sudah set
