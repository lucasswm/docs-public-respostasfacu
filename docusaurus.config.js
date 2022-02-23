// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ADS Respostas',
  tagline: 'Aqui ninguém sofre sozinho!',
  url: 'https://adsrespostas.winst.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'lucasswm', // Usually your GitHub org/user name.
  projectName: 'docs-public-respostasfacu', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ADS Respostas',
        logo: {
          alt: 'logo ADS',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Respostas',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/lucasswm/docs-public-respostasfacu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Respostas',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/kCGDv6kTAH',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+wpgTBMn1cfxmZTZh',
              },
            ],
          },
          {
            title: 'Grupos do Whatsapp',
            items: [
              {
                label: 'ADS - Estudos',
                href: 'https://chat.whatsapp.com/DIvtfDTLUluBOMvCwNd51y',
              },
              {
                label: 'ADS - Estudos 2',
                href: 'https://chat.whatsapp.com/EY9qgSYXMexAseGLyXvMo6',
              },
              {
                label: 'ADS - Somente Respostas',
                href: 'https://chat.whatsapp.com/Iexn0F6ML1o2AZENh1U2xy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Uní-vos, sofredores de tecnologia.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
