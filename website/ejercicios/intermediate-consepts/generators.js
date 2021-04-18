function* myGenerator() {
  console.log("Empezando la función");
  yield;
  console.log("Finalizando la función");
}

const gen = myGenerator();
gen.next();

function* myCounter() {
  let counter = 1;
  let reset;
  while (true) {
    reset = yield counter;
    if (reset) {
      counter = 1;
    } else {
      counter++;
    }
  }
}

const counter = myCounter();

function* fibonacci() {
  let a = 1;
  let b = 1;
  while (true) {
    let nextNumber = a + b;
    yield nextNumber;
    a = b;
    b = nextNumber;
  }
}

const myFibonacci = fibonacci();
