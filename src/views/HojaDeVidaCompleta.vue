<template>
    <div>
      <section ref="seccionH1"><HojaDeVidaH1 /></section>
      <section ref="seccionH2"><HojaDeVidaH2 /></section>
      <section ref="seccionH3"><HojaDeVidaH3 /></section>
      <section ref="seccionTareas"><ListaDeTareas /></section>
  
      <button @click="exportarPorSecciones">📄 Exportar por páginas</button>
    </div>
  </template>
  
  
  <script setup>
  import HojaDeVidaH1 from '@/components/modules/hojadevida/modules/hojaDeVidaH1.vue'
  import HojaDeVidaH2 from '@/components/modules/hojadevida/modules/hojaDeVidaH2.vue'
  import HojaDeVidaH3 from '@/components/modules/hojadevida/modules/hojaDeVidaH3.vue'
  import ListaDeTareas from '@/components/modules/listaDetareas/modules/ListaDeTareas.vue'
  
import { ref, nextTick } from 'vue'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const seccionH1 = ref(null)
const seccionH2 = ref(null)
const seccionH3 = ref(null)
const seccionTareas = ref(null)

async function exportarPorSecciones() {
  const pdf = new jsPDF('p', 'mm', 'a4')
  const refs = [seccionH1, seccionH2, seccionH3, seccionTareas]

  for (let i = 0; i < refs.length; i++) {
    const el = refs[i].value
    if (!el) continue

    await nextTick() // asegurar que el DOM está renderizado

    const canvas = await html2canvas(el, { scale: 2, useCORS: true })
    const imgData = canvas.toDataURL('image/png')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const imgProps = pdf.getImageProperties(imgData)
    const imgHeight = (imgProps.height * pageWidth) / imgProps.width

    if (i > 0) pdf.addPage()
    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight > pageHeight ? pageHeight : imgHeight)
  }

  pdf.save('hoja-de-vida.pdf')
}

const datosPersonales = ref({})
const experiencia = ref([])
const totalTiempo = ref({})
const tareas = ref([])

function compilarHojaDeVida() {
  return {
    datosPersonales: datosPersonales.value,
    experiencia: experiencia.value,
    totalTiempo: totalTiempo.value,
    tareas: tareas.value
  }
}

async function guardar() {
  try {
    const datosFinales = compilarHojaDeVida()
    const respuesta = await guardarHojaDeVida(datosFinales)
    alert(respuesta.mensaje)
  } catch (e) {
    alert('Hubo un error al guardar')
  }
}

/*import { guardarHojaDeVida } from '@/services/hojaDeVidaService'

const formulario = {
  datosPersonales: { nombre: 'Randy', cedula: '123' },
  experiencia:*/ /* [],
  totalTiempo: { meses: 22 },
  tareas: ['Documentar', 'Testear']
}

async function guardar() {
  try {
    const respuesta = await guardarHojaDeVida(formulario)
    alert(respuesta.mensaje)
  } catch (e) {
    alert('Ocurrió un error al guardar 😓')
  }
}*/



  </script>
  
  <style scoped>
  .btn-exportar {
    margin-top: 20px;
    padding: 10px 16px;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .btn-exportar:hover {
    background-color: #0056b3;
  }
  </style>
  