import path from "node:path";
import { writeFile } from "node:fs/promises";

let nombreArchivoCompleto = process.argv[2];
let contenido = process.argv[3];

const rutaAbs = "/home/mari/Desktop/textos";

if (nombreArchivoCompleto && contenido !== "") {
  let rutaCompleta = path.join(rutaAbs, nombreArchivoCompleto);

  try {
    await writeFile(rutaCompleta, contenido);
    console.log("Se ha escrito correctamente la información proporcionada");
  } catch (error) {
    console.log("Error al escribir en el documento:", error.message);
  }
} else {
  console.log(
    "Error: debes indicar el nombre del archivo y el contenido entre comillas.",
  );
}
