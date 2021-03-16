import Articulo from '../models/articulo.js';


const articuloControllers = {
    articuloGet: async(req, res) => {
        const articulos = await Articulo
            .find()
            .populate('categoria', 'nombre')
        res.json({
            articulos
        })
    },
    articuloGetByid: async(req, res) => {
        const { id } = req.params;
        const articulo = await Articulo
            .findOne({ _id: id })
            .populate('categoria', 'nombre')
        res.json({
            articulo
        })
    },
    articuloGetText: async(req, res) => {
        const value = req.query.value
        const articulo = await Articulo.findOne({
                $and: [
                    { categoria: new RegExp(value, 'i') },
                    { nombre: new RegExp(value, 'i') }
                ]

            })
            .sort({ 'categoria,nombre': 1 });
        res.json({
            articulo
        })

    },
    articuloPost: async(req, res) => {
        const { categoria, codigo, nombre, descripcion, precioventa, stok } = req.body
        const articulo = new Articulo({ categoria, codigo, nombre, descripcion, precioventa, stok })
        await articulo.save();
        res.json({
            articulo
        })

    },
    articuloPutmodifica: async(req, res) => {
        const { id } = req.params;
        const { _id, estado, createdAt, __v, ...resto } = req.body
        const articulo = await Articulo.findByIdAndUpdate(id, resto)
        res.json({
            articulo
        })
    },
    articuloPutactivar: async(req, res) => {
        const { id } = req.params
        const articulo = await Articulo.findByIdAndUpdate(id, { estado: 1 })
        res.json({
            articulo
        })
    },
    articuloDesactivar: async(req, res) => {
        const { id } = req.params
        const articulo = await Articulo.findByIdAndUpdate(id, { estado: 0 })
        res.json({
            articulo
        })
    },

}

export default articuloControllers;