<template>
    <div class="action" @click="goHome">
        <img src="../../../assets/images/logo.png" >
        <div class="ml-2 md:opacity-100" v-show="showTitle">
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