import Routes from 'express';
import ventasControllers from '../controllers/ventas.js'
import { validarCampos } from '../middlewares/validar-campos.js';
import { check } from 'express-validator';
import { validarJsonToken } from '../middlewares/validar-jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js';

const router = Routes();
router.get('/', [
    validarJsonToken,
    validarRoles('VENDEDOR_ROL'),
    validarCampos
], ventasControllers.ventasGet)
router.get('/:id', [
    validarJsonToken,
    validarRoles('VENDEDOR_ROL'),
    check('id', 'El ID ingresado no es  válido').isMongoId(),
    validarCampos
], ventasControllers.ventasGetById)
router.get('/', [
    validarJsonToken,
    validarRoles('VENDEDOR_ROL'),
    validarCampos
], ventasControllers.ventasGetText)
router.post('/', [
    validarJsonToken,
    check('usuario', 'El campo usuario no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('persona', 'El capo persona usuario no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('tipoComprobante', 'El compo tipo de comprovante no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('serieComprobante', 'El campo serie de comprobante no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('numeroComprobante', 'EL campo numero de comprobante no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('total', 'EL campo total no puede estar vacio por que es obligatorio').not().isEmpty(),
    check('detalles', 'EL campo  detalles no puede estar vacio por que es obligatorio').not().isEmpty(),
    validarRoles('VENDEDOR_ROL'),
    validarCampos
], ventasControllers.ventasPost)
router.put('/activar/:id', [
    validarJsonToken,
    validarRoles('VENDEDOR_ROL'),
    check('id', 'El ID ingresado no es  válido').isMongoId(),
    validarCampos
], ventasControllers.ventasPutactivar)
router.put('/desactivar/:id', [
    validarJsonToken,
    check('id', 'El ID ingresado no es  válido').isMongoId(),
    validarRoles('VENDEDOR_ROL'),
    validarCampos
], ventasControllers.ventasPutDesactivar)


export default router