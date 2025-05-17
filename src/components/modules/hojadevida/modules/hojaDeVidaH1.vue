<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formato Único Hoja de Vida - Persona Natural</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
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
        
        <!-- SECCIÓN 1: DATOS PERSONALES -->
        <div class="section">
            <div class="section-title">
                <span class="section-number">1</span> DATOS PERSONALES
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="primer-apellido">PRIMER APELLIDO</label>
                    <input type="text" id="primer-apellido" class="form-control">
                </div>
                <div class="form-group">
                    <label for="segundo-apellido">SEGUNDO APELLIDO (O DE CASADA)</label>
                    <input type="text" id="segundo-apellido" class="form-control">
                </div>
                <div class="form-group">
                    <label for="nombres">NOMBRES</label>
                    <input type="text" id="nombres" class="form-control">
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group col-2">
                    <label>DOCUMENTO DE IDENTIFICACIÓN</label>
                    <div style="display: flex; margin-top: 3px;">
                        <div class="checkbox-group">
                            <input type="radio" id="cc" name="tipo-documento" value="cc">
                            <label for="cc">C.C</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="radio" id="ce" name="tipo-documento" value="ce">
                            <label for="ce">C.E</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="radio" id="pas" name="tipo-documento" value="pas">
                            <label for="pas">PAS</label>
                        </div>
                        <div class="form-group" style="margin-left: 5px;">
                            <input type="text" id="num-documento" class="form-control1" placeholder="No.">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>SEXO</label>
                    <div style="display: flex; margin-top: 3px;">
                        <div class="checkbox-group">
                            <input type="radio" id="sexo-f" name="sexo" value="F">
                            <label for="sexo-f">F</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="radio" id="sexo-m" name="sexo" value="M">
                            <label for="sexo-m">M</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>NACIONALIDAD</label>
                    <div style="display: flex; margin-top: 3px;">
                        <div class="checkbox-group">
                            <input type="radio" id="nac-col" name="nacionalidad" value="col">
                            <label for="nac-col">COL.</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="radio" id="nac-ext" name="nacionalidad" value="ext">
                            <label for="nac-ext">EXTRANJERO</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-group col-4">
                    <label for="pais">PAÍS</label>
                    <input type="text" id="pais" class="form-control">
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group col-2">
                    <label>LIBRETA MILITAR</label>
                    <div style="display: flex; margin-top: 3px;">
                        <div class="checkbox-group">
                            <input type="radio" id="primera-clase" name="libreta-militar" value="primera">
                            <label for="primera-clase">PRIMERA CLASE</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="radio" id="segunda-clase" name="libreta-militar" value="segunda">
                            <label for="segunda-clase">SEGUNDA CLASE</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-group col-2">
                    <label for="numero-libreta">NÚMERO</label>
                    <input type="text" id="numero-libreta" class="form-control2" placeholder="No.">
                </div>
                
                <div class="form-group col-4">
                    <label for="dm">D.M</label>
                    <input type="text" id="dm" class="form-control2">
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group col-2">
                    <label>FECHA Y LUGAR DE NACIMIENTO</label>
                    <div style="display: flex; margin-top: 3px;">
                        <div class="form-group" style="width: 30px; margin-right: 5px;">
                            <label for="dia-nac">DÍA</label>
                            <input type="text" id="dia-nac" class="form-control">
                        </div>
                        <div class="form-group" style="width: 30px; margin-right: 5px;">
                            <label for="mes-nac">MES</label>
                            <input type="text" id="mes-nac" class="form-control">
                        </div>
                        <div class="form-group" style="width: 60px;">
                            <label for="ano-nac">AÑO</label>
                            <input type="text" id="ano-nac" class="form-control">
                        </div>
                    </div>
                </div>
                
                <div class="form-group col-2">
                    <label for="pais-nac">PAÍS</label>
                    <input type="text" id="pais-nac" class="form-control">
                </div>
                
                <div class="form-group col-2">
                    <label for="depto-nac">DEPTO</label>
                    <input type="text" id="depto-nac" class="form-control">
                </div>
                
                <div class="form-group col-2">
                    <label for="municipio-nac">MUNICIPIO</label>
                    <input type="text" id="municipio-nac" class="form-control">
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group col-2">
                    <label for="dir-corr">DIRECCIÓN DE CORRESPONDENCIA</label>
                    <input type="text" id="dir-corr" class="form-control">
                </div>
                
                <div class="form-group col-2">
                    <label for="pais-corr">PAÍS</label>
                    <input type="text" id="pais-corr" class="form-control">
                </div>
                
                <div class="form-group col-2">
                    <label for="depto-corr">DEPTO</label>
                    <input type="text" id="depto-corr" class="form-control">
                </div>
                
                <div class="form-group col-2">
                    <label for="municipio-corr">MUNICIPIO</label>
                    <input type="text" id="municipio-corr" class="form-control">
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group col-2">
                    <label for="direccion-corr">DIRECCIÓN</label>
                    <input type="text" id="direccion-corr" class="form-control">
                </div>
                
                <div class="form-group col-2">
                    <label for="telefono">TELÉFONO</label>
                    <input type="text" id="telefono" class="form-control">
                </div>
                
                <div class="form-group col-2">
                    <label for="email">EMAIL</label>
                    <input type="email" id="email" class="form-control">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group" style="width: 100%;">
                    <label>ESPECÍFIQUE LOS IDIOMAS DIFERENTES AL ESPAÑOL QUE: HABLA, LEE, ESCRIBE DE FORMA, REGULAR (R), BIEN (B) O MUY BIEN (MB)</label>
                    <table class="table">
                        <thead>
                            <tr>
                                <th rowspan="2">IDIOMA</th>
                                <th colspan="3">LO HABLA</th>
                                <th colspan="3">LO LEE</th>
                                <th colspan="3">LO ESCRIBE</th>
                            </tr>
                            <tr>
                                <th>R</th>
                                <th>B</th>
                                <th>MB</th>
                                <th>R</th>
                                <th>B</th>
                                <th>MB</th>
                                <th>R</th>
                                <th>B</th>
                                <th>MB</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" class="form-control" style="border: none;"></td>
                                <!-- Grupo "Lo habla" -->
                                <td><input type="radio" name="habla-1"></td>
                                <td><input type="radio" name="habla-1"></td>
                                <td><input type="radio" name="habla-1"></td>
                                <!-- Grupo "Lo lee" -->
                                <td><input type="radio" name="lee-1"></td>
                                <td><input type="radio" name="lee-1"></td>
                                <td><input type="radio" name="lee-1"></td>
                                <!-- Grupo "Lo escribe" -->
                                <td><input type="radio" name="escribe-1"></td>
                                <td><input type="radio" name="escribe-1"></td>
                                <td><input type="radio" name="escribe-1"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="form-control" style="border: none;"></td>
                                <!-- Segundo grupo "Lo habla" -->
                                <td><input type="radio" name="habla-2"></td>
                                <td><input type="radio" name="habla-2"></td>
                                <td><input type="radio" name="habla-2"></td>
                                <!-- Segundo grupo "Lo lee" -->
                                <td><input type="radio" name="lee-2"></td>
                                <td><input type="radio" name="lee-2"></td>
                                <td><input type="radio" name="lee-2"></td>
                                <!-- Segundo grupo "Lo escribe" -->
                                <td><input type="radio" name="escribe-2"></td>
                                <td><input type="radio" name="escribe-2"></td>
                                <td><input type="radio" name="escribe-2"></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>

        <!-- SECCIÓN 2: FORMACIÓN ACADÉMICA -->
        <div class="section">
            <div class="section-title">
                <span class="section-number">2</span> FORMACIÓN ACADÉMICA
            </div>
            
            <div class="form-group">
                <label>EDUCACIÓN BÁSICA Y MEDIA</label>
                <p>MARQUE CON UNA X EL ÚLTIMO GRADO APROBADO (LOS GRADOS DE 1o. A 6o. DE BACHILLERATO EQUIVALEN A LOS GRADOS 6o. A 11o. DE EDUCACIÓN BÁSICA SECUNDARIA Y MEDIA)</p>
                
                <div style="display: flex; margin-top: 10px;">
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-1" name="grado" value="1">
                        <label for="grado-1">1o.</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-2" name="grado" value="2">
                        <label for="grado-2">2o.</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-3" name="grado" value="3">
                        <label for="grado-3">3o.</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-4" name="grado" value="4">
                        <label for="grado-4">4o.</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-5" name="grado" value="5">
                        <label for="grado-5">5o.</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-6" name="grado" value="6">
                        <label for="grado-6">6o.</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-7" name="grado" value="7">
                        <label for="grado-7">7o.</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-8" name="grado" value="8">
                        <label for="grado-8">8o.</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-9" name="grado" value="9">
                        <label for="grado-9">9o.</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-10" name="grado" value="10">
                        <label for="grado-10">10</label>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="grado-11" name="grado" value="11">
                        <label for="grado-11">11</label>
                    </div>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group col-2">
                    <label>EDUCACIÓN BÁSICA</label>
                    <div style="display: flex; margin-top: 5px;">
                        <div class="checkbox-group">
                            <input type="radio" id="primaria" name="educacion-basica" value="primaria">
                            <label for="primaria">PRIMARIA</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="radio" id="secundaria" name="educacion-basica" value="secundaria">
                            <label for="secundaria">SECUNDARIA</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="radio" id="media" name="educacion-basica" value="media">
                            <label for="media">MEDIA</label>
                        </div>
                    </div>
                </div>
                
                <div class="form-group col-2">
                    <label for="titulo-bachiller">TÍTULO OBTENIDO:</label>
                    <input type="text" id="titulo-bachiller" class="form-control">
                </div>
                
                <div class="form-group col-2">
                    <label>FECHA DE GRADO</label>
                    <div style="display: flex; margin-top: 5px;">
                        <div class="form-group" style="width: 60px; margin-right: 5px;">
                            <label for="mes-grado">MES</label>
                            <input type="text" id="mes-grado" class="form-control">
                        </div>
                        <div class="form-group" style="width: 60px;">
                            <label for="ano-grado">AÑO</label>
                            <input type="text" id="ano-grado" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label>EDUCACION SUPERIOR (PREGRADO Y POSTGRADO)</label>
                <p>DILIGENCIE ESTE PUNTO EN ESTRICTO ORDEN CRONOLÓGICO, EN MODALIDAD ACADÉMICA ESCRIBA:
                TC (TÉCNICA), TL (TECNOLÓGICA), TE (TECNOLÓGICA ESPECIALIZADA), UN (UNIVERSITARIA),
                ES (ESPECIALIZACIÓN), MG (MAESTRÍA O MAGISTER), DOC (DOCTORADO O PHD),
                RELACIONE AL FRENTE EL NÚMERO DE LA TARJETA PROFESIONAL (SI ÉSTA HA SIDO PREVISTA EN UNA LEY).</p>
                
                <table class="table">
                    <thead>
                        <tr>
                            <th>MODALIDAD ACADÉMICA</th>
                            <th>No. SEMESTRES APROBADOS</th>
                            <th colspan="2">GRADUADO</th>
                            <th>NOMBRE DE LOS ESTUDIOS O TÍTULO OBTENIDO</th>
                            <th colspan="2">TERMINACIÓN</th>
                            <th>No. DE TARJETA PROFESIONAL</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>SI</th>
                            <th>NO</th>
                            <th></th>
                            <th>MES</th>
                            <th>AÑO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="checkbox" name="graduado-si-1"></td>
                            <td><input type="checkbox" name="graduado-no-1"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="checkbox" name="graduado-si-2"></td>
                            <td><input type="checkbox" name="graduado-no-2"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="checkbox" name="graduado-si-3"></td>
                            <td><input type="checkbox" name="graduado-no-3"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                            <td><input type="text" class="form-control" style="border: none;"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</body>        
</template>

<script setup>

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
