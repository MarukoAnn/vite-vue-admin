<template>
    <div class="action flex align-center" @click="goHome">
        <img style="width:48px" src="../../../assets/images/logo.png" >
        <div class="ml-2 truncate md:opacity-100 logo-title text-5xl font-bold" v-show="showTitle">
            {{title}}
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'

const props = defineProps({
    showTitle: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: ""
    }
})

const title = 'AnAdmin'

const goHome = () => {

}

</script>

<style scoped lang="scss">
.action {
    .logo-title{
        font-size: 24px;
        color: #fff;
        display: flex;
        align-items: center;
    }
}

</style>