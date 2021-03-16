import Routes from 'express';
import categoriacontrollers from '../controllers/categoria.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import { existenCategoriasById, existenCategoriasByNombre } from '../helpers/categorias.js';
import { validarJsonToken } from '../middlewares/validar-jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js'


const router = Routes();
router.get('/', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], categoriacontrollers.categoriaGet);

router.get('/:id', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'El ID ingresado no es  válido').isMongoId(),
    check('id').custom(existenCategoriasById),
    // check('estado').custom(),
    validarCampos
], categoriacontrollers.categoriaGetByid);

router.post('/', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    check('nombre', 'El nombre es abligatorio').not().isEmpty(),
    check('nombre').custom(existenCategoriasByNombre),
    validarCampos
], categoriacontrollers.categoriaPost);

router.put('/:id', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'El ID igresado no es  válido').isMongoId(),
    check('id').custom(existenCategoriasById),
    check('nombre').custom(existenCategoriasByNombre),
    validarCampos
], categoriacontrollers.categoriaPut);

router.put('/activar/:id', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'El ID igresado no es  válido').isMongoId(),
    check('id').custom(existenCategoriasById),
    validarCampos
], categoriacontrollers.categoriaPutActivar);

router.put('/desactivar/:id', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'El ID igresado no es  válido').isMongoId(),
    check('id').custom(existenCategoriasById),
    validarCampos
], categoriacontrollers.categoriaPutDesactivar);

router.delete('/:id', [
    validarJsonToken,
    check('id', 'El ID igresado no es  válido').isMongoId(),
    check('id').custom(existenCategoriasById),
    validarCampos
], categoriacontrollers.categoriaDelete);

export default router;