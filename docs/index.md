---
layout: home
pageClass: homePage
---

<script setup lang="ts">
import PostList from "./.vitepress/components/PostList.vue"
</script>

<PostList></PostList>

<style>
@media (min-width: 959px) {
    .dark .homePage {
        background-image: url('/images/heroImg.jpg');
    }

    .homePage {
        background-image: url('/images/heroImgLight.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
    }

}
</style>