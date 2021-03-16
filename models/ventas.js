import mongoose from "mongoose";
const ventasShema = mongoose.Schema({
    usuario: {},
    persona: {},
    tipoComprobante: { type: String, maxlength: 20, required: true },
    serieComprobante: { type: Number, required: true, maxlength: 7 },
    numeroComprobante: { type: Number, required: true, maxlength: 10 },
    impuesto: { type: Number, maxlength: 6, default: 0.19 },
    total: { required: true, type: Number },
    detalles: { type: [] },
    estado: { type: Number, default: 1 },
    createtAt: { type: Date, default: Date.now }
})
export default mongoose.model('Venta', ventasShema);