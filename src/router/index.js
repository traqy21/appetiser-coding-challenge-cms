import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout.vue";  
import NotFound from "@/views/NotFoundPage.vue";

Vue.use(VueRouter);


export default new VueRouter({
  mode: "history",  
  linkActiveClass: "active",
  routes: [  
    {
      path: "/",
      component: DashboardLayout,   
      redirect: "/main",
      children: [ 
        {
          path: "events",
          name: "events",
          component: () => import("@/views/Events.vue"),
          meta: {
              requireAuth: false
          }, 
        },  
      ]
    },

    { path: "*", component: NotFound } 
  ],

});