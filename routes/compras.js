import { Router } from 'express'
import comprasControllers from '../controllers/compras.js'
import { validarCampos } from '../middlewares/validar-campos.js';
import { check } from 'express-validator';

import { validarJsonToken } from '../middlewares/validar-jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js';

const router = Router();
router.get('/', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], comprasControllers.compraGet)
router.get('/', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], comprasControllers.compraGetByIdText)
router.get('/:id', [
    check('id', 'El ID no existe').isMongoId(),
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], comprasControllers.comprasGetByid)
router.post('/', [
    check('usuario', 'El campo usuario no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('persona', 'El capo persona usuario no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('tipoComprobante', 'El compo tipo de comprovante no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('serieComprobante', 'El campo serie de comprobante no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('numeroComprobante', 'EL campo numero de comprobante no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('total', 'EL campo total no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('detalles', 'EL campo  detalles no puede estar vacio por que es obligatorio').not().isEmpty(),
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], comprasControllers.compraPost)
router.put('/activar/:id', [
    check('id', 'El ID no existe').isMongoId(),
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], comprasControllers.compraPutActivar)
router.put('/desactivar/:id', [
    check('id', 'El ID no existe').isMongoId(),
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], comprasControllers.compraPutDesactivar)


export default router