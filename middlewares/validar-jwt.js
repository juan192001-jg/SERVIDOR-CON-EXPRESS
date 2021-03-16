import jsonwedtoken from 'jsonwebtoken';
import { existeusuarioByid } from '../helpers/usuario.js';
import Usuario from '../models/usuario.js';

const genneranJswt = (uid = '') => {
    return new Promise((resolve, reject) => {
        checkToken()
        const payload = { uid }
        jsonwedtoken.sign(payload, process.env.SECREPRIVATEKEY, {
            expiresIn: '7d'
        }, (err, token) => {
            if (err) {
                reject('no se pudo generar el token')
            } else {
                resolve(token)
            }
        })
    })
}
const validarJsonToken = async(req, res, next) => {
    const token = req.header('token')
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }
    try {
        const { uid } = jsonwedtoken.verify(token, process.env.SECREPRIVATEKEY);
        const usuario = await Usuario.findById(uid);
        if (!usuario) {
            return res.status(401).json({
                msg: 'El token no valido '
            })
        }
        if (usuario.estado === 0) {
            return res.status(401).json({
                msg: 'token no valido  '
            })
        }
        req.usuario = usuario
        next();

    } catch (error) {
        res.status(401).json({
            msg: 'El token no es valido '
        })
    }
}
async function checkToken(token) {
    let __id = null;
    try {
        const { _id } = await jsonwedtoken.decode(token)
        __id = _id
    } catch (error) {
        return false;
    }
    const existeUsuario = existeusuarioByid(__id)



}
export { genneranJswt, validarJsonToken }