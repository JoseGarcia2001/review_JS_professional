import Singleton from "./singleton";

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(`¿Ambas instancias son iguales? ${a === b}`);
