<template>
    <div :class="['page-content', classes]">  
        <router-view></router-view>
    </div>
</template>

<script> 
export default { 
    name: "page-content",
    props: {
        classes: String
    }
};
</script> 

    