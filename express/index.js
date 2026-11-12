import express from "express";

const app = express();

//Variables de entorno, cómo pasar variables de entorno desde la terminal
// si es nulo pone el puerto 3000
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  console.log("--- Nueva petición recibida ---");
  console.log("Método:", req.method);
  console.log("URL:", req.url); // ¡Muy importante llamar a next()!
  next();
});

app.get("/", (req, res) => {
  res.send("Hola mundo desde Express");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
  });
});

//Concepto de Middleware: ocurre antes de llegar a la petición que me ha hecho el usuario
// Recibe 3 parámetros, res, req y next para que se ejecute el siguiente middleware
app.use((req, res) => {
  res.status(404).send("No encontrado");
});

// Cuando se ejecuta el código?, se lee de arriba a abajo
// Se ejecuta si entra ya que se lee de arriba a abajo, importante el orden
