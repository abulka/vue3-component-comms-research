<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';

function handleEventFromChild(data: string) {
  console.log("Received from Child:", data);
}
</script>

<template>
  <ChildComponent @customEvent="handleEventFromChild" />
</template>
