<script setup lang="ts">
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

