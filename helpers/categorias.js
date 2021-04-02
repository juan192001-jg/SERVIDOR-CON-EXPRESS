import Categoria from "../models/categoria.js"

const existenCategoriasById = async(id) => {
    const existe = await Categoria.findById(id);
    if (!existe) throw new Error(`El ID no existe`);

}
const existenCategoriasByNombre = async(nombre) => {
    const existe = await Categoria.findOne({ nombre })
    if (existe) {
        throw new Error(`ya existe una categoria con ese nombre de ${nombre}`)

    }
}



export { existenCategoriasById, existenCategoriasByNombre }