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
