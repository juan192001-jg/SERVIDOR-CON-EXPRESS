import { Router } from 'express';
import personaControllers from '../controllers/persoan.js';


const router = new Router();
router.get('/', personaControllers.personaGet)
router.get('/:id', personaControllers.personaGetByid)
router.get('/listCliente', personaControllers.clienteGet)
router.get('/listPeoveedore', personaControllers.proveedorGet)
router.post('/', personaControllers.personaPost)
router.put('/:id', personaControllers.personaModificarByIdPut)
router.put('/activar/:id', personaControllers.personaPutActivar)
router.put('/desactivar/:id', personaControllers.personaPutDesactivar)
router.delete('/:id', personaControllers.personaDelete)
export default router;