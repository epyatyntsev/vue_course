<script setup>
// Головний компонент курсу: попередні уроки + новий урок 3
import DirectiveDemo from '@/components/DirectiveDemo.vue'
import PostsPanel from '@/components/PostsPanel.vue'
import RefReactiveDemo from '@/components/RefReactiveDemo.vue'
import StateBoard from '@/components/StateBoard.vue'
</script>

<template>
  <main class="page">
    <section class="card">
      <h2>ref та reactive</h2>
      <RefReactiveDemo />
    </section>

    <section class="card">
      <h2>Стан компонентів</h2>
      <StateBoard />
    </section>

    <section class="card">
      <h2>Props та події між компонентами</h2>
      <PostsPanel />
    </section>

    <section class="card">
      <h2>Шаблони, директиви та вирази</h2>
      <DirectiveDemo />
    </section>
  </main>
</template>
