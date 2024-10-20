const express = require("express");
const dbConnect = require("./config/db"); // Conexión a MongoDB
const taskListRoutes = require("./routes/taskListRoutes"); // Rutas de tareas

const app = express();
app.use(express.json()); // Middleware para interpretar JSON

// Conectar a la base de datos
dbConnect(); // Aquí llamas a la función para conectarte a la base de datos

// Usar las rutas definidas para tareas
app.use("/tasklist", taskListRoutes);

// Iniciar el servidor en el puerto 3000 o en el puerto definido en env
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
