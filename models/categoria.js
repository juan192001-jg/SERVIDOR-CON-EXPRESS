import mongoose from "mongoose";

const categoriaschema = mongoose.Schema({
    nombre: { type: String, required: true, maxlength: 50, unique: true },
    descripcion: { type: String, maxlength: 225 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('categoria', categoriaschema);
// TABLAS=> Collection;
// CAMPOS=>propiedades 
// registro =>ducumentos