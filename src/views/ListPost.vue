<template>
    <div>
        <div v-for="em in employees" :key="em.id">
            <p>ID: {{ em.id }}</p>
            <p>Post: {{ em.projects[0] }}</p>
            <button @click="goToUser(em.id)">View Details</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

    const employees = [
  {
    id: 1,
    projects: ["Dự án X", "Dự án Y"],
  },
  {
    id: 2,
    projects: ["Dự án Z"],
  },
  {
    id: 3,
    projects: ["Dự án X", "Dự án Z"],
  },
  {
    id: 4,
    projects: ["Dự án Y"],
  },
  {
    id: 5,
    projects: ["Dự án X", "Dự án Y", "Dự án Z"],
  }
];
const router = useRouter();
const goToUser = (id) => {
    router.push(`/posts/${id}`)
} 
</script>
<style>

</style>