import mongoose from "mongoose";
const comprasShema = mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    persona: { type: mongoose.Schema.Types.ObjectId, ref: 'Persona', required: true },
    tipoComprobante: { type: String, maxlength: 20, required: true },
    serieComprobante: { type: Number, required: true, maxlength: 7 },
    numeroComprobante: { type: Number, required: true, maxlength: 10 },
    impuesto: { type: Number, maxlength: 6, required: true },
    total: { required: true, type: Number },
    detalles: [{
        _id: { type: String, required: true },
        articulo: { type: String, required: true },
        cantidad: { type: Number, required: true, default: 1 },
        precio: { type: String, required: true },
        descuento: { type: String, required: true, default: 0 }
    }],
    estado: { type: Number, default: 1 },
    createtAt: { type: Date, default: Date.now }
})

export default mongoose.model('Compra', comprasShema);