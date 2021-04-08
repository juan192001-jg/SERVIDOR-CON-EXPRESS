import Persona from '../models/personas.js';

const personaControllers = {
    personaGet: async(req, res) => {
        const value = req.query.value
        const persona = await Persona.find({
                $or: [
                    { nombre: new RegExp(value, 'i') }
                ]
            })
            .sort({ 'nombre': -1 });
        res.json({
            persona
        })

    },
    clienteGet: async(req, res) => {
        const value = req.query.value
        const listaClente = await Persona.find({
                $and: [
                    { tipoPersoan: new RegExp(value, 'i') }
                ]
            })
            .sort({ 'tipoPersoan': -1 });
        res.json({
            listaClente
        })
    },
    proveedorGet: async(req, res) => {
        const value = req.query.value
        const listaProveedor = await Persona.find({
                $and: [
                    { tipoPersoan: new RegExp(value, 'i') }
                ]
            })
            .sort({ 'tipoPersoan': -1 });
        res.json({
            listaProveedor
        })
    },
    personaGetByid: async(req, res) => {
        const { id } = req.params;
        const personaid = await Persona.findOne({
            _id: id
        })
        res.json({
            personaid
        })
    },
    personaGetNumeroDocuemnto: async(req, res) => {
        const { id } = req.params;
        const documento = await Persona.findOne({ numeroDocumento: id })
        res.json({
            documento
        })
    },
    personaPost: async(req, res) => {
        const { tipoPersona, nombre, tipoDucumento, numeroDocumento, dirrecion, telefono, email } = req.body
        const persona = Persona({ tipoPersona, nombre, tipoDucumento, numeroDocumento, dirrecion, telefono, email })
        await persona.save();
        res.json({
            persona
        })
    },
    personaModificarByIdPut: async(req, res) => {
        const { id } = req.params
        const { _id, estado, createdAt, __v, ...resto } = req.body
        const personaeditada = await Persona.findByIdAndUpdate(id, resto)
        res.json({
            personaeditada
        })

    },
    personaPutActivar: async(req, res) => {
        const { id } = req.params;
        const persona = await Persona.findByIdAndUpdate(id, { estado: 1 })
        res.json({
            persona
        })
    },
    personaPutDesactivar: async(req, res) => {
        const { id } = req.params;
        const persona = await Persona.findByIdAndUpdate(id, { estado: 0 })
        res.json({
            persona
        })
    },
    personaDelete: async(req, res) => {
        const { id } = req.params;
        const persona = await Persona.findByIdAndDelete(id)
        res.json({
            persona
        })
    }
}
export default personaControllers;