// Return type ==> mengatur tipe data yang direturn

class Burung {
  private kaki: number = 2;

  getKaki(): number {
    return this.kaki;
  }

  //   Void ==> method tidak mengembalikan apa2, tidak boleh ada return
  terbang(): void {
    console.log("Terbang");
  }

  //   Karena async jadi harus pakai promise, seperti Promise<string>
  async makan(): Promise<string> {
    return "string";
  }
}
