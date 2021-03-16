import mongoose from "mongoose";

const articulosShema = mongoose.Schema({
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categoria', required: true },
    codigo: { type: Number, required: true, maxlength: 64, unique: true },
    nombre: { type: String, required: true, maxlength: 50 },
    descripcion: { type: String, maxlength: 255, required: true },
    precioventa: { type: Number, default: 0 },
    stok: { type: Number, default: 0 },
    estado: { type: Number, default: 1 },
    createtAd: { type: Date, default: Date.now }

})
export default mongoose.model('Articulo', articulosShema);