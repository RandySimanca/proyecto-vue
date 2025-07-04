<template>
    <div class="container">
      <Sidebar />
      <div class="content">
        <Header />
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from '@/components/Menu.vue'
  import Header from '@/components/Header.vue'
  </script>
  
  
  <style scoped>
.container {
    display: grid;
    grid-template-columns: 250px auto;
    min-height: 100vh;
  }
.header-bar {
  background: #92cdf5;
  color: #111111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 2px solid #2d08fa;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
  
  </style>
  