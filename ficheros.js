import {readFile} from 'node:fs/promises'

//Una llamada asíncrona está esperando un callback (respuesta)
const content = await readFile('./prueba.txt', 'utf-8');
//Si en vez de await ponemos then catch no se ejecuta nada porque no tiene la información
//en el final y luego se ejecuta el event loop que es cuando se ejecuta la pila, lo que haya
//dentro del .then
console.log(content);

const myVar = Escribir('Hola');

async function Escribir(a) {
    
}