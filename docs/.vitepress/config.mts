import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "无极助手",
  description: "无极助手使用指南",
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '无极助手',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '使用说明', link: '/apps/wuji-assistant/' }
    ],

    sidebar: {
      '/apps/wuji-assistant/': [
        {
          text: '开始使用',
          items: [
            { text: '简介', link: '/apps/wuji-assistant/' },
            { text: '快速开始', link: '/apps/wuji-assistant/quick-start' },
            { text: '激活授权', link: '/apps/wuji-assistant/activation' },
            { text: '基础使用', link: '/apps/wuji-assistant/basic-usage' }
          ]
        },
        {
          text: '功能说明',
          items: [
            { text: '功能详解', link: '/apps/wuji-assistant/features' }
          ]
        },
        {
          text: '帮助',
          items: [
            { text: '常见问题', link: '/apps/wuji-assistant/faq' },
            { text: '更新日志', link: '/apps/wuji-assistant/changelog' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/wuji-assistant' }
    ],

    footer: {
      message: '感谢您的支持',
      copyright: 'Copyright © 2024-present'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    }
  },

  markdown: {
    lineNumbers: true
  }
})
