<template>
    <div>
        <h1>Page about</h1>
    </div>
</template>

<script setup lang="ts">
import Nav from '~/components/nav.vue';
import { useHead } from '#app';


useHead({
    title: "About perso",
    titleTemplate: (title) => `${title} - minute de code`,
    meta: [
        {
            name:'description',
            content: 'Juste la description',
        },
        {
            property: 'og:description',
            content: 'About page of the site'
        }
    ]
})
</script>

<style scoped>

</style>