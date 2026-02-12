<script setup>
const props = defineProps({
  users: { type: Array, required: true }
})
</script>

<template>
  <ul class="user-list" v-if="props.users.length">
    <li v-for="(user, index) in props.users" :key="user.id" class="user-list__item">
      <slot name="item" :user="user" :index="index">
        <div class="user-list__fallback">
          <strong>{{ user.name }}</strong>
          <span class="pill" :class="user.active ? 'pill--on' : 'pill--off'">
            {{ user.active ? 'онлайн' : 'офлайн' }}
          </span>
        </div>
      </slot>
    </li>
  </ul>

  <div v-else class="user-list__empty">
    <slot name="empty">Немає користувачів для показу.</slot>
  </div>
</template>
