<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  tone: { type: String, default: 'neutral' }
})
</script>

<template>
  <article class="slot-card" :class="`slot-card--${props.tone}`">
    <header class="slot-card__header">
      <slot name="title">
        <h3 class="slot-card__title">{{ props.title }}</h3>
      </slot>
      <slot name="actions" />
    </header>

    <div class="slot-card__body">
      <slot>
        <p class="slot-card__placeholder">Контент не передано. Використайте default slot.</p>
      </slot>
    </div>

    <footer class="slot-card__footer">
      <slot name="footer">
        <span class="slot-card__hint">Нижній слот не заповнений</span>
      </slot>
    </footer>
  </article>
</template>
