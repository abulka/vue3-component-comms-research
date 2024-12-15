export const codeParent = `
<script setup>
import ChildComponent from './ChildComponent.vue';
const message = "Hello from Parent!";
</script>

<template>
  <ChildComponent :greeting="message" />
</template>
`;

export const codeChild = `
<script setup>
defineProps({
  greeting: String,
});
</script>

<template>
  <div>{{ greeting }}</div>
</template>
`;

