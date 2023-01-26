<script lang="ts" setup>
import { ref, nextTick, onMounted } from "vue";
const SSR = ref(false);
onMounted(() => {
  nextTick(() => {
    SSR.value = true;
  });
});
</script>
<template>
  <template v-if="SSR">
    <slot />
  </template>
</template>
