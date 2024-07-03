export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"项目主页","i":"home"} }],
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"档案主页","i":"home"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"指南","i":"lightbulb"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "guide_foo_index.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"t":"Foo 功能","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "guide_foo_ray.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"Bar 功能","i":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "guide_bar_baz.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/data/home/gitrepo/cn2tw.online/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
