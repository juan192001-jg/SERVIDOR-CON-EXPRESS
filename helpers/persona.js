import Persona from '../models/personas.js'

const existeDatos = {
    existeDocuemento: async(numeroDocumento) => {
        const existe = await Persona.findOne({ numeroDocumento })
        if (existe) { throw new Error('El numero de documeto ya existe') }
    },
    existeid: async(_id) => {
        const existe = await Persona.findById({ _id })
        if (!existe) { throw new Error('El id no existe') }
    },
    existeNumeroDocuemento: async(numeroDocumento) => {
        const existe = await Persona.findOne({ numeroDocumento })
        if (!existe) { throw new Error('El numero de documeto no existe') }
    },

}
export default existeDatos