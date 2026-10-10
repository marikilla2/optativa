let correo = process.argv[2];

if (correo && correo.includes("@")) {
  console.log("El correo es: " + correo);
} else {
  console.log("El formato no es válido, debe ser un correo electrónico");
}
