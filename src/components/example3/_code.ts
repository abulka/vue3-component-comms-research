export const codeParent = `
<script setup>
import ChildComponent from './ChildComponent.vue';
</script>

<template>
  <ChildComponent>
    <p>This is default slot content from Parent!</p>
  </ChildComponent>
</template>
`;

export const codeChild = `
<script setup>
</script>

<template>
  <div>
    slot: <slot></slot> <!-- This renders the content provided by the parent -->
  </div>
</template>
`;

