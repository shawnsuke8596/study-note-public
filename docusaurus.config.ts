import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Study Record Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://shawnsuke8596.github.io',
  baseUrl: '/study-note-public/',

  organizationName: 'shawnsuke8596',//GitHubユーザー名
  projectName: 'study-note-public', //リポジトリ名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


themes: [
  [
    '@easyops-cn/docusaurus-search-local',
    {
      indexDocs: true,
      indexBlog: false,
      indexPages: true,
      hashed: true,
      language: ['ja','en'],
    },
  ],
],

// ヘッダー
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Study Record Site',
      logo: { alt: 'My Site Logo', src: 'img/logo.svg' },
      items: [
       // add begin
        {
          type: 'docSidebar',
          sidebarId: 'pythonSidebar',
          position: 'left',
          label: 'Python',
        },
        {
          type: 'docSidebar',
          sidebarId: 'dbSidebar',
          position: 'left',
          label: 'Database',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ccnaSidebar',
          position: 'left',
          label: 'CCNA',
        },
        {
          type: 'docSidebar',
          sidebarId: 'linuxSidebar',
          position: 'left',
          label: 'Linux',
        },
        {
          type: 'docSidebar',
          sidebarId: 'githubSidebar',
          position: 'left',
          label: 'GitHub',
        },
        {
          type: 'docSidebar',
          sidebarId: 'vimSidebar',
          position: 'left',
          label: 'vim',
        },
        {
          type: 'docSidebar',
          sidebarId: 'markdownSidebar',
          position: 'left',
          label: 'markdown',
        },
        // add end
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial(docusaurus)',
        },
        { to: '/blog', label: 'Blog(docusaurus)', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub(docusaurus)',
          position: 'right',
        },
      ],
    },

    // フッター
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'Tutorial', to: '/docs/intro' }] },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow(docusaurus)', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            //{ label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X(docusaurus)', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'IT関連',
          items: [
            { label: 'IPA', href: 'https://www.ipa.go.jp/' },
            { label: 'ap-siken', href: 'https://www.ap-siken.com/' },
          ],
        },
       {
          title: 'Database Study Site',
          items: [
            { label: 'SQLBold', href: 'https://sqlbolt.com/' },
            { label: 'db-fiddle', href: 'https://www.db-fiddle.com/' },

          ],
        },
       {
          title: 'Network Study Site',
          items: [
            { label: 'Cisco Networking Academy', href: 'https://www.netacad.com/' },
          ],
        },

/*
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' },
          ],
        },
*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
