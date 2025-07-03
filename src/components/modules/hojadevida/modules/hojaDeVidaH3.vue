<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formato Único Hoja de Vida - Persona Natural</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form>
        <div class="container">          
                
                <div class="image-column">
                    <img src="@/assets/Escudo.svg" alt="Imagen" class="imagen">
                </div>
                <div class="header">
                    <h3>FORMATO ÚNICO</h3>
                    <h2>HOJA DE VIDA</h2>
                    <p>Persona Natural</p>
                    <p>(Leyes 190 de 1995, 489 y 443 de 1998)</p>
                </div>
                <div class="form-group">
                     <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" class="form-control3">
                </div>
          
        </div> 
        
        <div class="section">
            <div class="section-number">4</div>
            <h3 class="subtitle">TIEMPO TOTAL DE EXPERIENCIA</h3>
            <p>INDIQUE EL TIEMPO TOTAL DE SU EXPERIENCIA LABORAL EN NÚMERO DE AÑOS Y MESES.</p>
            
            <div class="section">
    <div class="section-number">4</div>
    <h3 class="subtitle">TIEMPO TOTAL DE EXPERIENCIA</h3>
    <p>INDIQUE EL TIEMPO TOTAL DE SU EXPERIENCIA LABORAL EN NÚMERO DE AÑOS Y MESES.</p>

    <table class="experience-table">
      <thead>
        <tr>
          <th>OCUPACIÓN</th>
          <th>TIEMPO DE EXPERIENCIA</th>
        </tr>
        <tr>
          <th></th>
          <th>AÑOS</th>
          <th>MESES</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SERVIDOR PÚBLICO</td>
          <td><input type="number" v-model.number="publico.anios" min="0" max="99" /></td>
          <td><input type="number" v-model.number="publico.meses" min="0" max="11" /></td>
        </tr>
        <tr>
          <td>EMPLEADO DEL SECTOR PRIVADO</td>
          <td><input type="number" v-model.number="privado.anios" min="0" max="99" /></td>
          <td><input type="number" v-model.number="privado.meses" min="0" max="11" /></td>
        </tr>
        <tr>
          <td>TRABAJADOR INDEPENDIENTE</td>
          <td><input type="number" v-model.number="independiente.anios" min="0" max="99" /></td>
          <td><input type="number" v-model.number="independiente.meses" min="0" max="11" /></td>
        </tr>
        <tr>
          <td><strong>TOTAL TIEMPO EXPERIENCIA</strong></td>
          <td><input type="number" :value="totalAnios" readonly /></td>
          <td><input type="number" :value="totalMeses" readonly /></td>
        </tr>
      </tbody>
    </table>
  </div>
        </div>
        
        <!-- Sección 5: Firma del servidor público o contratista -->
        <div class="section">
            <div class="section-number">5</div>
            <h3 class="subtitle">FIRMA DEL SERVIDOR PÚBLICO O CONTRATISTA</h3>
            <div class="declaration">
                <p>MANIFIESTO BAJO LA GRAVEDAD DEL JURAMENTO QUE SI NO ME ENCUENTRO DENTRO DE LAS CAUSALES DE INHABILIDAD E INCOMPATIBILIDAD DEL ORDEN CONSTITUCIONAL O LEGAL, PARA EJERCER CARGOS EMPLEOS PÚBLICOS O PARA CELEBRAR CONTRATOS DE PRESTACIÓN DE SERVICIOS CON LA ADMINISTRACIÓN PÚBLICA.</p>
                <p>PARA TODOS LOS EFECTOS LEGALES, CERTIFICO QUE LOS DATOS POR MI ANOTADOS EN EL PRESENTE FORMATO ÚNICO DE HOJA DE VIDA, SON VERACES, (ARTÍCULO 5o. DE LA LEY 190/95).</p>
            </div>
            
            <div class="form-group">
  <label for="signing-city">Ciudad:</label>
  <input type="text" id="signing-city" placeholder="Ej: Bogotá" />
</div>

<div class="form-group">
  <label for="signing-date">Fecha de diligenciamiento:</label>
  <input type="date" id="signing-date" />
</div>


            
            <div class="signature-area">
  <label for="firma">FIRMA DEL SERVIDOR PÚBLICO O CONTRATISTA</label><br />
  <input type="file" id="firma" accept=".jpg,.jpeg,.png" @change="mostrarFirma" />
  <div v-if="firmaUrl">
    <img :src="firmaUrl" alt="Firma cargada" style="margin-top: 10px; max-width: 300px; height: auto;" />
  </div>
