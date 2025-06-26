<template>
    <div>

        <Head>
            <Title> {{ title }} </Title>
            <Meta name="description" :content="title"/>
            <Style type="text/css">
                
            </Style>
        </Head>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const title = ref('Hello word')
</script>
