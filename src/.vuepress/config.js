const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'alekeagle.me ShareX API',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'AlekEagle/sharex-vue-docs',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    logo: 'https://alekeagle.me/img/me_irl.webp',
    nav: [
      {
        text: 'Reference',
        link: '/reference/'
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'alekeagle.me',
        link: 'https://alekeagle.me/'
      }
    ],
    sidebar: {
      '/reference/': [
        {
          title: 'Reference',
          collapsable: true,
          children: [
            '',
            'structures'
          ]
        }
      ],
      '/api/': [
        {
          title: 'API',
          collapsable: true,
          children: [
            '',
            'user'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/last-updated'
  ]
}