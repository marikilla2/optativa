import { readFile } from "node:fs/promises";
import path from "node:path";

const archivo = process.argv[2];

if (archivo) {
  const rutaCarpeta = "/home/mari/Desktop/textos";
  const nuevaRuta = path.join(rutaCarpeta, archivo);
  try {
    //Cuidado con añadir await y utf-8
    const lectura = await readFile(nuevaRuta, "utf-8");
    console.log(lectura);
  } catch {
    console.log("Ha habido un error al leer el archivo");
  }
} else {
  console.log("Error: Debes proporcionar el nombre del archivo como argumento");
}
