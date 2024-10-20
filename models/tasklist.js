const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ["sin empezar", "en proceso", "terminado"],
    default: "sin empezar",
  },
});

module.exports = mongoose.model("Task", TaskSchema);
