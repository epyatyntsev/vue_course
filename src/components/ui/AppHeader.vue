<script setup>
const navItems = [
  { to: '/', label: 'Головна' },
  { to: '/router', label: 'Vue Router' },
]
</script>

<template>
  <header class="app-header">
    <div class="app-header__brand">
      <h1>Vue Course</h1>
      <p>Демо-проєкт для навчальних уроків</p>
    </div>
    <nav class="app-nav">
      <router-link v-for="item in navItems" :key="item.to" class="app-nav__link" :to="item.to">
        {{ item.label }}
      </router-link>
    </nav>
  </header>
</template>
