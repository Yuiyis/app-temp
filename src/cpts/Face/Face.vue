<script lang="ts" setup>
 import {onMounted} from "vue";
interface Props{
  title:string
  max:number
}
defineProps<Props>()
 onMounted(() => {
   console.log("test");
 });
</script>

<template>
  <div class="test">
    <slot/>
  </div>
</template>
