import mongoose from 'mongoose'

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  creadoEn: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Usuario', UsuarioSchema)

