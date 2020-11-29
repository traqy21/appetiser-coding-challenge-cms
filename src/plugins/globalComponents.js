import { 
  Sidebar, 
  PageWrapper, 
  NavMenu, 
  PageContent, 
  Footer,

  Card
} from "../components/index";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("side-bar", Sidebar); 
    Vue.component("page-wrapper", PageWrapper); 
    Vue.component("nav-menu", NavMenu);
    Vue.component("page-content", PageContent);
    Vue.component("page-footer", Footer);

    Vue.component("card", Card);
  }
};

export default GlobalComponents;
