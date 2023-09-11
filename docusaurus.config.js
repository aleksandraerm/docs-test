// @ts-check
// Примечание. Аннотации типов позволяют проверять типы и автодополнение IDE.

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spichka Docs',
  favicon: 'img/favicon.ico',

  // Установите здесь рабочий URL-адрес вашего сайта
  url: 'https://github.com',
  // Задайте путь /<baseUrl>/, под которым обслуживается ваш сайт.
  // Для развертывания страниц GitHub это часто '/<projectName>/'.
  baseUrl: '/docs-test/',

  // Конфигурация развертывания страниц GitHub.
  // Если вы не используете страницы GitHub, они вам не нужны.
  organizationName: 'aleksandraerm', // Обычно это имя организации/пользователя GitHub.
  projectName: 'docs-test', // Обычно ваше имя repo.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('/'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Spichka Docs',
        logo: {
          alt: 'Spichka Docs',
          src: 'img/spichka-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
          // {to: '/blog', label: 'Blog', position: 'left'}, // раздел блог
          {
            href: 'https://github.com/aleksandraerm/docs-test',
            label: 'Предложить правки',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Общая информация',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Ссылки',
            items: [
              {
                label: 'Спичка',
                href: 'https://www.spichka.biz/',
              },
            ],
          },
        ],
        copyright: `Авторские права © ${new Date().getFullYear()} Спичка`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
