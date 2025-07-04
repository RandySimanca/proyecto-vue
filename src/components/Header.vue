<template>
    <div class="header-bar">
      <span>👋 Hola, {{ nombreUsuario }}</span>
      <button @click="logout">Cerrar sesión</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const nombreUsuario = ref('')
  
  onMounted(() => {
    nombreUsuario.value = localStorage.getItem('usuario') || 'Invitado'
  })
  
  function logout() {
    localStorage.clear()
    router.push('/login')
  }
  </script>
  
  <style scoped>
  .header-bar {
    background-color: #242424;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    background-color: crimson;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  