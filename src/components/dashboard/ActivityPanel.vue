<script setup>
const props = defineProps({
  query: { type: String, required: true },
  status: { type: String, required: true },
  items: { type: Array, required: true },
  loading: { type: Boolean, default: false },
  error: { type: String, default: '' },
})

const emit = defineEmits(['update:query', 'update:status'])

const statusLabel = {
  new: 'New',
  'in-progress': 'In progress',
  blocked: 'Blocked',
  done: 'Done',
}
</script>

<template>
  <article class="card activity-card">
    <div class="row activity-card__header">
      <h3>Активності</h3>
      <div class="row">
        <input
          :value="query"
          class="input"
          placeholder="Пошук..."
          @input="emit('update:query', $event.target.value)"
        />
        <select
          :value="status"
          class="input"
          @change="emit('update:status', $event.target.value)"
        >
          <option value="all">Всі</option>
          <option value="new">New</option>
          <option value="in-progress">In progress</option>
          <option value="blocked">Blocked</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>

    <p v-if="error" class="error">{{ error }}</p>
    <p v-else-if="loading" class="muted">Завантаження...</p>

    <ul v-else class="activity-list">
      <li v-for="item in items" :key="item.id" class="activity-item">
        <div>
          <p class="activity-item__title">{{ item.title }}</p>
          <p class="muted">
            {{ item.owner }} · {{ item.date }}
          </p>
        </div>
        <span class="pill" :class="`pill--${item.status}`">
          {{ statusLabel[item.status] }}
        </span>
      </li>
      <li v-if="items.length === 0" class="activity-empty">
        Нічого не знайдено
      </li>
    </ul>
  </article>
</template>

<style scoped>
.activity-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.activity-card {
  min-height: 360px;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  max-height: 280px;
  overflow: auto;
}

.activity-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid #e3e8f2;
  border-radius: 10px;
  background: #fbfcff;
}

.activity-item__title {
  margin: 0 0 4px 0;
  font-weight: 600;
}

.activity-empty {
  border: 1px dashed #d7deea;
  border-radius: 10px;
  padding: 12px;
  text-align: center;
  color: #6a7a97;
}

.error {
  margin: 12px 0 0;
  color: #b91c1c;
}

.pill--new {
  background: #e0f2fe;
  color: #0c4a6e;
}

.pill--in-progress {
  background: #fef3c7;
  color: #92400e;
}

.pill--blocked {
  background: #fee2e2;
  color: #991b1b;
}

.pill--done {
  background: #dcfce7;
  color: #166534;
}
</style>
