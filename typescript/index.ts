// Typos in TS

// Number
let edad: number = 15;
let edadSumada: number = 2;
let edadEnDosAños = edad + edad;

// Boolean
let isTrue: boolean = true;

// String
let myName: string = "Joselin";

// Arrays
let personas: string[] = [];
personas = ["Jose", "Andres"];

let personasYNumeros: Array<string | number> = [];
personasYNumeros = ["Jose", 3, "Andres"];

personasYNumeros.push("Joselin");

// Enums
enum Colores {
  rojo = "red",
  verde = "green",
  azul = "blue",
}

const color: Colores = Colores.rojo;

// Any
let variable: any = [];
variable = {};
variable = "ey!";

// Objects
const pokemon: object = {
  name: "pikachu",
};

console.log("test");

// Functions

// Retornando un valor primitivo
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(3, 5);
console.log(sum);

function createAdder(a: number): (number) => any {
  return function (b: number) {
    return console.log(a + b);
  };
}

const sumarATres = createAdder(3);
sumarATres(6);

function myFullName(firstName: string, lastName?: string) {
  return console.log(`${firstName} ${lastName}`);
}

myFullName("Jose");

// Interfaces

interface Persona {
  name: string;
  edad: number;
  isColombian?: boolean;
}

let jose: Persona = {
  name: "Jose",
  edad: 12,
  // isColombian: true
};
