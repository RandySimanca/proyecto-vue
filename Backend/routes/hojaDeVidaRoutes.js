import express from 'express'
import verificarToken from '../middlewares/verificarToken.js'
import HojaDeVida from '../models/HojaDeVida.js'

const router = express.Router()

// Crear o actualizar hoja de vida
router.post('/hojadevida', verificarToken, async (req, res) => {
  try {
    const datos = req.body

    const existente = await HojaDeVida.findOne({ usuarioId: req.usuarioId })

    if (existente) {
      // Actualiza si ya existe
      await HojaDeVida.updateOne({ usuarioId: req.usuarioId }, { $set: datos })
      return res.json({ mensaje: 'Hoja de vida actualizada' })
    }

    // Crea si no existe
    const nueva = new HojaDeVida({
      usuarioId: req.usuarioId,
      ...datos
    })

    await nueva.save()
    res.status(201).json({ mensaje: 'Hoja de vida guardada' })
  } catch (error) {
    console.error('Error al guardar hoja de vida:', error)
    res.status(500).json({ mensaje: 'Error al guardar' })
  }
})

export default router
