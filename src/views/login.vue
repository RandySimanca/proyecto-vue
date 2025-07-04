
<template>
    <div class="login">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <input v-model="usuario" placeholder="Usuario" />
        <input v-model="clave" type="password" placeholder="Contraseña" />
        <button type="submit">Entrar</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const usuario = ref('')
  const clave = ref('')
  const error = ref('')
  const router = useRouter()
  
  function login() {
    const usuarioCorrecto = 'randy'
    const claveCorrecta = '1234'
  
    if (usuario.value === usuarioCorrecto && clave.value === claveCorrecta) {
      localStorage.setItem('auth', 'true')
      localStorage.setItem('usuario', usuario.value)
      router.push('/hojaDeVidaH1')
    } else {
      error.value = 'Usuario o contraseña inválidos'
    }
  }

  localStorage.setItem('usuario', usuario.value)

  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: auto;
    padding: 30px;
    background: #f4f4f4;
    border-radius: 8px;
    margin-top: 80px;
  }
  input {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    padding: 8px;
  }
  button {
    width: 100%;
    padding: 8px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 4px;
  }
  </style>
  

<!--<template>
      <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <input type="text" v-model="username" placeholder="Usuario" />
        <input type="password" v-model="password" placeholder="Contraseña" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const username = ref('')
  const password = ref('')
  
  const handleLogin = () => {
    console.log('Login con:', username.value, password.value)

  }
    // Aquí puedes añadir validación o llamada a API

  
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 80px auto;
    padding: 2rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    text-align: center;
  }
  input {
    display: block;
    width: 100%;
    margin: 12px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>-->
  