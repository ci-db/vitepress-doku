<template>
    <button @click="onClick">Increase</button>
    <text>{{count}}</text>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
const onClick = ():void => {
    console.log("test");
    count.value++
}
</script>