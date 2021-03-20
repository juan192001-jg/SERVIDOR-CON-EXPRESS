import Categoria from "../models/categoria.js";

const categoriacontrollers = {
    categoriaGet: async(req, res) => {
        const value = req.query.value;
        const categoria = await Categoria
            .find({
                $or: [
                    { nombre: new RegExp(value, 'i') },
                    { descripcion: new RegExp(value, 'i') }
                ]
            })
            .sort({ 'nombre': -1 })
        res.json({
            categoria
        })
    },
    categoriaPost: async(req, res) => {
        const { nombre, descripcion } = req.body;
        const categoria = new Categoria({ nombre, descripcion });

        await categoria.save();
        res.json({
            categoria
        })

    },
    categoriaGetByid: async(req, res) => {
        const { id } = req.params;
        const categoria = await Categoria.findOne({
            _id: id
        })
        res.json({
            categoria
        })
    },
    categoriaPut: async(req, res) => {
        const { id } = req.params;
        const { _id, estado, createdAt, __v, ...resto } = req.body
            // findByIdAndUpdate bausacra por el id y modifique 
        const categoria = await Categoria.findByIdAndUpdate(id, resto);
        res.json({
            categoria
        })

    },
    categoriaPutActivar: async(req, res) => {
        const { id } = req.params;
        const categoria = await Categoria.findByIdAndUpdate(id, { estado: 1 })
        res.json({
            categoria
        })
    },
    categoriaPutDesactivar: async(req, res) => {
        const { id } = req.params;
        const categoria = await Categoria.findByIdAndUpdate(id, { estado: 0 })
        res.json({
            categoria
        })
    },
    categoriaDelete: async(req, res) => {
        const { id } = req.params;
        const categoria = await Categoria.findByIdAndDelete(id)
        res.json({
            categoria
        })
    }
}
export default categoriacontrollers;