</div>

        </div>
        
        <!-- Sección 6: Observaciones del jefe de recursos humanos -->
        <div class="section">
            <div class="section-number">6</div>
            <h3 class="subtitle">OBSERVACIONES DEL JEFE DE RECURSOS HUMANOS Y/O CONTRATOS</h3>
            <div class="declaration">
                <p>CERTIFICO QUE LA INFORMACIÓN AQUÍ SUMINISTRADA HA SIDO CONSTATADA FRENTE A LOS DOCUMENTOS QUE HAN SIDO PRESENTADOS COMO SOPORTE.</p>
            </div>
            
            <div class="form-group">
                <label for="observations">Observaciones:</label>
                <textarea id="observations" rows="4"></textarea>
            </div>
            
            <div class="form-group">
                <label for="hr-date">Ciudad y fecha:</label>
                <input type="text" id="hr-date" placeholder="Ej: Bogotá, 13 de Mayo de 2025">
            </div>
            
            <div class="signature-area">
                <p>________________________________</p>
                <p>NOMBRE Y FIRMA DEL JEFE DE PERSONAL O DE CONTRATOS</p>
            </div>
        </div>
        
        <div class="footer">
            <p>LÍNEA GRATUITA NACIONAL 01800917770 - PÁGINA WEB: www.funcionpublica.gov.co</p>
        </div>
    </form>
</body>
</template>

<script setup>

import { reactive, ref, computed, watch } from 'vue'

// 🔷 1. Modelo de experiencia laboral
const experiencias = reactive([
  {
    tipo: ref(''), // 'publica', 'privada', 'independiente'
    ingreso: { dia: '', mes: '', anio: '' },
    retiro:  { dia: '', mes: '', anio: '' }
  },
  { tipo: ref(''), ingreso: { dia: '', mes: '', anio: '' }, retiro: { dia: '', mes: '', anio: '' } },
  { tipo: ref(''), ingreso: { dia: '', mes: '', anio: '' }, retiro: { dia: '', mes: '', anio: '' } },
  { tipo: ref(''), ingreso: { dia: '', mes: '', anio: '' }, retiro: { dia: '', mes: '', anio: '' } }
])

// 🔷 2. Totales por categoría
const publico = reactive({ anios: 0, meses: 0 })
const privado = reactive({ anios: 0, meses: 0 })
const independiente = reactive({ anios: 0, meses: 0 })

// 🔷 3. Función para calcular duración
function calcularDuracion({ ingreso, retiro }) {
  const desde = new Date(`${ingreso.anio}-${ingreso.mes}-${ingreso.dia}`)
  const hasta = new Date(`${retiro.anio}-${retiro.mes}-${retiro.dia}`)

  if (isNaN(desde) || isNaN(hasta) || hasta < desde) return { anios: 0, meses: 0 }

  let anios = hasta.getFullYear() - desde.getFullYear()
  let meses = hasta.getMonth() - desde.getMonth()
  if (hasta.getDate() < desde.getDate()) meses--
  if (meses < 0) {
    anios--
    meses += 12
  }
  return { anios, meses }
}

// 🔷 4. Calcular y actualizar totales
function recalcularTotales() {
  // Reiniciar acumuladores
  publico.anios = publico.meses = 0
  privado.anios = privado.meses = 0
  independiente.anios = independiente.meses = 0

  experiencias.forEach((exp) => {
    const { anios, meses } = calcularDuracion(exp)
    const totalMeses = anios * 12 + meses

    switch (exp.tipo.value) {
      case 'publica':
        const sumaPub = publico.meses + totalMeses
        publico.anios = Math.floor(sumaPub / 12)
        publico.meses = sumaPub % 12
        break
      case 'privada':
        const sumaPriv = privado.meses + totalMeses
        privado.anios = Math.floor(sumaPriv / 12)
        privado.meses = sumaPriv % 12
        break
      case 'independiente':
        const sumaInd = independiente.meses + totalMeses
        independiente.anios = Math.floor(sumaInd / 12)
        independiente.meses = sumaInd % 12
        break
    }
  })
}

// 🔷 5. Calcular total global
const totalAnios = computed(() =>
  publico.anios + privado.anios + independiente.anios +
  Math.floor((publico.meses + privado.meses + independiente.meses) / 12)
)

const totalMeses = computed(() =>
  (publico.meses + privado.meses + independiente.meses) % 12
)

// 🔷 6. Reaccionar a cambios
watch(experiencias, recalcularTotales, { deep: true })

/*import { reactive, computed } from 'vue'

const publico = reactive({ anios: 0, meses: 0 })
const privado = reactive({ anios: 0, meses: 0 })
const independiente = reactive({ anios: 0, meses: 0 })

const totalAnios = computed(() => {
  const sumaMeses = publico.meses + privado.meses + independiente.meses
  const sumaAnios = publico.anios + privado.anios + independiente.anios
  return sumaAnios + Math.floor(sumaMeses / 12)
})

const totalMeses = computed(() => {
  const sumaMeses = publico.meses + privado.meses + independiente.meses
  return sumaMeses % 12
})


import { ref } from 'vue'

const firmaUrl = ref(null)

function mostrarFirma(event) {
  const archivo = event.target.files[0]
  if (archivo && (archivo.type === 'image/jpeg' || archivo.type === 'image/png')) {
    const lector = new FileReader()
    lector.onload = (e) => {
      firmaUrl.value = e.target.result
    }
    lector.readAsDataURL(archivo)
  } else {
    firmaUrl.value = null
  }
}


const ciudad = ref('')
const fecha = ref(null)*/                             /*hasta aqui el script*/


