import Router from 'express';
import usuarioControllers from '../controllers/usuario.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJsonToken } from '../middlewares/validar-jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js'
import { check } from 'express-validator';


const router = Router();
router.get('/', [
    validarJsonToken,
    check(),
    validarRoles('ADMIN_ROL'),
    validarCampos
], usuarioControllers.usuarioGet);
router.get('/:id', [
    validarJsonToken,
    validarRoles('ADMIN_ROL'),
    validarCampos
], usuarioControllers.usuariosGetByid);
router.post('/', [
    validarJsonToken,
    validarRoles('ADMIN_ROL'),
    validarCampos
], usuarioControllers.usuarioPost);
router.post('/login', [
    validarJsonToken,
    validarRoles('ADMIN_ROL'),
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