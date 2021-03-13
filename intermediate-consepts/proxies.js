const myTarget = {
  rojo: "red",
  blue: "azul",
  verde: "green",
};

const handler = {
  set: function (obj, prop, value) {
    if (prop in obj) {
      obj[prop] = value;
    } else {
      console.error(
        `Lo siento, la propiedad ${prop}, no existe. Intentalo de nuevo`
      );
    }
  },

  get: function (obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const suggestion = Object.keys(obj).find((key) => {
      return Levenshtein(key, prop) <= 3;
    });

    if (suggestion) {
      console.log(
        `Rayos!, no pudimos encontrar ${prop}, talvez quisiste decir ${suggestion}?`
      );
    } else {
      console.log(`Lo siento no podemos encontrar ${prop} o nada parecido`);
    }
  },
};

const proxie = new Proxy(myTarget, handler);
