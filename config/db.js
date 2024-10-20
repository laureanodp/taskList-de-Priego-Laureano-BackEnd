const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    // Conexión a la base de datos MongoDB en localhost con la base de datos "tasklist"
    await mongoose.connect("mongodb://localhost:27017/tasklist");
    console.log("Conexión a la base de datos fue exitosa");
  } catch (error) {
    console.error("Error en la conexión a la base de datos", error);
    process.exit(1); // Finaliza la aplicación si no se puede conectar a la base de datos
  }
};

module.exports = dbConnect;
