import express from 'express'
import { autenticarUsuário, registrarUsuário } from '../controllers/auth.js'

const router = express.Router()

router.post('/registro', registrarUsuário)
router.post('/login', autenticarUsuário)
router.get('/xvideos', (req, res) => {
     return res.status(200).json({Mensagem: "xvideos"})
})
export default router;
