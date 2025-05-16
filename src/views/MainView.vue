<template>
    <div class="container">
        <Menu></Menu>
        <div class="content">
            <router-view></router-view>

        </div>

    </div>

</template>

<script setup>
import Menu from '../components/Menu.vue';

</script>

<style scoped>
.comntainer {
    display: flex;
}
.content {
    flex: 1;
    padding: 20px;
}

</style>