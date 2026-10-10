let nombre = process.argv[2];

if (nombre) {
  console.log("hola, " + nombre);
} else {
  console.log("debes añadir un nombre como parámetro");
}
