<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/example1">Example 1. Parent to Child Communication (Props)</RouterLink>
        <RouterLink to="/example2">Example 2. Child to Parent Communication (Emit Events)</RouterLink>
        <RouterLink to="/example3">Example 3. Default Slot</RouterLink>
        <RouterLink to="/example4">Example 4. Named Slots</RouterLink>
        <RouterLink to="/example5">Example 5. Scoped Slots</RouterLink>
        <RouterLink to="/example9">Example 9. Putting it all together</RouterLink>
        <!-- <RouterLink to="/prism-demo">Prism Syntax Highlighting Demo</RouterLink> -->
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>


.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
