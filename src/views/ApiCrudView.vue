<script setup>
import { computed, onMounted, ref } from 'vue'
import { useApiStore } from '@/stores/apiStore'
import PostItem from '@/components/api/PostItem.vue'

const store = useApiStore()

const formTitle = ref('')
const formBody = ref('')
const editingId = ref(null)

const isEditing = computed(() => editingId.value !== null)

const resetForm = () => {
  formTitle.value = ''
  formBody.value = ''
  editingId.value = null
}

const submitForm = async () => {
  const title = formTitle.value.trim()
  const body = formBody.value.trim()

  if (!title || !body) {
    store.error = 'Заповніть заголовок та опис.'
    return
  }

  if (isEditing.value) {
    await store.updatePost(editingId.value, { title, body, userId: 1 })
  } else {
    await store.createPost({ title, body, userId: 1 })
  }

  resetForm()
}

const startEdit = (post) => {
  editingId.value = post.id
  formTitle.value = post.title
  formBody.value = post.body
}

onMounted(() => {
  store.fetchPosts()
})
</script>

<template>
  <main class="page">
    <section class="card">
      <h2>CRUD через API (Axios + Pinia)</h2>
      <p class="note">
        Демонстрація на JSONPlaceholder. Зміни не зберігаються на сервері, але
        відповіді симулюють CRUD.
      </p>

      <div class="row">
        <span class="badge">Записів: {{ store.totalPosts }}</span>
        <button type="button" class="btn btn--ghost" :disabled="store.loading" @click="store.fetchPosts">
          Оновити список
        </button>
      </div>

      <div class="grid-2">
        <div class="field">
          <label>Заголовок</label>
          <input v-model="formTitle" type="text" class="input" />
        </div>
        <div class="field">
          <label>Опис</label>
          <input v-model="formBody" type="text" class="input" />
        </div>
      </div>

      <div class="row">
        <button type="button" class="btn" :disabled="store.loading" @click="submitForm">
          {{ isEditing ? 'Зберегти зміни' : 'Створити' }}
        </button>
        <button
          v-if="isEditing"
          type="button"
          class="btn btn--ghost"
          :disabled="store.loading"
          @click="resetForm"
        >
          Скасувати
        </button>
      </div>

      <p v-if="store.error" class="note">{{ store.error }}</p>
    </section>

    <section class="card">
      <h3>Список постів</h3>
      <div class="posts__grid">
        <PostItem
          v-for="post in store.posts"
          :key="post.id"
          :post="post"
          :loading="store.loading"
          @edit="startEdit"
          @delete="store.deletePost"
        />
      </div>

      <p v-if="store.loading" class="note">Завантаження...</p>
    </section>
  </main>
</template>
