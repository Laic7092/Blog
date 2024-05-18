<script setup lang="ts">
import { useData } from 'vitepress';
const { title, frontmatter } = useData()
</script>

<template>
    <header>
        <h1>{{ title }}</h1>
        <div :class="$style.info" v-if="frontmatter.tags">
            <label :class="$style.label" for="time">标签:</label>
            <span name="time">
                <span class="tag" v-for="tag in frontmatter.tags">{{ tag }}</span>
            </span>
        </div>
        <div :class="$style.info" v-if="frontmatter.date">
            <label :class="$style.label" for="time">时间:</label>
            <span name="time">{{ frontmatter.date }}</span>
        </div>
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

.info {
    padding: 0.5em 0;
}

.label {
    width: fit-content;
    margin-right: 1em;
}
</style>