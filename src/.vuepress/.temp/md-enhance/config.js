import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14_@vuepress+bund_pk75zj25wgkzvhjhwybo6vefsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.37_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@types+n_hrgzwmrxoktik2qy5zoukyn5gq/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14_@vuepress+bund_pk75zj25wgkzvhjhwybo6vefsa/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14_@vuepress+bund_pk75zj25wgkzvhjhwybo6vefsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14_@vuepress+bund_pk75zj25wgkzvhjhwybo6vefsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14_@vuepress+bund_pk75zj25wgkzvhjhwybo6vefsa/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHintContainers } from "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14_@vuepress+bund_pk75zj25wgkzvhjhwybo6vefsa/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14_@vuepress+bund_pk75zj25wgkzvhjhwybo6vefsa/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14_@vuepress+bund_pk75zj25wgkzvhjhwybo6vefsa/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/@mdit+plugin-spoiler@0.12.0_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "/data/home/gitrepo/cn2tw.online/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.50_markdown-it@14.1.0_vuepress@2.0.0-rc.14_@vuepress+bund_pk75zj25wgkzvhjhwybo6vefsa/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
