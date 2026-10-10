let num1 = process.argv[2];
let num2 = process.argv[3];

if (num1 && num2) {
  let suma = Number(num1) + Number(num2);
  console.log(suma);
} else {
  console.log("no se han introducido números por parámetro correctamente");
}
