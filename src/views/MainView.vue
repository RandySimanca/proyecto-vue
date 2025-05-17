<template>
    <div class="container">
        <Sidebar></Sidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>       
  </template>

<script setup>
import Sidebar from '../components/Menu.vue';
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 250px auto;
}
</style>