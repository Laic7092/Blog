import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Laix's Blog",
  description: "Personal Blog",
  lang: "zh-CN",
  base: '/blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '归档',
        link: '/timeline.md'
      },
      {
        text: '关于',
        link: '/about.md'
      }
    ],

    sidebar: [
    ],
    search: {
      provider: 'local'
    },
    // lastUpdated: {
    // },
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    // },
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Laix'
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
