<script setup>
import { reactive, computed } from 'vue'

// Локальний стан компонента
const state = reactive({
  likes: 0,
  comments: 0,
  shares: 0
})

const total = computed(() => state.likes + state.comments + state.shares)
</script>

<template>
  <div class="state-board">
    <div class="state-board__grid">
      <div class="state-card">
        <p>Лайки</p>
        <strong>{{ state.likes }}</strong>
        <button type="button" class="btn" @click="state.likes++">+1</button>
      </div>

      <div class="state-card">
        <p>Коментарі</p>
        <strong>{{ state.comments }}</strong>
        <button type="button" class="btn" @click="state.comments++">+1</button>
      </div>

      <div class="state-card">
        <p>Поширення</p>
        <strong>{{ state.shares }}</strong>
        <button type="button" class="btn" @click="state.shares++">+1</button>
      </div>
    </div>

    <p class="state-board__total">Усього взаємодій: <strong>{{ total }}</strong></p>

    <button type="button" class="btn btn--ghost" @click="state.likes = 0; state.comments = 0; state.shares = 0">
      Скинути
    </button>
  </div>
</template>
