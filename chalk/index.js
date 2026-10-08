import chalk from "chalk";

const informativo = chalk.blue("Este es un mensaje informativo.");
console.log(informativo);

const operacionCorrecta = chalk.green("La operación ha sido un éxito.");
console.log(operacionCorrecta);

const advertencia = chalk.yellow("Esto es una advertencia.");
console.log(advertencia);

const error = chalk.red("Esto es un error!");
console.log(error);

const mensajeDestacado = chalk.bold.blue("Esto es un mensaje destacado.");
console.log(mensajeDestacado);
