interface Teacher {
  name: string;
  age: number;
  phone?: string;
}

let teacher: Teacher = { name: "Fajar", age: 17 };
let teacher2: Teacher = { name: "Ahmad", age: 17, phone: "012" };
console.log(teacher);
console.log(teacher2);
