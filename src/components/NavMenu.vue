<template> 
        <nav class="navbar">
            <a href="#" :class="navSidebarClass" v-on:click.prevent="navSidebarClick" id="nav-sidebar-id" :data-value="dataValue"> 
                 <menu-icon size="1.5x" ></menu-icon>        
            </a> 
        </nav> 
</template>

<script> 
import { mapState, mapMutations, mapGetters } from "vuex"; 
export default { 
    name: "nav-menu", 
};
</script> 

    