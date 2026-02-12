<script setup>
const props = defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true }
})
</script>

<template>
  <div class="lesson-stat">
    <p class="lesson-stat__label">{{ props.label }}</p>
    <strong class="lesson-stat__value">{{ props.value }}</strong>
  </div>
</template>
