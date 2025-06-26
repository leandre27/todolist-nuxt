<template>
    <div class="p-6 max-w-2xl mx-auto">
        <h1 class="text-2xl font-bold">Créer une tâche</h1>
        <form @submit.prevent="updateTodo" class="space-y-4">
            <input v-model="title" type="text" class="block w-full py-2 px-3 border border-gray-300 outline-none">
            <label for="completed" class="flex items-center gap-2">
                <input type="checkbox" v-model="completed" id="completed">
                Tâche terminer
            </label>
            <button type="submit" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2">Modifier</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import type { Task } from '~/types/task';

const route = useRoute();

const id = Number(route.params.id);

const title = ref('')
const completed = ref(false)

const fetchTodo = async () => {
    
    const data = await $fetch<Task>(`/api/task/${id}`)
    title.value = data.title;
    completed.value = data.completed
}



const updateTodo = async () => {
    await $fetch(`/api/task/${id}`, {
        method: "PUT",
        body: {
            title: title.value,
            completed: completed.value
        }
    })


    await navigateTo('/')
}

onMounted(fetchTodo)
</script>
