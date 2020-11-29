import Vue from 'vue'
import App from './App.vue'

import router from "./router/index";
import store from "./store";
import BootstrapVue from "bootstrap-vue";    
import NobleUI from "./plugins/NobleUI";    
   
Vue.use(NobleUI);
Vue.use(BootstrapVue);     

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    next(); 
});

/* eslint-disable no-new */  
new Vue({
router,
store,
render: h => h(App)
}).$mount("#app");
