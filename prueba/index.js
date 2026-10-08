import path from "node:path";
import fs from "node:fs/promises";

const archivo = process.argv[2];

if (!archivo) {
  console.error(
    "Error: Debes proporcionar el nombre del archivo como argumento",
  );
} else {
  const rutaArchivos = "/home/mari/Desktop/textos";
  const ruta_completa = path.join(rutaArchivos, archivo);

  try {
    const contenido = await fs.readFile(ruta_completa, "utf-8");
    console.log(contenido);
  } catch (error) {
    console.error("Error al leer el archivo", error.message);
  }
}

// console.log(rutaArchivos);

// const contenido = await readFile(
//   rutaArchivos + process.argv[2] + ".txt",
//   "UTF-8",
// );
// console.log(contenido);
