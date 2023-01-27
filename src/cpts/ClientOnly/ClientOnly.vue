<script lang="ts" setup>
import {ref, onMounted} from "vue";

const SSR = ref(false);
onMounted(() => {
  SSR.value = true;
});
</script>
<template>
  <template v-if="SSR">
    <slot/>
  </template>
</template>
