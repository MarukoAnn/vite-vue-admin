<template>
    <div class="login relative w-full h-full px-4">
        <div class="container relative h-full py-2 mx-auto sm:px-10">
            <div class="flex h-full">
                <div class="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12">
                    <AppLogoVue class="mt-20" />
                    <div class="my-auto">
                        <img class="w-1/2 mt-2 mr-2 image" src="https://vvbin.cn/next/assets/login-box-bg.9027741f.svg" alt="">
                        <div class="mt-10 font-medium text-white -enter-x">
                            <span class="inline-block mt-4 text-3xl">开箱即用的中后台管理系统</span>    
                        </div>
                        <div class="mt-5 font-normal text-white dark:text-gray-500">
                            输入您的个人信息开始使用
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div class="flex-1">

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppLogoVue from '../../components/Application/src/AppLogo.vue';
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
   .my-auto {
       .image {
           width: 268px;
       }
   }
}
</style>