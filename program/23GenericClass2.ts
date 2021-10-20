class ClassA {
  name: string = "Class A";
}

class ClassBaru<T> {
  constructor(public classProp: T) {}
}

const classA = new ClassA();
const classBaru = new ClassBaru(classA);