/*const publico     = reactive({ anios: 0, meses: 0 })
const privado     = reactive({ anios: 0, meses: 0 })
const independiente = reactive({ anios: 0, meses: 0 })

const empleos = reactive([
  { ingreso: { dia: '', mes: '', anio: '' }, retiro: { dia: '', mes: '', anio: '' } },
  { ingreso: { dia: '', mes: '', anio: '' }, retiro: { dia: '', mes: '', anio: '' } },
  { ingreso: { dia: '', mes: '', anio: '' }, retiro: { dia: '', mes: '', anio: '' } },
  { ingreso: { dia: '', mes: '', anio: '' }, retiro: { dia: '', mes: '', anio: '' } }
])

function calcularDuracion({ ingreso, retiro }) {
  const inicio = new Date(`${ingreso.anio}-${ingreso.mes}-${ingreso.dia}`)
  const fin = new Date(`${retiro.anio}-${retiro.mes}-${retiro.dia}`)

  if (isNaN(inicio) || isNaN(fin) || fin < inicio) return { anios: 0, meses: 0 }

  let anios = fin.getFullYear() - inicio.getFullYear()
  let meses = fin.getMonth() - inicio.getMonth()

  if (fin.getDate() < inicio.getDate()) meses--
  if (meses < 0) {
    anios--
    meses += 12
  }

  return { anios, meses }
}

const totalAnios = computed(() => {
  let totalMeses = publico.meses + privado.meses + independiente.meses
  let totalAnios = publico.anios + privado.anios + independiente.anios

  empleos.forEach(emp => {
    const duracion = calcularDuracion(emp)
    totalAnios += duracion.anios
    totalMeses += duracion.meses
  })

  return totalAnios + Math.floor(totalMeses / 12)
})

const totalMeses = computed(() => {
  let totalMeses = publico.meses + privado.meses + independiente.meses
  empleos.forEach(emp => {
    const duracion = calcularDuracion(emp)
    totalMeses += duracion.meses
  })
  return totalMeses % 12
})
*/
 

</script>

<style scoped>

        body {
           font-family: Arial, sans-serif;
            margin: 1px;
            padding: 20px;
            font-size: 12px;
        }
        
        .container {
            display: flex;
            justify-content: space-between; /* Distribuye las columnas */
            align-items: flex-start; /* Asegura que se alineen desde arriba */
            gap: 10px; /* Espaciado uniforme entre elementos */
            border: 1px solid #3b3a3a;
            border-radius: 8px;
        }
        
        .image-column, .header, .form-group {
            flex: 1; /* Asegura que cada elemento ocupe un espacio proporcional */
        }
        
         
        .main-section {
            display: flex;
        }
        
               
        .header {
            text-align: center;
       }
        
        .header h2, .header h3, .header p {
            margin: 5px 0;
            color:#333
        }
  
        .form-group label {
            margin-bottom: 4px;
        }
        
        .form-control {
            width: 70%;
            padding: 4px;
            box-sizing: border-box;
            height: 28px;
        }

        .form-control3 {
            width: 30%;
            padding: 4px;
            box-sizing: border-box;
            height: 28px;
        }
        
     
        .imagen {
            width: 100px;
            height: 120px;
            border: 1px solid #ccc;
            display: block; 
            margin: 0 auto;
            border-radius: 8px;
        }
        .section {
            margin-bottom: 20px;
            border: 1px solid #555454;
            padding: 10px;
            gap: 10px;
        }
        .section-title {
            background-color: #f0f0f0;
            padding: 5px;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .section-number {
            display: inline-block;
            width: 20px;
            height: 20px;
            background-color: #333;
            color: white;
            text-align: center;
            border-radius: 50%;
            margin-right: 10px;
        }
        .form-row {
            display: flex;
            flex-wrap: wrap;
            margin:5px;
            outline: 2px solid #808080;
        }
        .form-group {
            margin-right: 5px;
            margin-bottom: 5px;
            flex: 1;
        }
        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 3px;
            font-size: 11px;
        }
        .form-control {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
          
        .form-control1 {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;    
        }

        .form-control2 {
            width: 50%;
            padding: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        .checkbox-group {
            display: flex;
            align-items: left;
            margin-right: 10px;
        }
        .checkbox-group input {
            margin-left: 1px;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10px;
        }
        .table th, .table td {
            border: 1px solid #ccc;
            padding: 1px;
            text-align: center;
        }
        .table th {
            background-color: #f0f0f0;
        }
        .signature-box {
            border: 1px solid #ccc;
            height: 80px;
            margin-top: 10px;
        }
        .col-2 {
            flex: 10 0 10%;
        }
        .col-3 {
            flex: 0 0 31%;
        }
        .col-4 {
            flex: 0 0 23%;
        }
        .text-center {
            text-align: center;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 10px;
        }


</style>
