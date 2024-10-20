const express = require("express");
const router = express.Router();
const tasklistController = require("../controllers/tasklistController");

// Definir rutas CRUD
router.get("/", tasklistController.getAllTasks); // Obtener todas las tareas
router.post("/", tasklistController.createTask); // Crear nueva tarea
router.get("/:id", tasklistController.getTaskById); // Obtener tarea por ID
router.put("/:id", tasklistController.updateTask); // Actualizar tarea por ID
router.delete("/:id", tasklistController.deleteTask); // Eliminar tarea por ID

module.exports = router;
