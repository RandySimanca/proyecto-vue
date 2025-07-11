import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Usuario from '../models/Usuario.js'

const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Verificar si existe el usuario
    const usuario = await Usuario.findOne({ email })
    if (!usuario) {
      return res.status(400).json({ mensaje: 'Usuario no encontrado' })
    }

    // Comparar contraseña
    const passwordValida = await bcrypt.compare(password, usuario.passwordHash)
    if (!passwordValida) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' })
    }

    // Generar JWT
    const token = jwt.sign(
      { usuarioId: usuario._id },
      process.env.JWT_SECRET,
      { expiresIn: '3h' }
    )

    res.json({
      token,
      nombre: usuario.nombre,
      email: usuario.email
    })
  } catch (error) {
    console.error('Error en login:', error)
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
})

export default router
