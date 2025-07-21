const mongoose = require('mongoose');

// Definimos el esquema de una película
const PeliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String },
  descripcion: { type: String },
  poster: { type: String }
}, {
  timestamps: true // Opcional: agrega createdAt y updatedAt automáticamente
});

// Exportamos el modelo para usarlo en otras partes del backend
module.exports = mongoose.model('Pelicula', PeliculaSchema);
