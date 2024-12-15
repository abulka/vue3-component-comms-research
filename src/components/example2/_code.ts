export const codeParent = `
<script setup>
import ChildComponent from './ChildComponent.vue';

function handleEventFromChild(data) {
  console.log("Received from Child:", data);
}
</script>

<template>
  <ChildComponent @customEvent="handleEventFromChild" />
</template>
`;

export const codeChild = `
<script setup>
const emit = defineEmits(['customEvent']);

function sendToParent() {
  emit('customEvent', 'Hello from Child!');
}
</script>

<template>
  <button @click="sendToParent">Send to Parent</button>
</template>
`;

