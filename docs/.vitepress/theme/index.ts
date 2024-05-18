// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(MyHeader),
      // 'doc-after': () => h(MyFooter)
    })
  },
  enhanceApp({ app, router, siteData }) {
  }
} satisfies Theme
