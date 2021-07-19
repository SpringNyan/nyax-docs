const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Nyax",
  tagline: "一个支持多种状态管理库的状态管理框架",
  url: "https://nyax.js.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "SpringNyan", // Usually your GitHub org/user name.
  projectName: "nyax", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Nyax",
      logo: {
        alt: "Nyax Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "introduction",
          position: "right",
          label: "文档",
        },
        {
          type: "doc",
          docId: "api/nyax",
          position: "right",
          label: "API",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              href: "https://springnyan.github.io/nyax-docs-0.5.x",
              label: "0.5.x",
            },
          ],
        },
        {
          href: "https://github.com/SpringNyan/nyax",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "学习",
          items: [
            {
              label: "介绍",
              to: "/docs/introduction",
            },
            {
              label: "安装",
              to: "/docs/getting-started/installation",
            },
            {
              label: "概念",
              to: "/docs/concepts/overview",
            },
            {
              label: "高级",
              to: "/docs/advanced/devtools",
            },
            {
              label: "API",
              to: "/docs/api/nyax",
            },
          ],
        },
        {
          title: "状态管理库",
          items: [
            {
              label: "MobX",
              href: "https://mobx.js.org",
            },
            {
              label: "Redux",
              href: "https://redux.js.org",
            },
            {
              label: "Vuex",
              href: "https://next.vuex.vuejs.org",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/SpringNyan/nyax",
            },
            {
              label: "0.5.x",
              href: "https://springnyan.github.io/nyax-docs-0.5.x",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SpringNyan. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          versions: {
            current: {
              label: "latest",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
