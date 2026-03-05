# Урок 11. Тестування (Vitest)

Ціль уроку — навчитися писати базові юніт-тести для Vue-компонентів, store та сервісів через `Vitest`.

## План уроку

1) Що і навіщо тестуємо у Vue-проєкті.
2) Налаштування `Vitest` у Vite.
3) Тестування компонентів (`props`, `emits`, стани).
4) Тестування store (actions/getters).
5) Тестування сервісів.

## Налаштування

У проєкті використовується:

- `vitest`
- `@vue/test-utils`
- `happy-dom`

Скрипти:

```sh
npm run test
npm run test:watch
```

Конфіг у `vite.config.js`:

```js
test: {
  globals: true,
  environment: 'happy-dom',
}
```

## Тести в проєкті

### 1) Компоненти

- `src/__tests__/components/dashboard/DashboardHeader.spec.js`
- `src/__tests__/components/dashboard/ActivityPanel.spec.js`

Що перевіряємо:

- рендер значень через `props`;
- події `update:*` через `emits`;
- стани `loading/error/empty`.

### 2) Store

- `src/__tests__/stores/dashboardStore.spec.js`

Що перевіряємо:

- `loadDashboard` (успіх/помилка);
- `filteredActivity` getter;
- `resetState`.

### 3) Service

- `src/__tests__/services/api/dashboardService.spec.js`

Що перевіряємо:

- дані для конкретного періоду;
- fallback на `7d` для невідомого періоду.

## Що тестувати далі

- Роутінг критичних сторінок.
- Інтеграцію store + view.
- Обробку помилок API у UI.
