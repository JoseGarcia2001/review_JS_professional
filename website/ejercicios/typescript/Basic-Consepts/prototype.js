//Crear un objeto para craer superheroes que saluden
const superman = {
  name: "Superman",
};

superman.saludar = function () {
  console.log(`Hola! Soy ${this.name}`);
};

superman.saludar();

const batman = {
  name: "Batman",
};

batman.saludar = function () {
  console.log(`Hola! Soy ${this.name}`);
};

batman.saludar();

//Como hacerlo de manera más eficiente

function Heroes(nombre) {
  const heroe = {
    name: nombre,
  };

  heroe.saludar = function () {
    console.log(`Ey! Soy ${heroe.name}`);
  };

  return heroe;
}

const superman = Heroes("Superman");
superman.saludar();

const batman = Heroes("Batman");
batman.saludar();

//Object Create
const heroMethods = {
  saludar: function () {
    console.log(`Ey! Soy ${this.name}`);
  },
  pelear: function () {
    console.log(`Ey ${this.name} te golpea`);
  },
};

function Heroes(nombre) {
  const heroe = Object.create(heroMethods);
  heroe.name = nombre;

  return heroe;
}

const superman = Heroes("Superman");
superman.saludar();
superman.pelear();

const batman = Heroes("Batman");
batman.saludar();
batman.pelear();

//Con prototype
function Heroes(nombre) {
  this.name = nombre;
}

Heroes.prototype.saludar = function () {
  console.log(`Ey! Soy ${this.name}`);
};

Heroes.prototype.pelear = function () {
  console.log(`Ey ${this.name} te golpea`);
};

const superman = new Heroes("Superman");
superman.saludar();
superman.pelear();

const batman = new Heroes("Batman");
batman.saludar();
batman.pelear();

// Con clases

class SuperHeros {
  constructor(name) {
    this.name = name;
  }

  saludar() {
    console.log(`Hola! Soy ${this.name}`);
  }

  pelear() {
    console.log(`Hola! Soy ${this.name} y te golpeo`);
  }
}

const batman = new SuperHeros("Batman");
batman.saludar();
batman.pelear();

const superman = new SuperHeros("Superman");
superman.saludar();
superman.pelear();

function counter(n) {
  let myCounter = n;

  const modifyCounter = (value) => {
    myCounter += value;
    console.log(myCounter);
  };

  return modifyCounter;
}

const joseCounter = counter(100);

joseCounter(3);
joseCounter(5);
joseCounter(-8);

function test(v) {
  this.value = v;
  console.log(this);
}

function hola() {
  console.log(this);
}

test();
hola();
