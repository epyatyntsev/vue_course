<script setup>
import { ref } from 'vue'

// Мінімальний приклад: інтерполяція, v-model, v-if, v-for
const name = ref('Vue')
const isVisible = ref(true)
const topics = ['шаблони', 'директиви', 'props', 'події']
</script>

<template>
  <div class="demo">
    <!-- Інтерполяція та вирази -->
    <p class="demo__title">Привіт, {{ name }}!</p>

    <!-- v-model: двостороннє зв'язування -->
    <label class="row">
      Ім'я:
      <input v-model="name" type="text" placeholder="Введіть ім'я" />
    </label>

    <!-- v-if: умовний рендеринг -->
    <button type="button" class="btn" @click="isVisible = !isVisible">
      {{ isVisible ? 'Приховати список' : 'Показати список' }}
    </button>

    <!-- v-for: рендеринг списку -->
    <ul v-if="isVisible" class="list">
      <li v-for="(topic, index) in topics" :key="`${topic}-${index}`">
        {{ index + 1 }}. {{ topic }}
      </li>
    </ul>
  </div>
</template>
