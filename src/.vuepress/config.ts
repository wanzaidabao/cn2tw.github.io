import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/cn2tw_online/",

  lang: "zh-CN",
  title: "湾湾的二岸笔记 GoPass",
  description: "台湾人到大陆的生活指南",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
