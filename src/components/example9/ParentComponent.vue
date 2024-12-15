<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';

function handleChildEvent(data: string) {
  console.log("Received from Child:", data);
}
</script>

<template>
  <p>Parent component BEGINS</p>
  <ChildComponent :propData="'Hello Child!'" @childEvent="handleChildEvent">
    <template #header>
      <h1>Header Slot</h1>
    </template>
    <template #default="{ childMessage }">
      <p>Scoped Slot Message: {{ childMessage }}</p>
    </template>
    <template #footer>
      <p>Footer Slot</p>
    </template>
  </ChildComponent>
  <p>Parent component ENDS</p>
</template>
