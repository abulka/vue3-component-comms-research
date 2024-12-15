<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';
const message = "Hello from Parent!";
</script>

<template>
  <ChildComponent :greeting="message" />
</template>
