interface Vechile {
  nama: string;
  roda: number;
}

interface ICar extends Vechile {
  doors: number;
}

class Civic implements ICar {
  doors: number = 4;
  nama: string = "Civic";
  roda: number = 4;
}
