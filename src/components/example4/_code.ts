export const codeParent = `
<script setup>
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

`;

export const codeChild = `
<script setup>
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <p>Main content goes here</p>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

`;

