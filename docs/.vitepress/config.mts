import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ares Docs",
  description: "Ares 静态文档站点",
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Ares Docs',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '工具', link: '/tool/' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/tool/': [
        {
          text: '开始使用',
          items: [
            { text: '工具介绍', link: '/tool/' },
            { text: '安装与配置', link: '/tool/installation' },
            { text: '快速上手', link: '/tool/quick-start' }
          ]
        },
        {
          text: '游戏设置',
          items: [
            { text: '基础设置', link: '/tool/game-settings' },
            { text: '高级配置', link: '/tool/advanced-settings' }
          ]
        },
        {
          text: '帮助',
          items: [
            { text: '常见问题', link: '/tool/faq' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概览', link: '/api/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/ares-static-docs' }
    ],

    footer: {
      message: '基于 VitePress 构建',
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
