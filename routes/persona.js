import { Router } from 'express';
import personaControllers from '../controllers/persoan.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJsonToken } from '../middlewares/validar-jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js'
import existeDatos from '../helpers/persona.js';




const router = new Router();
router.get('/', [
        validarJsonToken,
        validarRoles('ALMACENISTA_ROL'),
        validarCampos
    ], personaControllers.personaGet)
    // router.get('/:id', [
    //     validarJsonToken,
    //     check('id', 'El ID no existe').isMongoId(),
    //     check('id').custom(existeDatos.existeid),
    //     validarRoles('ALMACENISTA_ROL'),
    //     validarCampos
    // ], personaControllers.personaGetByid)
router.get('/numeroDucumento/:id', [
    validarJsonToken,
    check('id').custom(existeDatos.existeNumeroDocuemento),
    validarRoles('ALMACENISTA_ROL'),
    validarCampos

], personaControllers.personaGetNumeroDocuemnto)
router.get('/listCliente/', [
    validarJsonToken,
    validarRoles('VENDEDOR_ROL'),
    validarCampos
], personaControllers.clienteGet)
router.get('/listPeoveedore/', [
    validarJsonToken,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], personaControllers.proveedorGet)
router.post('/', [
    validarJsonToken,
    check('tipoPersona', 'El campo tipo de persona no puede estar vacio').not().isEmpty(),
    check('nombre', 'El campo nombre no puede estra vacio').not().isEmpty(),
    check('tipoDucumento', 'El campo tipo d documento no puede eatr vacio').not().isEmpty(),
    check('numeroDocumento', 'el coampo numero de docuemto no puede estra vacio').not().isEmpty(),
    check('numeroDocumento').custom(existeDatos.existeDocuemento),
    validarRoles('ALMACENITA_ROL'),
    validarCampos
], personaControllers.personaPost)
router.put('/:id', [
    validarJsonToken,
    check('id', 'El ID no existe').isMongoId(),
    check('id').custom(existeDatos.existeid),
    check('tipoPersona', 'El campo tipo de persona no puede estar vacio').not().isEmpty(),
    check('nombre', 'El campo nombre no puede estra vacio').not().isEmpty(),
    check('tipoDucumento', 'El campo tipo d documento no puede eatr vacio').not().isEmpty(),
    check('numeroDocumento', 'el coampo numero de docuemto no puede estra vacio').not().isEmpty(),
    check('numeroDocumento').custom(existeDatos.existeDocuemento),
    validarRoles('ALMACENITA_ROL'),
    validarCampos
], personaControllers.personaModificarByIdPut)
router.put('/activar/:id', [
    validarJsonToken,
    check('id', 'El ID no existe').isMongoId(),
    check('id').custom(existeDatos.existeid),
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], personaControllers.personaPutActivar)
router.put('/desactivar/:id', [
    validarJsonToken,
    check('id', 'El ID no existe').isMongoId(),
    check('id').custom(existeDatos.existeid),
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], personaControllers.personaPutDesactivar)
router.delete('/:id', [
    validarJsonToken,
    check('id', 'El ID no existe').isMongoId(),
    check('id').custom(existeDatos.existeid),
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], personaControllers.personaDelete)
export default router;