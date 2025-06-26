<template>
    <div class="p-6 max-w-2xl mx-auto">
        <h1 class="text-2xl font-bold"> {{ todo?.title }} </h1>
        <p class="mb-4 text-gray-500">
            Status : 
            <span :class="[todo?.completed ? 'text-green-600' : 'text-red-500' ]">
                {{ todo?.completed ? 'complétée' : 'En cours' }}
            </span>
        </p>
        <div class="flex gap-2">
            <NuxtLink :to="`/todo/${todo?.id}/edit`" class="bg-yellow-500 hover:bg-yellow-600 text-gray-500 rounded-md px-4 py-2">
                Modifier
            </NuxtLink>
            <NuxtLink to="/" class="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2">
                Retour
            </NuxtLink>
        </div>
    </div>

</template>

<script setup lang="ts">
import type {Task} from "~/types/task"
import { ref,onMounted } from "vue";


const route = useRoute();
const id = Number(route.params.id);
const todo = ref<Task | null>(null);

onMounted(async () => {
    todo.value = await $fetch<Task>(`/api/task/${id}`);
})

</script>
