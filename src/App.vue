<script setup>
import { useRoute} from 'vue-router'
const route = useRoute();
</script>
<template>
  <nav class="navbar">
    <router-link to="/" :class="{'active': route.name === 'home'}" >Home</router-link>
    <router-link to="/count" :class="{'active': route.name === 'count'}">Count</router-link>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<style>
@import "assets/style.css";
</style>
		
		
