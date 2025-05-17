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
                    <h2>FORMATO ÚNICO</h2>
                    <h3>HOJA DE VIDA</h3>
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
                            <td><input type="number" min="0" max="99"></td>
                            <td><input type="number" min="0" max="11"></td>
                        </tr>
                        <tr>
                            <td>EMPLEADO DEL SECTOR PRIVADO</td>
                            <td><input type="number" min="0" max="99"></td>
                            <td><input type="number" min="0" max="11"></td>
                        </tr>
                        <tr>
                            <td>TRABAJADOR INDEPENDIENTE</td>
                            <td><input type="number" min="0" max="99"></td>
                            <td><input type="number" min="0" max="11"></td>
                        </tr>
                        <tr>
                            <td><strong>TOTAL TIEMPO EXPERIENCIA</strong></td>
                            <td><input type="number" min="0" max="99"></td>
                            <td><input type="number" min="0" max="11"></td>
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
                <label for="signing-date">Ciudad y fecha de diligenciamiento:</label>
                <input type="text" id="signing-date" placeholder="Ej: Bogotá, 13 de Mayo de 2025">
            </div>
            
            <div class="signature-area">
                <p>________________________________</p>
                <p>FIRMA DEL SERVIDOR PÚBLICO O CONTRATISTA</p>
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
