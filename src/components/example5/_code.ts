export const codeParent = `
<script setup>
import ChildComponent from './ChildComponent.vue';
</script>

<template>
  <ChildComponent>
    <template #default="{ info }">
      <p>Received from Child: {{ info }}</p>
    </template>
  </ChildComponent>
</template>

`;

export const codeChild = `
<script setup>
</script>

<template>
  <slot :info="'Hello from Child!'"></slot>
</template>

`;

