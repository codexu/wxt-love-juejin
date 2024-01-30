<template>
  <div>
    我爱掘金{{ count }}次
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const count = ref(0);

onMounted(() => {
  setInterval(async () => {
    count.value = await storage.getItem<number>('local:count') || 0;
  }, 1000);
});
</script>