import jwt from 'jsonwebtoken'

export default function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.usuarioId = payload.usuarioId
    next()
  } catch (error) {
    return res.status(403).json({ mensaje: 'Token inválido o expirado' })
  }
}
