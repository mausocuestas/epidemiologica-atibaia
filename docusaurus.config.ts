import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Vigilância Epidemiológica - Atibaia',
  tagline: 'Vaccines are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  future: {
    experimental_faster: true,
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
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
        id: 'boletins',
        path: 'boletins',
        routeBasePath: 'boletins',
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
      backgroundColor: '#b751bd',
      textColor: '#FFF8E6',
      isCloseable: true,
    },
    
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
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
        // {
        // type: '/forms',
        // position: 'left',
        // docId: 'intro', // O ID do documento ao qual este item está vinculado.
        // label: 'Formulários X',
        // },
        {
          to: '/forms/intro',    //Roteamento do lado do cliente, usado para navegar no site. O baseUrl será automaticamente anexado a esse valor.
          label: 'Formulários',
          position: 'left',
          // activeBaseRegex => alternativa para activeBasePath. Para casos 
          // em que um link deve estar ativo em vários caminhos diferentes (como quando você tem 
          // várias pastas de documentos na mesma barra lateral)
          activeBaseRegex: `/forms/`,  
        },
        {
          to: '/boletins/intro',    // ./docs/Intro.md
          label: 'Boletins',
          position: 'left',
          activeBaseRegex: `/boletins`,
        },
        {
          to: '/doencas/intro',    // ./docs/Intro.md
          label: 'Doenças e Agravos',
          position: 'left',
          activeBaseRegex: `/doencas/`,
        },
        {
          to: '/docs/intro',    // ./docs-api/Intro.md
          label: 'Legislação',
          position: 'left',
          activeBaseRegex: `/docs/`,
        },
        {
          to: '/orienta/intro',  // ./docs-system/Intro.md
          label: 'Orientações',
          position: 'left',
          activeBaseRegex: `/orienta/`,
        },
        {to: '/blog', label: 'Blog', position: 'left'},
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
              to: '/doencas/intro',
            },
          ],
        },
        {
          title: 'Atibaia',
          items: [
            {
              label: 'Site da Prefeitura',
              href: 'https://www.atibaia.sp.gov.br/',
            },
            {
              label: 'Carta de Serviços',
              href: 'http://cartadeservicos.atibaia.sp.gov.br/saude/',
            },
            {
              label: 'Unidades de Saúde',
              href: 'http://cartadeservicos.atibaia.sp.gov.br/saude/locais/category/unidades-de-sa%C3%BAde',
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
