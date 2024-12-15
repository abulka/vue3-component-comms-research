<script setup lang="ts">
import ParentComponent from '@/components/example1/ParentComponent.vue'
</script>

<template>
  <main>
    <h1>1. Parent to Child Communication (Props)</h1>
    <p>The parent component passes data to the child component via props.</p>
    <div>
      <code>
        Blah
      </code>
    </div>

    <ParentComponent />
  </main>
</template>
