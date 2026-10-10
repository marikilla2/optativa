import validator from "validator";
import { compareAsc, format } from "date-fns";

const email = process.argv[2];
if (!email) {
  console.log("debes introducir un email");
} else {
  try {
    console.log(validator.isEmail(email));
  } catch {
    console.log("ha fallado la validación");
  }
}

const fecha = process.argv[3];

if (!fecha) {
  console.log("debes introducir una fecha en formato dd/mm/YYYY");
} else {
  try {
    console.log(validator.isDate(fecha, "dd/mm/YYYY"));
    const fechaF = format(fecha, "yyyy-MM-dd");
    console.log(fechaF);
  } catch {
    console.log("ha fallado la validación");
  }
}

//Leer por consola con readline para el examen
