<template>
    <el-container>
        <el-aside width="10vw">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
    <div class="flex item-center bg-sky-200 justify-center">
        <span class="caret-yellow-300">123</span>
    </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
 const msg = ref<string>("131")
</script>
<style scoped>
</style>