<template>
    <div :class="$style['post-list']">
        <section :class="$style.posts">
            <header :class="$style.title">Posts</header>
            <div>
                <ul>
                    <li v-for="(post, idx) in filterList" :key="idx">
                        <article class="card mb1">
                            <header>
                                <a :href="'.' + post.url">{{ post.title }}</a>
                            </header>
                            <div v-html="post.excerpt"></div>
                            <footer>
                                <div :class="$style.row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="svg-icon feather-navigation">
                                        <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                                    </svg>
                                    <span>{{ post.location }}</span>
                                </div>
                                <div :class="$style.row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="svg-icon feather-tag">
                                        <path
                                            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z">
                                        </path>
                                        <line x1="7" y1="7" x2="7" y2="7"></line>
                                    </svg>
                                    <span class="tag mgr-10" v-for="(tag, idx) in post.tags" :key="idx">{{
                                        tag
                                    }}</span>
                                </div>
                                <div :class="$style.row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="svg-icon feather-clock">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <time pubdate>{{ post.date.string }}</time>
                                </div>
                            </footer>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
        <section :class="$style.tags">
            <header :class="$style.title" style="display: flex;align-items: center;">
                Tags
                <span v-if="filterParam.tags" class="tag"
                    style="display: inline-flex;align-items: center;font-size: initial;line-height: 1;height: 1.5em;margin-left: 5px;">
                    <span>{{ filterParam.tags }}</span>
                    <span @click="filterPost('')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="svg-icon">
                            <path fill="currentColor"
                                d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                            </path>
                        </svg>
                    </span>
                </span>
            </header>
            <div class="card" style="max-height: 70vh;overflow-y: auto;">
                <ul>
                    <li v-for="(classify, idx) in classifyList" :key="idx" class="mb1">
                        <button type="button" class="tag" @click="filterPost(classify[0])">
                            {{ classify[0] + '(' + classify[1] + ')' }}
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { data as initList } from './posts.data.js'

console.log(initList)

const filterParam = ref({
    tags: ''
})

const filterPost = (classify: string) => {
    filterParam.value.tags = classify
}

const filterList = computed(() => {
    const { tags } = filterParam.value
    let res = initList
    if (tags !== '') {
        res = initList.filter(post => {
            return post.tags && post.tags.indexOf(tags) !== -1
        })
    }
    return res
})

const map = new Map()
const classifyList = computed(() => {
    initList.forEach(post => {
        const { tags } = post
        Array.isArray(tags) && tags.forEach(tags => {
            if (map.has(tags)) {
                map.set(tags, map.get(tags) + 1)
            } else {
                map.set(tags, 1)
            }
        });
    })
    return Array.from(map).map(item => {
        return item
    })
})
</script>

<style module>
.post-list {
    display: flex;

    .title {
        display: inline-block;
        font-size: 1.35rem;
        font-weight: 600;
        padding: 1rem 0;
    }

    .posts {
        flex: 3;

        .row {
            display: inline-flex;
            width: 33.33%;
            align-items: center;
        }

        @media (max-width: 419px) {
            .row {
                display: flex;
                width: 100%;
            }
        }


    }

    .tags {
        height: fit-content;
        flex: 1;
        margin-left: 2rem;
        position: sticky;
        top: 0;
    }

    @media (max-width: 719px) {
        .tags {
            display: none;
        }
    }

    .del-btn {
        height: 1em;
        width: 1em;
        margin-left: 0.5rem;
        cursor: pointer;
        border-radius: var(--tag-border-radius-rounded);
    }

    .del-btn:hover {
        background-color: var(--el-color-primary-light-5);
    }
}
</style>