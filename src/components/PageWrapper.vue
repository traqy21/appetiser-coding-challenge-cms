<template>
    <div :class="['page-wrapper', type]">
        <nav-menu v-if="type != 'full-page'"></nav-menu>
        <page-content :classes="contentClasses"></page-content> 
    </div>
</template>

<script> 
export default { 
    name: "page-wrapper",
    props:{
        type: String,
        contentClasses: String
    }
};
</script> 

    