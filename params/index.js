if (process.argv[2] == "-h") {
  console.log("Hola Mundo");
}
if (process.argv[2] == "-a") {
  console.log("Adiós Mundo");
}
if (process.argv[2] != "-h" && process.argv[2] != "-a") {
  console.log("Ni hola, ni adiós");
}

console.log("Hola mundo");
console.log("La ruta absoluta del ejecutable de Node.js " + process.argv[0]);
console.log(
  "La ruta absoluta del archivo que se está ejecutando " + process.argv[1],
);
console.log("Parametro 1 " + process.argv[2]);
console.log("Parametro 2 " + process.argv[3]);
console.log("Cuantos parametros hay? " + process.argv.length);

//a partir del parametro 2 van los parametros reales que hemos puesto manualmente
