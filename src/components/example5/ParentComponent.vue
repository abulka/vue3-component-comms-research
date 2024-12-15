<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';
</script>

<template>
  <ChildComponent>
    <template #default="{ info }">
      <p>Received from Child: {{ info }}</p>
    </template>
  </ChildComponent>
</template>

