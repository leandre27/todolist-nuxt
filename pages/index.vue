<template>
    <div class="p-6 max-w-2xl mx-auto">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold"> Liste des tâches </h1>
            <NuxtLink to="/create" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
                + créer
            </NuxtLink>
        </div>

        <ul v-if="todos.length" class="space-y-2">
            <li v-for="todo in todos" :key="todo.id" class="flex justify-center items-center bg-white shadow-md rounded-md p-4">
                <NuxtLink :to="`/todo/${todo.id}`" class="flex-1 text-lg hover:underline">
                    {{ todo.title }}
                </NuxtLink>
               <div class="flex gap-2">
                    <NuxtLink :to="`/todo/${todo.id}/edit`" class="bg-yellow-500 hover:bg-yellow-600 text-gray-500 rounded-md px-4 py-2">
                        Modifier
                    </NuxtLink>
                    <button type="button" @click="deleteTodo(todo.id)" class="bg-red-500 hover:bg-red-600 text-gray-500 rounded-md px-4 py-2">
                        Supprimer
                    </button>
                </div>
            </li>
        </ul>

        <p v-else class="text-gray-600">Ancune tâches pour le moment</p>
    </div>
</template>

<script setup lang="ts">
import type { Task } from '~/types/task';
import { ref, onMounted } from 'vue';

const todos = ref<Task[]>([]);

const fetchTodo = async () => {
    todos.value = await $fetch<Task[]>('/api/task');
}

const deleteTodo = async (id: number) => {
    await $fetch(`/api/task/${id}`,{
        method: 'DELETE'
    })

    fetchTodo();
}


onMounted(fetchTodo);

</script>

<style scoped>

</style>