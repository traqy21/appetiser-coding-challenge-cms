<template>
    <nav class="sidebar">
      <div class="sidebar-header">
        <a href="#" class="sidebar-brand">
          Ven<span>Dos</span>
        </a> 
        <div :class="sidebarClass" v-on:click.prevent="sidebarClick" id="div-main-sidebar-toggler" >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="sidebar-body" @mouseover="hoverSidebarBody" @mouseleave="leaveSidebarBody">
        <ul class="nav">
          <li class="nav-item nav-category">Sales & Inventory</li>
          <li :class="[currentPage.includes('main') ? activeClass: '', 'nav-item']" > 

            <router-link :to="{path:'/main'}" class="nav-link">
              <monitor-icon size="1.5x" ></monitor-icon> 
              <span class="link-title">Dashboard</span>
            </router-link>                                
          </li>

          <li class="nav-item" v-if="user_is_admin == 1">
            <a class="nav-link" data-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">              
              <box-icon size="1.5x" ></box-icon> 
              <span class="link-title">Inventory</span>
              <i class="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="emails">
              <ul class="nav sub-menu">
                <li class="nav-item">
                  <router-link :to="{path:'/categories'}" class="nav-link">
                    <list-icon size="1.5x" ></list-icon> 
                    <span class="link-title">Categories</span>
                  </router-link> 
                </li>
               <li class="nav-item">
                  <router-link :to="{path:'/products'}" class="nav-link">
                    <package-icon size="1.5x" ></package-icon> 
                    <span class="link-title">Products</span>
                  </router-link> 
                </li> 
              </ul>
            </div>
          </li> 
          <li class="nav-item"> 
            <router-link :to="{path:'/pos'}" class="nav-link">
              <cart-icon size="1.5x" ></cart-icon> 
              <span class="link-title">POS</span>
            </router-link>                                
          </li>
          <li :class="[currentPage.includes('orders') ? activeClass: '', 'nav-item']" v-if="user_is_admin == 1"> 
            <router-link :to="{path:'/orders'}" class="nav-link">
              <file-text-icon size="1.5x" ></file-text-icon> 
              <span class="link-title">Orders</span>
            </router-link>                                
          </li>

          <li :class="[currentPage.includes('sales') ? activeClass: '', 'nav-item']" v-if="user_is_admin == 1"> 
            <router-link :to="{path:'/sales'}" class="nav-link">
              <briefcase-icon size="1.5x" ></briefcase-icon> 
              <span class="link-title">Sales</span>
            </router-link>                                
          </li>  
          
          <li :class="[currentPage.includes('users') ? activeClass: '', 'nav-item']" v-if="user_is_admin == 1"> 
            <router-link :to="{path:'/users'}" class="nav-link">
              <users-icon size="1.5x" ></users-icon> 
              <span class="link-title">Users</span>
            </router-link>                                
          </li> 
           
        
        </ul>
      </div>
    </nav>
</template>

<script> 
import { mapState, mapMutations, mapGetters } from "vuex"; 
export default { 
  name: "side-bar",
  data() {
    let self = this;
    return {          
        user_is_admin: 0,
        activeClass: 'active',
        sidebarClass: "sidebar-toggler not-active"

    }
  },
  created() {    
      this.viewUser();   
  },

  computed: {
      ...mapState("merchant", ["user", "data"]), 

      currentPage(){
        return this.$route.path;
      }
  },
  methods: { 
      async viewUser(){ 
          await this.$store.dispatch("merchant/viewUser")
          .then(() => {
              
              let userObj = this.data.model;
                
              if(userObj != null){ 
                  this.user_is_admin = userObj.is_admin
              }
                  
          });   
      },

      sidebarClick(){ 
        if(this.sidebarClass == "sidebar-toggler active"){
          document.body.classList.remove('sidebar-folded')
          document.body.classList.add('sidebar-open')
          this.sidebarClass = "sidebar-toggler not-active"
        } else { 
           document.body.classList.add('sidebar-folded')
           this.sidebarClass = "sidebar-toggler active";


           if($('#nav-sidebar-id').data('value') == 1){
              document.body.classList.remove('sidebar-open')
              document.body.classList.remove('sidebar-folded')
              this.sidebarClass = "sidebar-toggler not-active"
           }
        } 
      },

      hoverSidebarBody(){
        if(this.sidebarClass == "sidebar-toggler active"){
          document.body.classList.add('open-sidebar-folded')
        } 
        
      },

      leaveSidebarBody(){
        if(this.sidebarClass == "sidebar-toggler active"){
          document.body.classList.remove('open-sidebar-folded')
        }
        
      }
      
  },
};
</script> 

    