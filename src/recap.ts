let myName = 'Nicolas';
const age = 19;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 12);

class Persona {
  age;
  name;

  constructor(name: string, age: number) {
      this.age = age;
      this.name = name;
  }

  getSummary() {
    return `my name is ${this.name} and my age is ${this.age}`;
  }
}

const nicolas = new Persona('niolcas', 12);
nicolas.getSummary();
