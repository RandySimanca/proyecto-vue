import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import hojaDeVidaRoutes from './routes/hojaDeVidaRoutes.js'
app.use('/api', hojaDeVidaRoutes)



dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🔗 MongoDB conectado'))
  .catch((err) => console.error('Error de conexión:', err))

app.use('/api', authRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`))
