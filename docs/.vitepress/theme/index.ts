// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import PostList from '../components/PostList.vue'
import TimeLine from '../components/TimeLine.vue'
import Comment from '../components/TimeLine.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('PostList', PostList)
    app.component('TimeLine', TimeLine)
    app.component('Comment', Comment)
  }
} satisfies Theme
