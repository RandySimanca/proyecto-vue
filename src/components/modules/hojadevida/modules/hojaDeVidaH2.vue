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
            
            <!-- SECCIÓN 1: DATOS PERSONALES -->
         <div class="section">
                <div class="section-title">
                    <span class="section-number">3</span> EXPERIENCIA LABORAL
                </div>
                
                <div class="form-group">
                    <p>RELACIONE SU EXPERIENCIA LABORAL O DE PRESTACIÓN DE SERVICIOS EN ESTRICTO ORDEN CRONOLÓGICO COMENZANDO POR EL ACTUAL.</p>
                </div>
                
                <div class="form-group">
                    <label>EMPLEO ACTUAL O CONTRATO VIGENTE</label>
                    
                    <div style="display: flex; margin-top: 3px;">
                                       
                        <div class="form-group col-2">
                            <label for="cc">EMPRESA O ENTIDAD</label>
                        <input type="text" id="empresa-actual" class="form-control">                           
                        </div>

                        <div class="checkbox-group">
                            <label for="cc">PUBLICA</label>
                            <input type="radio" id="cc" name="tipo-documento" value="cc">
                        </div>

                        <div class="checkbox-group">
                            <label for="cc">PRIVADA</label>
                            <input type="radio" id="cc" name="tipo-documento" value="cc">
                        </div>

                        <div class="form-group col-2">
                            <label for="pais-actual">PAÍS</label>
                            <input type="text" id="pais-actual" class="form-control">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group col-2">
                            <label for="depto-actual">DEPARTAMENTO</label>
                            <input type="text" id="depto-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label for="municipio-actual">MUNICIPIO</label>
                            <input type="text" id="municipio-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label for="email-actual">CORREO ELECTRÓNICO ENTIDAD</label>
                            <input type="email" id="email-actual" class="form-control">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group col-2">
                            <label for="telefonos-actual">TELÉFONOS</label>
                            <input type="text" id="telefonos-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label>FECHA DE INGRESO</label>
                            <div style="display: flex;">
                                <div class="form-group" style="width: 30px; margin-right: 5px;">
                                    <label for="dia-ingreso-actual">DÍA</label>
                                    <input type="text" id="dia-ingreso-actual" class="form-control">
                                </div>
                                <div class="form-group" style="width: 30px; margin-right: 5px;">
                                    <label for="mes-ingreso-actual">MES</label>
                                    <input type="text" id="mes-ingreso-actual" class="form-control">
                                </div>
                                <div class="form-group" style="width: 60px;">
                                    <label for="ano-ingreso-actual">AÑO</label>
                                    <input type="text" id="ano-ingreso-actual" class="form-control">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group col-2">
                            <label>FECHA DE RETIRO</label>
                            <div style="display: flex;">
                                <div class="form-group" style="width: 30px; margin-right: 5px;">
                                    <label for="dia-retiro-actual">DÍA</label>
                                    <input type="text" id="dia-retiro-actual" class="form-control">
                                </div>
                                <div class="form-group" style="width: 30px; margin-right: 5px;">
                                    <label for="mes-retiro-actual">MES</label>
                                    <input type="text" id="mes-retiro-actual" class="form-control">
                                </div>
                                <div class="form-group" style="width: 60px;">
                                    <label for="ano-retiro-actual">AÑO</label>
                                    <input type="text" id="ano-retiro-actual" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group col-2">
                            <label for="cargo-actual">CARGO O CONTRATO ACTUAL</label>
                            <input type="text" id="cargo-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label for="dependencia-actual">DEPENDENCIA</label>
                            <input type="text" id="dependencia-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label for="direccion-actual">DIRECCIÓN</label>
                            <input type="text" id="direccion-actual" class="form-control">
                        </div>
                    </div>
                </div>
             </div>
            
             <!-- EMPLEO ANTERIOR 1 -->
             <div class="section">
                               
                <div class="form-group">
                    <label>EMPLEO ACTUAL O CONTRATO ANTERIOR</label>
                    
                    <div style="display: flex; margin-top: 3px;">
                                       
                        <div class="form-group col-2">
                            <label for="cc">EMPRESA O ENTIDAD</label>
                        <input type="text" id="empresa-actual" class="form-control">                           
                        </div>

                        <div class="checkbox-group">
                            <label for="cc">PUBLICA</label>
                            <input type="radio" id="cc" name="tipo-documento" value="cc">
                        </div>

                        <div class="checkbox-group">
                            <label for="cc">PRIVADA</label>
                            <input type="radio" id="cc" name="tipo-documento" value="cc">
                        </div>

                        <div class="form-group col-2">
                            <label for="pais-actual">PAÍS</label>
                            <input type="text" id="pais-actual" class="form-control">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group col-2">
                            <label for="depto-actual">DEPARTAMENTO</label>
                            <input type="text" id="depto-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label for="municipio-actual">MUNICIPIO</label>
                            <input type="text" id="municipio-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label for="email-actual">CORREO ELECTRÓNICO ENTIDAD</label>
                            <input type="email" id="email-actual" class="form-control">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group col-2">
                            <label for="telefonos-actual">TELÉFONOS</label>
                            <input type="text" id="telefonos-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label>FECHA DE INGRESO</label>
                            <div style="display: flex;">
                                <div class="form-group" style="width: 30px; margin-right: 5px;">
                                    <label for="dia-ingreso-actual">DÍA</label>
                                    <input type="text" id="dia-ingreso-actual" class="form-control">
                                </div>
                                <div class="form-group" style="width: 30px; margin-right: 5px;">
                                    <label for="mes-ingreso-actual">MES</label>
                                    <input type="text" id="mes-ingreso-actual" class="form-control">
                                </div>
                                <div class="form-group" style="width: 60px;">
                                    <label for="ano-ingreso-actual">AÑO</label>
                                    <input type="text" id="ano-ingreso-actual" class="form-control">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group col-2">
                            <label>FECHA DE RETIRO</label>
                            <div style="display: flex;">
                                <div class="form-group" style="width: 30px; margin-right: 5px;">
                                    <label for="dia-retiro-actual">DÍA</label>
                                    <input type="text" id="dia-retiro-actual" class="form-control">
                                </div>
                                <div class="form-group" style="width: 30px; margin-right: 5px;">
                                    <label for="mes-retiro-actual">MES</label>
                                    <input type="text" id="mes-retiro-actual" class="form-control">
                                </div>
                                <div class="form-group" style="width: 60px;">
                                    <label for="ano-retiro-actual">AÑO</label>
                                    <input type="text" id="ano-retiro-actual" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group col-2">
                            <label for="cargo-actual">CARGO O CONTRATO ACTUAL</label>
                            <input type="text" id="cargo-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label for="dependencia-actual">DEPENDENCIA</label>
                            <input type="text" id="dependencia-actual" class="form-control">
                        </div>
                        
                        <div class="form-group col-2">
                            <label for="direccion-actual">DIRECCIÓN</label>
                            <input type="text" id="direccion-actual" class="form-control">
                        </div>
                    </div>
                </div>
             </div>
            
             <!-- EMPLEO ANTERIOR 2 -->
             <div class="section">
                               
                               <div class="form-group">
                                   <label>EMPLEO ACTUAL O CONTRATO ANTERIOR</label>
                                   
                                   <div style="display: flex; margin-top: 3px;">
                                                      
                                       <div class="form-group col-2">
                                           <label for="cc">EMPRESA O ENTIDAD</label>
                                       <input type="text" id="empresa-actual" class="form-control">                           
                                       </div>
               
                                       <div class="checkbox-group">
                                           <label for="cc">PUBLICA</label>
                                           <input type="radio" id="cc" name="tipo-documento" value="cc">
                                       </div>
               
                                       <div class="checkbox-group">
                                           <label for="cc">PRIVADA</label>
                                           <input type="radio" id="cc" name="tipo-documento" value="cc">
                                       </div>
               
                                       <div class="form-group col-2">
                                           <label for="pais-actual">PAÍS</label>
                                           <input type="text" id="pais-actual" class="form-control">
                                       </div>
                                   </div>
                                   
                                   <div class="form-row">
                                       <div class="form-group col-2">
                                           <label for="depto-actual">DEPARTAMENTO</label>
                                           <input type="text" id="depto-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label for="municipio-actual">MUNICIPIO</label>
                                           <input type="text" id="municipio-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label for="email-actual">CORREO ELECTRÓNICO ENTIDAD</label>
                                           <input type="email" id="email-actual" class="form-control">
                                       </div>
                                   </div>
                                   
                                   <div class="form-row">
                                       <div class="form-group col-2">
                                           <label for="telefonos-actual">TELÉFONOS</label>
                                           <input type="text" id="telefonos-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label>FECHA DE INGRESO</label>
                                           <div style="display: flex;">
                                               <div class="form-group" style="width: 30px; margin-right: 5px;">
                                                   <label for="dia-ingreso-actual">DÍA</label>
                                                   <input type="text" id="dia-ingreso-actual" class="form-control">
                                               </div>
                                               <div class="form-group" style="width: 30px; margin-right: 5px;">
                                                   <label for="mes-ingreso-actual">MES</label>
                                                   <input type="text" id="mes-ingreso-actual" class="form-control">
                                               </div>
                                               <div class="form-group" style="width: 60px;">
                                                   <label for="ano-ingreso-actual">AÑO</label>
                                                   <input type="text" id="ano-ingreso-actual" class="form-control">
                                               </div>
                                           </div>
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label>FECHA DE RETIRO</label>
                                           <div style="display: flex;">
                                               <div class="form-group" style="width: 30px; margin-right: 5px;">
                                                   <label for="dia-retiro-actual">DÍA</label>
                                                   <input type="text" id="dia-retiro-actual" class="form-control">
                                               </div>
                                               <div class="form-group" style="width: 30px; margin-right: 5px;">
                                                   <label for="mes-retiro-actual">MES</label>
                                                   <input type="text" id="mes-retiro-actual" class="form-control">
                                               </div>
                                               <div class="form-group" style="width: 60px;">
                                                   <label for="ano-retiro-actual">AÑO</label>
                                                   <input type="text" id="ano-retiro-actual" class="form-control">
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   
                                   <div class="form-row">
                                       <div class="form-group col-2">
                                           <label for="cargo-actual">CARGO O CONTRATO ACTUAL</label>
                                           <input type="text" id="cargo-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label for="dependencia-actual">DEPENDENCIA</label>
                                           <input type="text" id="dependencia-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label for="direccion-actual">DIRECCIÓN</label>
                                           <input type="text" id="direccion-actual" class="form-control">
                                       </div>
                                   </div>
                               </div>
                            </div>

             <!-- EMPLEO ANTERIOR 3 -->
             <div class="section">
                               
                               <div class="form-group">
                                   <label>EMPLEO ACTUAL O CONTRATO ANTERIOR</label>
                                   
                                   <div style="display: flex; margin-top: 3px;">
                                                      
                                       <div class="form-group col-2">
                                           <label for="cc">EMPRESA O ENTIDAD</label>
                                       <input type="text" id="empresa-actual" class="form-control">                           
                                       </div>
               
                                       <div class="checkbox-group">
                                           <label for="cc">PUBLICA</label>
                                           <input type="radio" id="cc" name="tipo-documento" value="cc">
                                       </div>
               
                                       <div class="checkbox-group">
                                           <label for="cc">PRIVADA</label>
                                           <input type="radio" id="cc" name="tipo-documento" value="cc">
                                       </div>
               
                                       <div class="form-group col-2">
                                           <label for="pais-actual">PAÍS</label>
                                           <input type="text" id="pais-actual" class="form-control">
                                       </div>
                                   </div>
                                   
                                   <div class="form-row">
                                       <div class="form-group col-2">
                                           <label for="depto-actual">DEPARTAMENTO</label>
                                           <input type="text" id="depto-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label for="municipio-actual">MUNICIPIO</label>
                                           <input type="text" id="municipio-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label for="email-actual">CORREO ELECTRÓNICO ENTIDAD</label>
                                           <input type="email" id="email-actual" class="form-control">
                                       </div>
                                   </div>
                                   
                                   <div class="form-row">
                                       <div class="form-group col-2">
                                           <label for="telefonos-actual">TELÉFONOS</label>
                                           <input type="text" id="telefonos-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label>FECHA DE INGRESO</label>
                                           <div style="display: flex;">
                                               <div class="form-group" style="width: 30px; margin-right: 5px;">
                                                   <label for="dia-ingreso-actual">DÍA</label>
                                                   <input type="text" id="dia-ingreso-actual" class="form-control">
                                               </div>
                                               <div class="form-group" style="width: 30px; margin-right: 5px;">
                                                   <label for="mes-ingreso-actual">MES</label>
                                                   <input type="text" id="mes-ingreso-actual" class="form-control">
                                               </div>
                                               <div class="form-group" style="width: 60px;">
                                                   <label for="ano-ingreso-actual">AÑO</label>
                                                   <input type="text" id="ano-ingreso-actual" class="form-control">
                                               </div>
                                           </div>
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label>FECHA DE RETIRO</label>
                                           <div style="display: flex;">
                                               <div class="form-group" style="width: 30px; margin-right: 5px;">
                                                   <label for="dia-retiro-actual">DÍA</label>
                                                   <input type="text" id="dia-retiro-actual" class="form-control">
                                               </div>
                                               <div class="form-group" style="width: 30px; margin-right: 5px;">
                                                   <label for="mes-retiro-actual">MES</label>
                                                   <input type="text" id="mes-retiro-actual" class="form-control">
                                               </div>
                                               <div class="form-group" style="width: 60px;">
                                                   <label for="ano-retiro-actual">AÑO</label>
                                                   <input type="text" id="ano-retiro-actual" class="form-control">
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   
                                   <div class="form-row">
                                       <div class="form-group col-2">
                                           <label for="cargo-actual">CARGO O CONTRATO ACTUAL</label>
                                           <input type="text" id="cargo-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label for="dependencia-actual">DEPENDENCIA</label>
                                           <input type="text" id="dependencia-actual" class="form-control">
                                       </div>
                                       
                                       <div class="form-group col-2">
                                           <label for="direccion-actual">DIRECCIÓN</label>
                                           <input type="text" id="direccion-actual" class="form-control">
                                       </div>
                                   </div>
                               </div>
                            </div>
    </form>
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
