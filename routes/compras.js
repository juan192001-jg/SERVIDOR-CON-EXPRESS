import { Router } from 'express'
import comprasControllers from '../controllers/compras.js'

const router = Router();
router.get('/', comprasControllers.compraGet)
router.get('/')
router.post('/', comprasControllers.compraPost)
router.put('/')
router.put('/')

export default router