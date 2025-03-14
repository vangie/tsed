import {apiAnchor} from "@tsed/vitepress-theme/markdown/api-anchor/api-anchor.js";
import {defineConfig} from "vitepress";
import pkg from "../../package.json";
import referenceSidebar from "../public/reference-sidebar.json";
import team from "../team.json";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ts.ED a modern Node.js/Bun.js framework built with TypeScript",
  lastUpdated: true,
  description: "Ts.ED offers a flexible and easy-to-learn structure designed to enhance the developer experience. It provides decorators, guidelines, and supports Node.js, Bun.js, Express, Koa, CLI, and serverless architectures (e.g., AWS).",
  sitemap: {
    hostname: "https://tsed.dev"
  },

  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/tsed.svg' }],
    ["link", {rel: "icon", type: "image/png", href: "/tsed-og.png"}],
    ["link", {rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon"}],
    ["link", {rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32"}],
    ["link", {rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16"}],
    ["link", {rel: "icon", href: "/apple-touch-icon.png", type: "image/x-icon", sizes: "180x180"}],
    ["meta", {name: "theme-color", content: "#5f67ee"}],
    ["meta", {property: "og:type", content: "website"}],
    ["meta", {property: "og:locale", content: "en"}],
    ["meta", {property: "og:title", content: "Ts.ED - A Node.js and TypeScript Framework on top of Express/Koa.js."}],
    ["meta", {property: "og:site_name", content: "Ts.ED"}],
    ["meta", {property: "og:image", content: "https://tsed.dev/tsed-og.png"}],
    ["meta", {property: "og:url", content: "https://tsed.dev/"}],
    [
      "script",
      {async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-3M3Q4QME6H&cx=c&_slc=1"}
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3M3Q4QME6H');`
    ]
  ],

  themeConfig: {
    logo: "/tsed.svg",
    siteTitle: false,
    apiUrl: "/api.json",
    team,
    apiRedirectUrl: "",
    repo: "tsedio/tsed",
    githubProxyUrl: "https://api.tsed.io/rest/github/tsedio/tsed",
    editLink: {
      pattern: "https://github.com/tsedio/tsed/edit/production/docs/:path"
    },
    search: {
      provider: "algolia",
      options: {
        appId: "DH8VVM2E1E",
        apiKey: "9a1620e0f36bc5dc3b0982fdcbdd6f5f",
        indexName: "ts_ed"
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // {text: "Home", link: "/"},
      {
        text: "Getting started",
        items: [
          {
            text: "Introduction",
            items: [
              {text: "What is Ts.ED?", link: "/introduction/what-is-tsed"},
              {text: "What's new in v8?", link: "/introduction/what-is-news-v8"},
              {text: "Capabilities", link: "/introduction/capabilities"},
              {text: "Installation", link: "/introduction/getting-started"},
              {text: "Create your first controller", link: "/introduction/create-your-first-controller"}
            ]
          },
          {
            text: "Migration",
            items: [
              {text: "Migrate from v7", link: "/introduction/migrate-from-v7"},
              {text: "Migrate v6 to v7", link: "/introduction/migrate-from-v6"},
              {text: "Migrate from Express", link: "/introduction/migrate-from-express"}
            ]
          }
        ]
      },
      {
        text: "Documentation",
        items: [
          {
            text: "Configuration",
            link: `/docs/configuration/`
          },
          {
            text: "Controllers",
            link: `/docs/controllers`
          },
          {
            text: "DI & Providers",
            link: `/docs/providers`
          },
          {
            text: "Models",
            link: `/docs/model`
          },
          {
            text: "Json Mapper",
            link: `/docs/json-mapper`
          },
          {
            text: "Middlewares",
            link: `/docs/middlewares`
          },
          {
            text: "Pipes",
            link: `/docs/pipes`
          },
          {
            text: "Interceptors",
            link: `/docs/interceptors`
          },
          {
            text: "Validation",
            link: `/docs/validation`
          },
          {
            text: "Authentication",
            link: `/docs/authentication`
          },
          {
            text: "Hooks",
            link: `/docs/hooks`
          },
          {
            text: "Response filter",
            link: `/docs/response-filter`
          },
          {
            text: "Exceptions",
            link: `/docs/exceptions`
          },
          {
            text: "Logger",
            link: `/docs/logger`
          },
          {
            text: "Context",
            link: `/docs/request-context`
          },
          {
            text: "Cache",
            link: `/docs/cache`
          },
          {
            text: "Platform API",
            link: `/docs/platform-api`
          },
          {
            text: "Command",
            link: `/docs/command`
          },
          {
            text: "Custom decorators",
            link: "/docs/custom-endpoint-decorators"
          },
          {
            text: "Templating",
            link: `/docs/templating`
          },

          {
            text: "Session & Cookies",
            link: `/docs/session`
          },
          {
            text: "Testing",
            link: `/docs/testing`
          },
          {text: "Upload files", link: "/docs/upload-files"},
          {text: "Customize 404", link: "/docs/not-found-page"},
          {text: "Api references", link: "/api"}
        ]
      },
      {
        text: "Tutorials",
        items: [
          {
            text: "AJV",
            link: `/tutorials/ajv`
          },
          {
            text: "AWS",
            link: `/tutorials/aws`
          },
          {
            text: "Passport.js",
            link: `/tutorials/passport`
          },
          {
            text: "Keycloak",
            link: `/tutorials/keycloak`
          },
          {
            text: "Prisma",
            link: `/tutorials/prisma`
          },
          {
            text: "MikroORM",
            link: `/tutorials/mikroorm`
          },
          {
            text: "TypeORM",
            link: `/tutorials/typeorm`
          },
          {
            text: "Mongoose",
            link: `/tutorials/mongoose`
          },
          {
            text: "Objection.js",
            link: `/tutorials/objection`
          },
          {
            text: "IORedis",
            link: `/tutorials/ioredis`
          },
          {
            text: "GraphQL",
            link: `/tutorials/graphql`
          },
          {
            text: "Socket.io",
            link: `/tutorials/socket-io`
          },
          {
            text: "Swagger",
            link: `/tutorials/swagger`
          },
          {
            text: "OIDC",
            link: `/tutorials/oidc`
          },
          {
            text: "Stripe",
            link: `/tutorials/stripe`
          },
          {
            text: "Agenda",
            link: `/tutorials/agenda`
          },
          {
            text: "Serverless",
            link: `/tutorials/serverless`
          },
          {
            text: "Temporal",
            link: `/tutorials/temporal`
          },
          {
            text: "BullMQ",
            link: `/tutorials/bullmq`
          },
          {
            text: "Terminus",
            link: `/tutorials/terminus`
          },
          {
            text: "Vike",
            link: `/tutorials/vike`
          },
          {
            text: "Jest",
            link: `/tutorials/jest`
          },
          {
            text: "Vitest",
            link: `/tutorials/vitest`
          },
          {
            text: "Server-sent events",
            link: `/tutorials/server-sent-events`
          }
        ].sort((a, b) => a.text.localeCompare(b.text))
      },
      {
        text: "Plugins",
        link: "/plugins/index"
      },
      {
        text: pkg.version,
        items: [
          {
            text: "Releases",
            link: "https://github.com/tsedio/tsed/releases"
          },
          {
            text: "v7 (maintenance)",
            link: "https://v7.tsed.dev"
          },
          {
            text: "v6 (obsolete)",
            link: "https://v5.tsed.dev"
          },
          {
            text: "v5 (obsolete)",
            link: "https://v4.tsed.dev"
          },
          {
            text: "Contributing",
            link: "https://github.com/tsedio/tsed/blob/production/CONTRIBUTING.md"
          },
          {
            text: "Team",
            link: "/more/team"
          }
        ]
      }
    ],
    sidebar: {
      "/introduction/": [
        {
          text: "Introduction",
          items: [
            {text: "What is Ts.ED?", link: "/introduction/what-is-tsed"},
            {text: "What's new in v8?", link: "/introduction/what-is-news-v8"},
            {text: "Capabilities", link: "/introduction/capabilities"},
            {text: "Installation", link: "/introduction/getting-started"},
            {text: "Create your first controller", link: "/introduction/create-your-first-controller"}
          ]
        },
        {
          text: "Migration",
          items: [
            {text: "Migrate from v7", link: "/introduction/migrate-from-v7"},
            {text: "Migrate from v6 to v7", link: "/introduction/migrate-from-v6"},
            {text: "Migrate from Express", link: "/introduction/migrate-from-express"}
          ]
        }
      ],
      "/docs/": [
        {
          text: "Configuration",
          items: [
            {text: "Options", link: "/docs/configuration/"},
            {text: "Load config from file", link: "/docs/configuration/load-configuration-from-file"},
            {text: "Express.js", link: "/docs/configuration/express"},
            {text: "Koa.js", link: "/docs/configuration/koa"}
          ]
        },
        {
          text: "Fundamentals",
          items: [
            {
              text: "Controllers",
              link: "/docs/controllers"
            },
            {
              text: "DI & Providers",
              link: `/docs/providers`
            },
            {
              text: "Models",
              link: `/docs/model`
            },
            {
              text: "Json Mapper",
              link: `/docs/json-mapper`
            },
            {
              text: "Middlewares",
              link: `/docs/middlewares`
            },
            {
              text: "Pipes",
              link: `/docs/pipes`
            },
            {
              text: "Interceptors",
              link: `/docs/interceptors`
            },
            {
              text: "Validation",
              link: `/docs/validation`
            },
            {
              text: "Authentication",
              link: `/docs/authentication`
            },
            {
              text: "Hooks",
              link: `/docs/hooks`
            },
            {
              text: "Response filter",
              link: `/docs/response-filter`
            },
            {
              text: "Exceptions",
              link: `/docs/exceptions`
            },
            {
              text: "Logger",
              link: `/docs/logger`
            },
            {
              text: "Context",
              link: `/docs/request-context`
            },
            {
              text: "Testing",
              link: `/docs/testing`
            }
          ]
        },
        {
          text: "Advanced",
          items: [
            {
              text: "Cache",
              link: `/docs/cache`
            },
            {
              text: "Platform API",
              link: `/docs/platform-api`
            },
            {
              text: "Command",
              link: `/docs/command`
            },
            {
              text: "Templating",
              link: `/docs/templating`
            },
            {
              text: "Custom decorators",
              link: "/docs/custom-endpoint-decorators"
            },
            {
              text: "Session & Cookies",
              link: `/docs/session`
            },
            {
              text: "Serve files",
              link: `/docs/serve-files`
            },
            {
              text: "Upload files",
              link: "/docs/upload-files"
            },
            {
              text: "Customize 404",
              link: "/docs/not-found-page"
            },
            {
              text: "Api references",
              link: "/api"
            }
          ]
        }
      ],
      "/tutorials/": [
        {
          text: "ORM",
          items: [
            {
              text: "Prisma",
              link: `/tutorials/prisma`
            },
            {
              text: "MikroORM",
              link: `/tutorials/mikroorm`
            },
            {
              text: "TypeORM",
              link: `/tutorials/typeorm`
            },
            {
              text: "Mongoose",
              link: `/tutorials/mongoose`
            },
            {
              text: "Objection.js",
              link: `/tutorials/objection`
            },
            {
              text: "IORedis",
              link: `/tutorials/ioredis`
            }
          ].sort((a, b) => a.text.localeCompare(b.text))
        },
        {
          text: "Recipes",
          items: [
            {
              text: "Keycloak",
              link: `/tutorials/keycloak`
            },
            {
              text: "Jest",
              link: `/tutorials/jest`
            },
            {
              text: "Vitest",
              link: `/tutorials/vitest`
            }
          ]
        },
        {
          text: "Plugins",
          items: [
            {
              text: "AJV",
              link: `/tutorials/ajv`
            },
            {
              text: "AWS",
              link: `/tutorials/aws`
            },
            {
              text: "Passport.js",
              link: `/tutorials/passport`
            },
            {
              text: "GraphQL",
              link: `/tutorials/graphql`
            },
            {
              text: "Socket.io",
              link: `/tutorials/socket-io`
            },
            {
              text: "Swagger",
              link: `/tutorials/swagger`
            },
            {
              text: "OIDC",
              link: `/tutorials/oidc`
            },
            {
              text: "Stripe",
              link: `/tutorials/stripe`
            },
            {
              text: "Agenda",
              link: `/tutorials/agenda`
            },
            {
              text: "Serverless",
              link: `/tutorials/serverless`
            },
            {
              text: "Temporal",
              link: `/tutorials/temporal`
            },
            {
              text: "BullMQ",
              link: `/tutorials/bullmq`
            },
            {
              text: "Terminus",
              link: `/tutorials/terminus`
            },
            {
              text: "Vike",
              link: `/tutorials/vike`
            },
            {
              text: "Server-sent events",
              link: `/tutorials/server-sent-events`
            }
          ].sort((a, b) => a.text.localeCompare(b.text))
        }
      ],
      "/api/": referenceSidebar
    },
    socialLinks: [
      {icon: "github", link: "https://github.com/tsedio/tsed"},
      {icon: "slack", link: "https://slack.tsed.io"},
      {icon: "twitter", link: "https://x.com/TsED_io"}
      // { icon: '', link: 'https://stackoverflow.com/search?q=tsed' },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Romain Lenzotti"
    }
  },
  markdown: {
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(apiAnchor);
    }
  },
  transformPageData(pageData) {
    const canonicalUrl = `https://tsed.dev/${pageData.relativePath}`
      .replace(/index\.md$/, "")
      .replace(/\.md$/, ".html");

    pageData.frontmatter.head ??= [];

    const has = pageData.frontmatter.head.find(([, meta]) => {
      return meta?.rel === "canonical" && meta?.href === canonicalUrl
    })

    if (!has) {
      pageData.frontmatter.head.push([
        "link",
        {rel: "canonical", href: canonicalUrl}
      ]);
    }
  }
});
