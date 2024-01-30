<template>
  <div></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  setInterval(async () => {
    const count = await storage.getItem<number>('local:count');
    document.querySelectorAll('.title').forEach((el) => {
      el.innerHTML = `我爱掘金${count}次`;
    });
  }, 1000);
});
</script>