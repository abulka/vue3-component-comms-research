export const codeParent = `
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

`;

export const codeChild = `
<script setup lang="ts">
defineProps(['propData']);
const emit = defineEmits(['childEvent']);

function sendEvent() {
  emit('childEvent', 'Hello Parent!');
}
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <p>Prop Data: {{ propData }}</p>
      <button @click="sendEvent">Send to Parent</button>
      <slot :childMessage="'This is from Child Scoped Slot'"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

`;

