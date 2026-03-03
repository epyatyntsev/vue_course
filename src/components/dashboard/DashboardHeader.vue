<script setup>
const props = defineProps({
  period: { type: String, required: true },
})

const emit = defineEmits(['update:period'])
</script>

<template>
  <div class="dashboard__header card">
    <div>
      <h2>Dashboard</h2>
      <p class="muted">Огляд ключових показників та активностей.</p>
    </div>
    <div class="row">
      <label class="field">
        <span class="muted">Період</span>
        <select
          :value="period"
          class="input"
          @change="emit('update:period', $event.target.value)"
        >
          <option value="7d">7 днів</option>
          <option value="30d">30 днів</option>
          <option value="90d">90 днів</option>
        </select>
      </label>
    </div>
  </div>
</template>
