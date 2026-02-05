<script setup>
import { ref } from 'vue'

const counter = ref(0)
const step = ref(1)

const preview = ref('')
const name = ref('')
const email = ref('')

const log = ref([])

const pushLog = (text) => {
  log.value.unshift(text)
}

const increment = () => {
  counter.value += step.value
  pushLog(`Лічильник: +${step.value}`)
}

const decrement = () => {
  counter.value -= step.value
  pushLog(`Лічильник: -${step.value}`)
}

const reset = () => {
  counter.value = 0
  pushLog('Лічильник: скидання')
}

const handlePreviewInput = (event) => {
  preview.value = event.target.value
}

const addQuickNote = () => {
  const text = preview.value.trim()
  if (!text) return
  pushLog(`Нотатка: ${text}`)
  preview.value = ''
}

const submitForm = () => {
  if (!name.value || !email.value) {
    pushLog('Форма: заповніть імʼя та email')
    return
  }

  pushLog(`Форма: ${name.value} (${email.value})`)
  name.value = ''
  email.value = ''
}
</script>

<template>
  <div class="demo">
    <div class="row">
      <strong>Лічильник:</strong>
      <span class="badge">{{ counter }}</span>
    </div>

    <div class="row">
      <label>Крок</label>
      <input v-model.number="step" type="number" min="1" class="input" />
    </div>

    <div class="row">
      <button type="button" class="btn" @click="increment">Додати</button>
      <button type="button" class="btn btn--ghost" @click="decrement">Відняти</button>
      <button type="button" class="btn btn--ghost" @click="reset">Скинути</button>
    </div>

    <div class="grid-2">
      <div class="field">
        <label>Попередній перегляд (через @input)</label>
        <input
          :value="preview"
          type="text"
          class="input"
          placeholder="Введіть нотатку і натисніть Enter"
          @input="handlePreviewInput"
          @keyup.enter="addQuickNote"
        />
      </div>

      <div class="field">
        <label>Попередній перегляд</label>
        <div class="badge">{{ preview || 'Поки що порожньо' }}</div>
      </div>
    </div>

    <form class="grid-2" @submit.prevent="submitForm">
      <div class="field">
        <label>Ім'я</label>
        <input v-model.lazy="name" type="text" class="input" />
      </div>

      <div class="field">
        <label>Email</label>
        <input v-model.lazy="email" type="email" class="input" />
      </div>

      <button type="submit" class="btn">Надіслати форму</button>
    </form>

    <p class="note">Поточні значення моделі: "{{ name }}" / "{{ email }}"</p>

    <div class="log" v-if="log.length">
      <p class="log__title">Журнал подій</p>
      <ul>
        <li v-for="(item, index) in log" :key="`log-${index}`">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
