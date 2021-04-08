import { Router } from 'express';
import ArticuloControllers from '../controllers/articulo.js'
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJsonToken } from '../middlewares/validar-jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js'
import { check } from 'express-validator';
import validarArticulos from '../helpers/articulo.js'


const router = Router();
router.get('/', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL', 'VENDEDOR_ROL'),
    validarCampos
], ArticuloControllers.articuloGet);
router.get('/:id', [
    validarJsonToken,
    check('id', 'El ID no existe').isMongoId(),
    validarRoles('ALMACENISTA_ROL', 'VENDEDOR_ROL'),
    validarCampos
], ArticuloControllers.articuloGetByid);
router.get('/', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL', 'VENDEDOR_ROL'),
    validarCampos
], ArticuloControllers.articuloGetText)
router.post('/', [
    validarJsonToken,
    check('categoria', 'La categoaria no puede estar vacia').not().isEmpty(),
    check('categoria', 'El Id de la categoria no es valido').isMongoId(),
    check('nombre', 'El capo nombre es abligatorio y no puede estar vacio').not().isEmpty(),
    check('codigo', 'El campo codigó es obligatorio y no puede estar vacio').not().isEmpty(),
    check('descripcion', 'el campo descripcio no puede estar vacio ').not().isEmpty(),
    check('codigo').custom(validarArticulos.existecampocodigoByid),
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], ArticuloControllers.articuloPost);
router.put('/:id', [
    validarJsonToken,
    check('id', 'El ID no existe').isMongoId(),
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], ArticuloControllers.articuloPutmodifica)
router.put('/activar/:id', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'el id no  esxiste ').isMongoId(),
    check('estado').custom(validarArticulos.EstadoeActivo),
    validarCampos
], ArticuloControllers.articuloPutactivar)
router.put('/desactivar/:id', [
    validarJsonToken,
    check('id', 'el id no  esxiste ').isMongoId(),
    validarRoles('ALMACENISTA_ROL'),
    // check('estado').custom(validarArticulos.EstadoInactivo),
    validarCampos
], ArticuloControllers.articuloDesactivar)


export default router