import express from 'express'
import verificarToken from '../middlewares/verificarToken.js'
import HojaDeVida from '../models/HojaDeVida.js'

const router = express.Router()

router.get('/hojadevida', verificarToken, async (req, res) => {
  try {
    const hoja = await HojaDeVida.findOne({ usuarioId: req.usuarioId })
    if (!hoja) {
      return res.status(404).json({ mensaje: 'Hoja de vida no encontrada' })
    }

    res.json(hoja)
  } catch (error) {
    console.error('Error al obtener hoja de vida:', error)
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
})

export default router



