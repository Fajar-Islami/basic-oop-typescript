class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface IShark extends Animal {
  swim(): void;
}

class Shark implements IShark {
  name: string;

  swim(): void {
    console.log("Berenang");
  }
}
