import API from './api'

export async function getMiHojaDeVida() {
  try {
    const res = await API.get('/hojadevida')
    return res.data
  } catch (err) {
    console.error('Error al obtener hoja de vida:', err)
    throw err
  }
}

import API from './api'

export async function guardarHojaDeVida(data) {
  try {
    const res = await API.post('/hojadevida', data)
    return res.data
  } catch (err) {
    console.error('Error al guardar:', err)
    throw err
  }
}
