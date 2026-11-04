import http from "node:http";
const DESIRED_PORT = 3000;
import { json } from "node:stream/consumers";
import { usuarios } from "./archivo.js";

const server = http.createServer(async (req, res) => {
  //HAY QUE PONERLE EL ASYNC AL PONER LO DE AWAIT ABAJO
  const { method } = req; //aqui se deja solo method, quitamos la url
  console.log("Petición recibida");
  const { pathname, searchParams } = new URL(
    req.url,
    `http://${req.headers.host}`,
  );

  const nombre = searchParams.get("nombre");

  //NO OLVIDAR LAS CABECERAS EN LOS DISTINTOS CASOS
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  switch (pathname) {
    case "/":
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end("<h1>Bienvenido a la Home</h1>");
      break;
    case "/usuarios":
      if (method === "GET") {
        try {
          //const nombre = searchParams.get("nombre"); <- esto va fuera del switch
          //convertir a número el searchParams.get
          const limit = Number(searchParams.get("limit"));
          const offset = Number(searchParams.get("offset")) || 0;

          let resultado = usuarios;

          if (nombre) {
            resultado = resultado.filter(
              (u) => u.nombre.toLowerCase() === nombre.toLowerCase(),
            );
          }

          if (offset && limit) {
            resultado = resultado.slice(offset, offset + limit); //el slice es una función que marca donde comienza y donde termina la copia del array
          }

          res.statusCode = 200; //200 significa que todo ha ido bien en el método GET
          return res.end(JSON.stringify(resultado));
        } catch (error) {
          console.error(error);
          res.statusCode = 500;
          return res.end(JSON.stringify({ message: "Error interno" }));
        }
      }
      if (method === "POST") {
        try {
          const body = await json(req); //Función asíncrona (async) para que funcione el await
          const { nombre, edad, altura } = body;

          if (!nombre) {
            res.statusCode = 400; //400 significa que el cliente mandó algo mal o que falta algún dato
            return res.end(
              JSON.stringify({ message: "El nombre es requerido" }),
            );
          } else if (!edad) {
            res.statusCode = 400; //400 significa que el cliente mandó algo mal o que falta algún dato
            return res.end(JSON.stringify({ message: "La edad es requerida" }));
          } else if (!altura) {
            res.statusCode = 400; //400 significa que el cliente mandó algo mal o que falta algún dato
            return res.end(
              JSON.stringify({ message: "La altura es requerida" }),
            );
          }

          const nuevoUsuario = {
            id: clientes.length + 1, //la longitud de los usuarios más 1 para ese nuevo id
            nombre,
            edad,
            altura,
          };
          clientes.push(nuevoUsuario);
          res.statusCode = 201; //201 significa que se creó correctamente
          return res.end(JSON.stringify(nuevoUsuario));
        } catch (error) {
          res.statusCode = 400; //400 significa que el cliente mandó algo mal o que falta algún dato
          return res.end("JSON inválido");
        }
      }
    default:
      res.statusCode = 404; //404 significa ruta no encontrada
      break;
  }
  return;
});
//Esto sirve para dar información del servidor
server.listen(DESIRED_PORT, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${DESIRED_PORT}`,
  );
});
