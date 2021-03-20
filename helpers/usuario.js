import Usuario from "../models/usuario.js"

const existeusuarioByid = async(id) => {
    const existe = await Usuario.findById(id)
    if (!existe) {
        throw new Error('El ID no existe ')
    }
}
const existeemail = async(email) => {
    const existe = await Usuario.findOne({ email })
    if (existe) {
        throw new Error(`ya esiste existe el email ${email}`)
    }
}

export { existeusuarioByid, existeemail }