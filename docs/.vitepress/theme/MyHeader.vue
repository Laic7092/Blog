<script setup lang="ts">
import { useData } from 'vitepress';
const { title } = useData()
</script>

<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<style module>
h1 {
    letter-spacing: -0.02em;
    line-height: 40px;
    font-size: 28px;
    position: relative;
    font-weight: 600;
    outline: none;
}
</style>