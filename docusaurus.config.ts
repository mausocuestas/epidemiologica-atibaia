import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DVE-Atibaia',
  tagline: 'Bacteria are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
// para navbar: 1) presets para definir o doc padrão 2) plugin-content-docs 3) navbar
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          path: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'forms',
        path: 'forms',
        routeBasePath: 'forms',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'orienta',
        path: 'orienta',
        routeBasePath: 'orienta',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'doencas',
        path: 'doencas',
        routeBasePath: 'doencas',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    
  ],

  themeConfig: {
    announcementBar: {
      id: 'construcao',
      content:
        'Em construção',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },

    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DVE',
      logo: {
        alt: 'Logo da Epidemiológica Atibaia',
        src: 'img/favicon.ico',
      },

      // https://stackoverflow.com/questions/60783595/is-there-a-way-to-have-two-docs-in-docusaurus-2/68162605#68162605
      items: [
        {
          to: '/forms/intro',    // ./docs/Intro.md
          label: 'Formulários',
          position: 'left',
          activeBaseRegex: `/forms/`,
        },
        {
          to: '/docs/intro',    // ./docs-api/Intro.md
          label: 'Documentos',
          position: 'left',
          activeBaseRegex: `/docs/`,
        },
        {
          to: '/orienta/intro',  // ./docs-system/Intro.md
          label: 'Orientações',
          position: 'left',
          activeBaseRegex: `/orienta/`,
        },
        {
          to: '/doencas/intro',    // ./docs/Intro.md
          label: 'Doenças e Agravos',
          position: 'left',
          activeBaseRegex: `/doencas/`,
        },
        {to: '/blog', label: 'Blog', position: 'right'},
      ],
    },


    footer: {
      style: 'dark',
      links: [
        {
          title: 'DVE',
          items: [
            {
              label: 'Formulários',
              to: '/forms/intro',
            },
            {
              label: 'Documentos',
              to: '/docs/intro',
            },
            {
              label: 'Orientações',
              to: '/orienta/intro',
            },
            {
              label: 'Doenças e Agravos',
              to: '/doenca/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Forms',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Epidemiológica Atibaia Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'javascript',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
