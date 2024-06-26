export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "天地人",
  /** your name */
  author: "贵棠",
  /** website description */
  desc: "中医、伤寒论、传统文化、计算机、物理、古典音乐",
  /** your deployed domain */
  website: "https://www.jiayuguo.homes/",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/moeyua/astro-theme-typography",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "twitter",
      href: "https://twitter.com/Evan360728392",
    },
    {
      name: "mastodon",
      href: "/sitemap-0.xml",
    }
  ],
  /** your header info */
  header: {
    twitter: "@Evan360728392",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "胡适", path: "hu-shi" },
    { name: "古中医", path: "chinese-traditional-medicine" },
  ],
  /** your comment provider */
  comments: {
    disqus: {
      shortname: "https-www-jiayuguo-homes",
    },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  }
}

