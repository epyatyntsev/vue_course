<script setup>
import { ref, reactive, computed, watch } from 'vue'

// ref для простих значень
const username = ref('Гість')
const newSkill = ref('')

// reactive для об'єкта стану
const profile = reactive({
  firstName: 'Іван',
  lastName: 'Коваль',
  role: 'студент',
  online: true,
})

// computed на основі реактивних даних
const fullName = computed(() => `${profile.firstName} ${profile.lastName}`)
const greeting = computed(() => `Привіт, ${username.value}! (профіль: ${fullName.value})`)

// список навичок як ref-масив
const skills = ref(['HTML', 'CSS'])

// watch: реагуємо на зміни ролі
const log = ref([])
watch(
  () => profile.role,
  (next, prev) => {
    log.value.unshift(`Роль змінено: ${prev} → ${next}`)
  },
)

const addSkill = () => {
  const value = newSkill.value.trim()
  if (!value) return
  skills.value.push(value)
  newSkill.value = ''
}
</script>

<template>
  <div class="demo">
    <p class="demo__title">{{ greeting }}</p>

    <div class="grid-2">
      <div class="field">
        <label>Ім'я користувача</label>
        <input v-model="username" type="text" class="input" />
      </div>

      <div class="field">
        <label>Ім'я (profile.firstName)</label>
        <input v-model="profile.firstName" type="text" class="input" />
      </div>

      <div class="field">
        <label>Прізвище (profile.lastName)</label>
        <input v-model="profile.lastName" type="text" class="input" />
      </div>

      <div class="field">
        <label>Роль</label>
        <select v-model="profile.role" class="input">
          <option value="студент">студент</option>
          <option value="ментор">ментор</option>
          <option value="адмін">адмін</option>
        </select>
      </div>
    </div>

    <div class="row">
      <button type="button" class="btn" @click="profile.online = !profile.online">
        {{ profile.online ? 'Вимкнути онлайн' : 'Увімкнути онлайн' }}
      </button>
      <span class="badge">Статус: {{ profile.online ? 'онлайн' : 'офлайн' }}</span>
    </div>

    <div class="field">
      <label>Додати навичку</label>
      <div class="row">
        <input v-model="newSkill" type="text" class="input" />
        <button
          type="button"
          class="btn"
          :disabled="!newSkill.trim()"
          @click="addSkill"
        >
          Додати
        </button>
      </div>
    </div>

    <ul class="list">
      <li v-for="(skill, index) in skills" :key="`${skill}-${index}`">
        {{ index + 1 }}. {{ skill }}
      </li>
    </ul>

    <div class="log" v-if="log.length">
      <p class="log__title">Журнал змін ролі</p>
      <ul>
        <li v-for="(item, index) in log" :key="`log-${index}`">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
