# Урок 9. Розгортання та оптимізація

Ціль уроку — підготувати застосунок до продакшена, розгорнути його на GitHub Pages і розібрати базові техніки оптимізації.

## План уроку

1) Збірка проєкту для продакшена.
2) Перевірка продакшен-збірки локально.
3) Розгортання на GitHub Pages.
4) Оптимізація продуктивності (код, рендер, ресурси).
5) Міні-практика.

## Розгортання

### 1) Збірка

```sh
npm run build
```

У результаті з’явиться папка `dist/` — готовий статичний сайт.

### 2) Перевірка локально

```sh
npm run preview
```

### 3) GitHub Pages

У `vite.config.js` вже додано `base` для GitHub Pages:

```js
const repoName = 'vue_course'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? `/${repoName}/` : '/',
  // ...
}))
```

Якщо назва репозиторію інша — замініть `repoName`.

Далі:

```sh
npm install
npm run deploy
```

Що відбувається:

- `predeploy` запускає `npm run build`.
- `deploy` публікує папку `dist/` у гілку `gh-pages`.

Після цього у репозиторії GitHub:

1) Перейдіть у `Settings` → `Pages`.
2) Source: `Deploy from a branch`.
3) Branch: `gh-pages` / `root`.

Для GitHub Pages у цьому проєкті увімкнено hash-режим у Vue Router, тому прямі посилання працюють без серверних налаштувань.

`public/404.html` залишено як статичну сторінку для некоректних адрес.

## ENV (змінні оточення)

### 1) Базові правила Vite

- Файли: `.env`, `.env.local`, `.env.development`, `.env.production`.
- У клієнтському коді доступні тільки змінні з префіксом `VITE_`.
- Доступ у коді: `import.meta.env.VITE_API_URL`.

### 2) Приклад `.env`

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Intita Vue Course
```

### 3) Використання у коді

```js
// src/config/env.js
export const API_URL = import.meta.env.VITE_API_URL
export const APP_NAME = import.meta.env.VITE_APP_NAME
```

```js
// src/main.js
import { APP_NAME } from '@/config/env'
document.title = APP_NAME
```

### 4) Важливо

- Не зберігайте секрети у фронтенд `.env` — все потрапляє у збірку.
- Для різних середовищ використовуйте `.env.development` та `.env.production`.

## Оптимізація продуктивності

### 1) Ліниве завантаження маршрутів

```js
const routes = [
  {
    path: '/api',
    component: () => import('@/views/ApiCrudView.vue'),
  },
]
```

У коді проєкту приклад є у `src/router/index.js` для маршруту `/optimize`.

### 2) Розділення коду та асинхронні компоненти

```js
const BigChart = defineAsyncComponent(() => import('@/components/BigChart.vue'))
```

У коді проєкту приклад — `src/views/OptimizationView.vue` та `src/components/optimization/BigList.vue`.

### 3) Приклади оптимізації рендеру

**A) `computed` замість обчислень у шаблоні**

```vue
<script setup>
import { computed, ref } from 'vue'

const items = ref([
  { id: 1, price: 100 },
  { id: 2, price: 250 },
  { id: 3, price: 80 },
])

const total = computed(() => items.value.reduce((s, i) => s + i.price, 0))
</script>

<template>
  <div>Сума: {{ total }}</div>
</template>
```

**B) `v-once` для статичних блоків**

```vue
<template>
  <section v-once>
    <h2>Статичний блок</h2>
    <p>Цей контент не буде перерендерюватись.</p>
  </section>
</template>
```

**C) `v-memo` для стабільних піддерев**

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
const heavyList = Array.from({ length: 5000 }, (_, i) => i)
</script>

<template>
  <button @click="count++">+1</button>
  <div v-memo="[count]">
    <div v-for="n in heavyList" :key="n">{{ n }}</div>
  </div>
</template>
```

**D) `v-for` з правильним `:key`**

```vue
<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>
```

### 4) Легші ресурси

- Стискайте зображення (WebP/AVIF).
- Уникайте великих шрифтів/фонів без потреби.
- Перевіряйте розмір бандла (`dist/`).

### 5) Кешування і мережа

- Виносьте конфіг у змінні оточення.
- Підключайте CDN тільки там, де це виправдано.

## Міні-завдання для студентів

1) Додайте ліниве завантаження для 2–3 маршрутів.
2) Знайдіть і замініть важкий компонент на `defineAsyncComponent`.
3) Стисніть 1–2 зображення і порівняйте розмір `dist/`.
