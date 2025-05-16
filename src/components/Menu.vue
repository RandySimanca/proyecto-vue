<template>
    <div class="menu">
        <h2>Menú</h2>
        <ul>
        <li><router-link to="/Contador">Contador</router-link></li>
        <li><router-link to="/ListaDeTareas">Lista de Tareas</router-link></li>
        </ul>
    </div>

</template>

<script setup>

</script>

<style>
.menu{
    width: 200px;
    background-color: rgb(148, 149, 150);
    padding: 20px;
}

</style>