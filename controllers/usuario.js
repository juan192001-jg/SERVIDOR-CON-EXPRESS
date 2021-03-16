import Usuario from '../models/usuario.js';
import bcryptjs from 'bcryptjs';
import { genneranJswt } from '../middlewares/validar-jwt.js';


const usuarioControllers = {

    usuarioGet: async(req, res) => {
        const query = req.query.value;
        const usuarios = await Usuario.find({
            $or: [
                { nombre: new RegExp(query, 'i') },
                { email: new RegExp(query, 'i') },
                { rol: new RegExp(query, 'i') }
            ]
        });
        res.json({
            usuarios
        })
    },
    usuariosGetByid: async(req, res) => {
        const { id } = req.params;
        const usuario = await Usuario.findById(id)
        res.json({
            usuario
        })
    },
    loginPost: async(req, res) => {
        const { email, password } = req.body
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.json({ mgs: 'Usuario/possword no son corectos email' })
        }
        if (usuario.esatdo === 0) {
            return res.json({ mgs: 'Usuario/possword no son corectos inactivo' })
        }
        // permie que se comparen dos cosntraseñas 
        const validatePassword = bcryptjs.compareSync(password, usuario.password);
        if (!validatePassword) {
            return res.json({ mgs: 'Usuario/possword no son corectos contaseña incoarecta' })
        }
        const token = await genneranJswt(usuario.id);

        res.json({
            usuario,
            token
        })
    },
    usuarioPost: async(req, res) => {
        const { nombre, email, password, rol } = req.body;
        const usuario = Usuario({ nombre, email, password, rol });
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt)
        usuario.save();
        res.json({
            usuario
        })
    },
    usuarioPut: async(req, res) => {
        const { id } = req.params;
        const { _id, esatdo, createdAt, __v, email, rol, password, ...resto } = req.body;
        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt)
        }
        const usuario = await Usuario.findByIdAndUpdate(id, resto);

        res.json({
            usuario
        })
    },
    usuariosPutActivar: async(req, res) => {
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, { esatdo: 1 });
        res.json({
            usuario
        })
    },
    usuariosPutDesactivar: async(req, res) => {
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, { esatdo: 0 });
        res.json({
            usuario
        })
    }
}
export default usuarioControllers;