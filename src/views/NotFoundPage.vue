<template>
 
    <div class="row w-100 mx-0 auth-page">
        <div class="col-md-8 col-xl-6 mx-auto d-flex flex-column align-items-center">
            <img src="/assets/images/404.svg" class="img-fluid mb-2" alt="404">
            <h1 class="font-weight-bold mb-22 mt-2 tx-80 text-muted">404</h1>
            <h4 class="mb-2">Page Not Found</h4> 
            <router-link :to="{path:'/'}">Oopps!! The page you were looking for doesn't exist.</router-link>                                
        </div>
    </div>
 
</template>

<script>
export default {
  name: 'register-merchant', 
}
</script> 