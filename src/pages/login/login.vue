<template>
    <div class="login relative w-full h-full px-4">
        <div class="container relative h-full mx-auto sm:px-10">
            <div class="flex h-full">
                <div class="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"></div>
            </div>
            <div class="w-5 h-5">
                <img class="w-2 h-2" src="https://vvbin.cn/next/assets/login-box-bg.9027741f.svg" alt="">
            </div>
            <div class="flex-1">

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// import 
</script>

<style lang="scss">
.login {
    width: 100vw;
    height: 100vh;
   &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin-left: -48%;
        background-image: url(https://vvbin.cn/next/assets/login-bg.b9f5c736.svg);
        background-position: 100%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        content: "";
   }
}
</style>