import Router from 'express';
import usuarioControllers from '../controllers/usuario.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJsonToken } from '../middlewares/validar-jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js'
import { check } from 'express-validator';
import { existeusuarioByid, existeemail } from '../helpers/usuario.js'


const router = Router();
router.get('/', [
    validarJsonToken,
    validarRoles('ADMIN_ROL'),
    validarCampos
], usuarioControllers.usuarioGet);
router.get('/:id', [
    validarJsonToken,
    validarRoles('ADMIN_ROL'),
    validarCampos
], usuarioControllers.usuariosGetByid);
router.post('/', [
    check('nombre', 'El campo nombre es requerido y no puede estar vacio ').not().isEmpty(),
    check('rol', 'El campo rol es requerido y no puede estar vacio ').not().isEmpty(),
    check('email', 'El campo email es requerido y no puede estar vacio ').not().isEmpty(),
    check('email').custom(existeemail),
    check('password', 'El campo password es requerido y no puede estar vacio ').not().isEmpty(),
    validarJsonToken,
    validarRoles('ADMIN_ROL'),
    validarCampos
], usuarioControllers.usuarioPost);
router.post('/login', [
    check('email', 'el campo email no puede estar vacio ').not().isEmpty(),
    check('password', 'el campo password no puede estar vacio ').not().isEmpty(),
    validarCampos
], usuarioControllers.loginPost);
router.put('/:id', [
    validarJsonToken,
    validarRoles('ADMIN_ROL'),
    validarCampos
], usuarioControllers.usuarioPut);
router.put('/activar/:id', [
    validarJsonToken,
    validarRoles('ADMIN_ROL'),
    validarCampos
], usuarioControllers.usuariosPutActivar);
router.put('/desactivar/:id', [
    validarJsonToken,
    validarRoles('ADMIN_ROL'),
    validarCampos
], usuarioControllers.usuariosPutDesactivar);
export default router;