<script setup lang="ts">
const emit = defineEmits(['customEvent']);

function sendToParent() {
  emit('customEvent', 'Hello from Child!');
}
</script>

<template>
  <button @click="sendToParent">Send to Parent</button>
</template>
