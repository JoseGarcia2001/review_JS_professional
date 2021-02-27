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
