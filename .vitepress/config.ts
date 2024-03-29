import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fantastic-admin 官方文档',
  description: '一款开箱即用的 Vue 中后台管理系统框架。',
  lang: 'zh-CN',
  base: '/v1-docs/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    ['meta', { 'http-equiv': 'Expires', 'content': '0' }],
    ['meta', { 'http-equiv': 'Pragma', 'content': 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache-control', 'content': 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache', 'content': 'no-cache' }],
    ['meta', { name: 'keywords', content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
    ['keywords', { content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
    ['description', { content: '一款开箱即用的 Vue 中后台管理系统框架。' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    footer: {
      copyright: 'Copyright © 2020-present Fantastic-admin',
    },
    nav: [
      {
        text: '指南',
        link: '/guide/start',
      },
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1663266323098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2881"></path></svg>',
        },
        link: 'https://gitee.com/fantastic-admin/basic',
      },
      {
        icon: 'github', link: 'https://github.com/fantastic-admin/basic',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '开始', link: '/guide/start' },
            { text: '代码规范', link: '/guide/coding-standard' },
            { text: '配置', link: '/guide/configure' },
            { text: '布局', link: '/guide/layout' },
            { text: '主题', link: '/guide/theme' },
            { text: '全局资源', link: '/guide/global-resources' },
            { text: '和服务端交互', link: '/guide/axios' },
            { text: '组件', link: '/guide/component' },
            { text: 'Vuex', link: '/guide/vuex' },
            { text: '路由', link: '/guide/router' },
            { text: '权限验证', link: '/guide/permission' },
            { text: '标签栏', link: '/guide/tabbar' },
            { text: '二级页面缓存', link: '/guide/keep-alive' },
            { text: '多级页面缓存', link: '/guide/keep-alive-neste' },
            { text: '自定义字体', link: '/guide/font' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '私有 Storage 数据', link: '/guide/storage' },
            { text: '第三方库', link: '/guide/library' },
            { text: 'CDN 支持', link: '/guide/cdn' },
            { text: 'gzip 支持', link: '/guide/gzip' },
            { text: 'Mock 与联调', link: '/guide/mock' },
            { text: '构建', link: '/guide/build' },
            { text: 'Git 钩子', link: '/guide/git' },
            { text: '错误日志', link: '/guide/bug' },
            { text: '快速生成文件', link: '/guide/plop' },
            { text: '标准模块', link: '/guide/module' },
            { text: '高级 position:fixed', link: '/guide/position-fixed' },
            { text: '版本升级', link: '/guide/upgrade' },
            { text: '视频教程', link: 'https://space.bilibili.com/3079082/channel/detail?cid=156985' },
          ],
        },
      ],
    },
    outline: 'deep',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
})
