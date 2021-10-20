interface Generics3<T> {
  propsA: T;
  methodA(): T;
}

// Butuh Generic untukn nembak ke interface, class nya harus generic karena interfacenya generic
class GenericClass<T> implements Generics3<T> {
  propsA: T;

  constructor(prop: T) {
    this.propsA = prop;
  }

  methodA(): T {
    return this.propsA;
  }
}

const genericClassA = new GenericClass<number>(123);
console.log(genericClassA.methodA());
