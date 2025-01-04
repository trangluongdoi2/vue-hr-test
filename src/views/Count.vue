<script setup>
import { onMounted, ref, computed } from 'vue';

const STORAGE_KEY = 'vue-todomvc'
const todos = ref([])
const countTodoAll = computed(() => todos.value.length || 0)
const countTodoActive = computed(() => todos.value.filter((todo) => !todo?.completed)?.length || 0)
const countTodoCompleted = computed(() => todos.value.filter((todo) => todo?.completed)?.length || 0)

const getCountTodos = () => {
  todos.value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}
onMounted(() => {
  getCountTodos();
})
</script>
<template>
  <div>
    <h2>Total number of created to-do items: <span :style="{ color: '#b83f45' }">{{ countTodoAll }}</span></h2>
    <h2>Total number of active to-do items: <span :style="{ color: '#b83f45' }">{{ countTodoActive }}</span></h2>
    <h2>Total number of completed to-do items: <span :style="{ color: '#b83f45' }">{{ countTodoCompleted }}</span></h2>
  </div>
</template>