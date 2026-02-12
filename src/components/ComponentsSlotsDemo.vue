<script setup>
import { ref } from 'vue'
import LessonStat from '@/components/LessonStat.vue'
import SlotCard from '@/components/SlotCard.vue'
import UserList from '@/components/UserList.vue'

const featured = ref({
  title: 'Компоненти у Vue',
  desc: 'Компонент — це ізольований блок з власним шаблоном та станом.',
  level: 'starter'
})

const tips = ref([
  'Виносьте повторювані блоки у компоненти.',
  'Слоти дозволяють гнучко компонувати вміст.',
  'Скопи слоти передають дані з дитини в шаблон батька.'
])

const users = ref([
  { id: 1, name: 'Олена', role: 'ментор', active: true },
  { id: 2, name: 'Максим', role: 'студент', active: false },
  { id: 3, name: 'Ірина', role: 'студент', active: true }
])

const highlight = ref(true)
</script>

<template>
  <div class="demo">
    <div class="grid-2">
      <LessonStat label="Компонентів в уроці" :value="4" />
      <LessonStat label="Типів слотів" value="default + named + scoped" />
    </div>

    <SlotCard title="Базова картка" tone="info">
      <p>{{ featured.desc }}</p>
      <p class="note">Показ прикладу default slot.</p>
      <template #footer>
        <span class="slot-card__hint">Рівень: {{ featured.level }}</span>
      </template>
    </SlotCard>

    <SlotCard tone="accent">
      <template #title>
        <div class="slot-card__title-row">
          <h3 class="slot-card__title">{{ featured.title }}</h3>
          <span class="pill" :class="highlight ? 'pill--on' : 'pill--off'">
            {{ highlight ? 'активно' : 'пауза' }}
          </span>
        </div>
      </template>

      <ul class="list">
        <li v-for="(tip, index) in tips" :key="`tip-${index}`">
          {{ tip }}
        </li>
      </ul>

      <template #actions>
        <button type="button" class="btn btn--ghost" @click="highlight = !highlight">
          Перемкнути стан
        </button>
      </template>

      <template #footer>
        <button type="button" class="btn">Додати приклад</button>
      </template>
    </SlotCard>

    <SlotCard title="Скопи-слоти" tone="neutral">
      <UserList :users="users">
        <template #item="{ user, index }">
          <div class="user-list__custom">
            <span class="badge">#{{ index + 1 }}</span>
            <div>
              <strong>{{ user.name }}</strong>
              <p class="user-list__meta">Роль: {{ user.role }}</p>
            </div>
            <span class="pill" :class="user.active ? 'pill--on' : 'pill--off'">
              {{ user.active ? 'онлайн' : 'офлайн' }}
            </span>
          </div>
        </template>

        <template #empty>
          <p class="note">Список порожній. Додайте користувачів.</p>
        </template>
      </UserList>
    </SlotCard>
  </div>
</template>
