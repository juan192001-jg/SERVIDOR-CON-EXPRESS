import Compras from '../models/compras.js';
import Artiulos from '../models/articulo.js';


const comprasControllers = {


    aumentarStock: async(_id, cantidad) => {
        let { stock } = await Artiulos.findById(_id)
        stock = parseInt(stock) + parseInt(cantidad)
        await Artiulos.findByIdAndUpdate({ _id }, { stock })
    },
    disminuirStock: async(_id, cantidad) => {
        let { stock } = await Artiulos.findById(_id)
        stock = parseInt(stock) - parseInt(cantidad)
        const reg = await Artiulos.findByIdAndUpdate({ _id }, { stock })
    },

    compraGet: async(req, res) => {
        const compras = await Compras
            .find()
            .populate('usuario', 'rol')
            .populate('persona', 'tipoPersona')
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
            total,
            detalles
        })
        await compra.save();

        detalles.map((articulos) => comprasControllers.aumentarStock(articulos._id, articulos.cantidad));

        res.json({
            compra
        })
    },
    compraGetByIdText: async(req, res) => {
        const value = req.query.value
        const existe = await Compras.findOne({
                $or: [
                    { compra: new RegExp(value, 'i') },

                ]
            })
            .sort({ 'tipoComprobante': -1 })
        res.json({
            existe
        })

    },
    comprasGetByid: async(req, res) => {
        const { id } = req.params;
        const existe = await Compras
            .findOne({ _id: id })
            .populate('usuario', 'rol')
            .populate('persona', 'tipoPersona')
        res.json({
            existe
        })
    },
    compraPutActivar: async(req, res) => {
        const { id } = req.params;
        const activado = await Compras.findByIdAndUpdate(id, { estado: 1 })
        res.json({ activado })
        comprasControllers.disminuirStock
    },
    compraPutDesactivar: async(req, res) => {
        const { id } = req.params;
        const desactivado = await Compras.findByIdAndUpdate(id, { estado: 0 })
        res.json({ desactivado });
        comprasControllers.aumentarStock
    }
}
export default comprasControllers;