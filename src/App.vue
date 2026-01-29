<script setup>
// Головний компонент уроку 2: демонструє базовий синтаксис Vue 3
import DirectiveDemo from '@/components/DirectiveDemo.vue'
import PostsPanel from '@/components/PostsPanel.vue'
</script>

<template>
  <main class="page">
    <!-- Демонстрація props і подій між компонентами -->
    <section class="card">
      <h2>Props та події між компонентами</h2>
      <PostsPanel />
    </section>
    <!-- Демонстрація базового синтаксису, директив і виразів -->
    <section class="card">
      <h2>Шаблони, директиви та вирази</h2>
      <DirectiveDemo />
    </section>
  </main>
</template>
