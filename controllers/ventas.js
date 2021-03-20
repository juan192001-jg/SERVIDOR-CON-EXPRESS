import Ventas from '../models/ventas.js'

const ventasControllers = {
    ventasGet: async(req, res) => {
        const ventas = await Ventas
            .find()
            .populate('usuario', 'rol')
            .populate('persona', 'tipoPersona')
        res.json({
            ventas
        })

    },
    ventasPost: async(req, res) => {
        const { usuario, persona, tipoComprobante, serieComprobante, numeroComprobante, impuesto, total, detalles } = req.body
        const ventas = new Ventas({
            usuario,
            persona,
            tipoComprobante,
            serieComprobante,
            numeroComprobante,
            impuesto,
            total,
            detalles
        })
        await ventas.save();
        res.json({
            ventas
        })
    },
    ventasGetById: async(req, res) => {
        const { id } = req.params;
        const existe = await Ventas
            .findOne({ _id: id })
            .populate('usuario', 'rol')
            .populate('persona', 'tipoPersona')
        res.json({
            existe
        })
    },
    ventasGetText: async(req, res) => {
        const value = req.query.value;
        const existe = await Ventas
            .find({
                $or: [
                    { tipoComprobante: new RegExp(value, 'i') }
                ]
            });
        res.json({
            existe
        })
    },
    ventasPutactivar: async(req, res) => {
        const { id } = req.params;
        const activado = await Ventas.findByIdAndUpdate(id, { estado: 1 })
        res.json({ activado })
    },
    ventasPutDesactivar: async(req, res) => {
        const { id } = req.params;
        const activado = await Ventas.findByIdAndUpdate(id, { estado: 0 })
        res.json({ activado })
    },
}

export default ventasControllers;