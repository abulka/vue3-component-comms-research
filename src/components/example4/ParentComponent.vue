<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';
</script>

<template>
  <ChildComponent>
    <template #header>
      <h1>Header from Parent</h1>
    </template>
    <template #footer>
      <p>Footer from Parent</p>
    </template>
  </ChildComponent>
</template>


