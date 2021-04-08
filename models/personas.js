import mongoose from "mongoose";
const personasShema = mongoose.Schema({
    //  tipo de persona
    // Cliente, Proveedor 
    tipoPersona: { type: String, maxlength: 11, required: true },
    nombre: { type: String, maxlength: 50, unique: true, required: true },
    tipoDucumento: { type: String, maxlength: 20 },
    numeroDocumento: { type: Number, unique: true, maxlength: 20, required: true },
    dirrecion: { type: String, maxlength: 70 },
    telefono: { type: Number, maxlength: 15 },
    email: { type: String, unique: true, maxlength: 50 },
    estado: { type: Number, default: 1 },
    createtAt: { type: Date, default: Date.now }
})
export default mongoose.model('Persona', personasShema)