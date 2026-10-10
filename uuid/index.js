import { v4 as uuidv4 } from "uuid";

let idUnico = uuidv4();
console.log("El id único es: ", idUnico);

const usuarios = [
  { id: uuidv4(), nombre: "Ana" },
  { id: uuidv4(), nombre: "Carlos" },
  { id: uuidv4(), nombre: "Elena" },
];

console.log(usuarios);
