# Урок 6. Vue Router

Ціль уроку — навчитися підключати Vue Router, налаштовувати маршрути, використовувати `router-link` і `router-view`, а також працювати з параметрами маршруту.

## План уроку

1) Навіщо потрібен роутінг у SPA.
2) Встановлення `vue-router` і створення роутера.
3) Маршрути: шлях, імʼя, компонент.
4) `router-link` та `router-view`.
5) Параметри маршруту та query.
6) Програмна навігація (`router.push`, `router.back`).
7) Практика на прикладах.

## Що дивитись у коді

- `src/router/index.js` — конфігурація роутера.
- `src/App.vue` — головний layout + меню.
- `src/views/HomeView.vue` — головний екран.
- `src/views/RouterBasicsView.vue` — приклади `router-link`.
- `src/views/RouteParamsView.vue` — параметри та query.

## Міні-завдання для студентів

1) Додайте маршрут `/router/about` і створіть окремий view.
2) Додайте посилання на новий маршрут у меню.
3) Додайте в `RouteParamsView` кнопку "Випадковий ID".
4) Додайте query `mode=full` та покажіть його в інтерфейсі.
