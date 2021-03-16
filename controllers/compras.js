import Compras from '../models/compras.js';

const comprasControllers = {
    compraGet: async(req, res) => {
        const compras = await Compras
            .find()
            .populate('nombre', 'email', 'rol', 'tipoPersoan', ' nombre')
            // .populate(')
        res.json({
            compras
        })

    },


    compraPost: async(req, res) => {
        const { usuario, persona, tipoComprobante, serieComprobante, numeroComprobante, impuesto, total, detalles } = req.body
        const compra = new Compras({
            usuario,
            persona,
            tipoComprobante,
            serieComprobante,
            numeroComprobante,
            impuesto,
            total,
            detalles
        })
        await compra.save();
        res.json({
            compra
        })
    }
}
export default comprasControllers;