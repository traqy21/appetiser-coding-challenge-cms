<template>
  <div class="card">
    <div class="card-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="card-header" v-if="$slots.header || title">
      <div class="row clearfix">
          <div class="col-md-10">
            <slot name="header">
              <h4 class="card-title">{{title}}</h4>
              <p class="card-category" v-if="subTitle">{{subTitle}}</p>            
            </slot>
            
          </div>

          <div class="col-md-2" v-if="backButton === true"> 
              <b-button  block variant="default btn-table-add" @click.prevent="back()"  ><span class="ti-arrow-left"></span> Back</b-button>
          </div>  
      </div>
      
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
    <slot name="raw-content"></slot>
    <div class="card-footer" v-if="$slots.footer">
      <hr>
      <slot name="footer"></slot>
    </div>
  </div>
  
</template>
<script>
export default {
  name: "card",
  props: {
    title: String,
    subTitle: String,
    backButton: Boolean,
    backRoutes: String, 
    backData: Object
  },

  data() { 
    return {

    }
  },
  methods: {
    
    back(){           
      this.$router.push({
        path: this.backRoutes,
        query: this.backData
      });
    },
  }
};
</script>
<style>
</style>
