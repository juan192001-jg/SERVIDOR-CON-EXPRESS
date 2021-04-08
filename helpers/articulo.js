import Articulo from '../models/articulo.js';
import Categoria from '../models/categoria.js';

const validarArticulos = {
    existecampocodigoByid: async(codigo) => {
        const existe = await Articulo.findOne({ codigo })
        if (existe) { throw new Error(`ya un articulo identidicado con el codigo ${codigo}  `) }

    },
    existecategoriaByid: async(id) => {
        const existe = await Categoria.findById(id)
        if (existe) { throw new Error(`El id de la categoria no existe ${id}`) }

    },
    EstadoInactivo: async(estado) => {
        const exite = await estado
        if (existe == 0) { throw new Error('el campo ya esta inactivo') }
    },
    EstadoeActivo: async(estado) => {
        const existe = await Articulo.estado(estado)
        if (existe === 1) { throw new Error('El estado de articulo ya esta activo') }
    }
}



export default validarArticulos;