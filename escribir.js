import { readFile, appendFile, writeFile} from 'node:fs/promises';

const content = await readFile('ejercicio.txt', 'utf-8');

await appendFile('prueba.txt', "\nUna nueva línea");
await writeFile('prueba2.txt', "Un nuevo archivo");
console.log(content);

