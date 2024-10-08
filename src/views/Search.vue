<template>
    <div>
        <input v-model="keySearch" type="text">
        <button @click="handleSearch">Search</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
    const route = useRoute();
    const router = useRouter();
    const keySearch = ref("");
    const handleSearch = () => {
        router.push({ path: '/Search', query: { q: keySearch.value } });
    }
</script>

<style>

</style>