<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import ExerciseService from './services/ExerciseService';

const apiKey = '7a36a4b96035d924a3216b3f53d9dc294a4fada6';
const exerciseService = new ExerciseService(apiKey);

const fetchedExercises = ref([]);

onMounted(async () => {
  try {
    const exercises = await exerciseService.getExercises();
    fetchedExercises.value = exercises;
    console.log('Fetched exercises:', exercises);
  } catch (error) {
    console.error('Error:', error);
  }
});
</script>

<template>
  <h1>Hello</h1>
  <ul>
    <li v-for="exercise in fetchedExercises" :key="exercise.id">
      {{ exercise.name }}
    </li>
  </ul>
</template>

<style scoped></style>
