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
  // Задайте путь /<baseUrl>/, под которым обслуживается ваш сайт. Для развертывания страниц GitHub это часто '/<projectName>/'.
  baseUrl: '/docs-test/',

  // Конфигурация развертывания страниц GitHub. Если вы не используете страницы GitHub, они вам не нужны.
  organizationName: 'aleksandraerm', // Обычно это имя организации/пользователя GitHub.
  projectName: 'docs-test', // Обычно ваше имя repo.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Даже если вы не используете интернализацию, вы можете использовать это поле для установки полезных метаданных, таких как язык html. Например, если ваш сайт на китайском языке, вы можете заменить «en» на «zh-Hans».
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Пожалуйста, измените это на свой repo. Удалите это, чтобы удалить ссылки «изменить эту страницу».
        },
        blog: {
          showReadingTime: true,
          // Пожалуйста, измените это на свой repo. Удалите это, чтобы удалить ссылки «изменить эту страницу».
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
      // Замените социальной картой вашего проекта.
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
