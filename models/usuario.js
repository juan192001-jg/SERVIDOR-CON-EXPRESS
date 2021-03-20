import mongoose from "mongoose";

const usuarioshema = mongoose.Schema({
    nombre: { type: String, required: true, maxlength: 50 },
    email: { type: String, unique: true, maxlength: 50, required: true },
    password: { type: String, required: true },
    rol: { type: String, required: true, maxlength: 20 },
    esatdo: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Usuario', usuarioshema);