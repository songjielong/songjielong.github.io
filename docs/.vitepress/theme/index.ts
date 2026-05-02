import BlogTheme from '@sugarat/theme'

// 自定义样式重载
import './style.css'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

// 自定义主题色
// import './user-theme.css'

export default {
  ...BlogTheme,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.use(ArcoVue);
  },
};
