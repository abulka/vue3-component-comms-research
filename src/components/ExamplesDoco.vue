<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { VueShowdown } from 'vue-showdown'
import 'github-markdown-css/github-markdown.css';

// Method 1: Using fetch for local public directory markdown
const markdownContent = ref('')

onMounted(async () => {
  try {
    // Assuming the markdown file is in the public folder
    const response = await fetch('/examples-doco.md')
    markdownContent.value = await response.text()
  } catch (error) {
    console.error('Error loading markdown:', error)
  }
})


</script>

<template>
  <h1>Communication between components in Vue 3</h1>
  <p>Demo and explanation of different ways to communicate between Vue 3 components. </p>
  <p>Covers the following techniques:</p>
  <ul>
    <li>1. Parent to Child Communication (Props)</li>
    <li>2. Child to Parent Communication (Emit Events)</li>
    <li>3. Default Slot</li>
    <li>4. Named Slots</li>
    <li>5. Scoped Slots</li>
    <li>6. Putting It All Together</li>
  </ul>

  <p>Based on insights gathered in conjunction with <a href="https://chatgpt.com/share/675ea719-6418-8005-9aa5-5e4c1a0560c7">this ChatGPT discussion</a></p>

  <h2>1. Parent to Child Communication (Props)</h2>
  <RouterLink to="/example1">Example 1. Parent to Child Communication (Props)</RouterLink>
  <p>Props are the primary mechanism for passing data from a parent component to a child in Vue. They allow you to
    define what data the child expects and ensure a clear contract for communication. This technique is best used when
    the parent has static or dynamic data it needs to make available to a child component, such as configuration
    options, text, or values that the child depends on to render correctly. Use this when you want one-way data flow,
    ensuring the parent maintains control of the data, and the child simply uses it.</p>

  <h2>2. Child to Parent Communication (Emit Events)</h2>
  <RouterLink to="/example2">Example 2. Child to Parent Communication (Emit Events)</RouterLink>
  <p>Emitting events is the standard approach for sending data from a child component back to its parent. This
    technique is ideal when the child performs actions (e.g., button clicks, form submissions, or user interactions)
    and needs to notify the parent of these changes. By emitting events, the child remains decoupled from the parent's
    logic, fostering reusability and maintainability. Use this approach when the parent needs to be aware of or react
    to user interactions happening within the child component.</p>

  <h2>3. Default Slots</h2>
  <RouterLink to="/example3">Example 3. Default Slot</RouterLink>
  <p>Default slots allow a parent to provide generic content that the child will render. They are particularly useful
    when you want the child to act as a container for dynamic content while maintaining control over its structure and
    styling. This approach is best for creating reusable layout components like cards, modals, or containers where the
    child component provides the framework, but the parent controls the specific content. Use default slots when you
    want flexibility in injecting content but don't need named or scoped slots.</p>

  <h2>4. Named Slots</h2>
  <RouterLink to="/example4">Example 4. Named Slots</RouterLink>
  <p>Named slots extend the flexibility of default slots by enabling the parent to define multiple distinct pieces of
    content for the child, each with its own role or placement. For example, you can use named slots for layouts where
    you want to customize the header, body, and footer of a component independently. This approach is ideal for
    components that act as templates or containers, allowing for fine-grained control over specific sections. Use
    named slots when the child has multiple regions or sections that the parent needs to customize separately.</p>

  <h2>5. Scoped Slots</h2>
  <RouterLink to="/example5">Example 5. Scoped Slots</RouterLink>
  <p>Scoped slots allow child components to expose data or functionality to the parent via the slot's scope, creating
    a two-way flow of information. This is especially useful for complex components like lists, tables, or grids,
    where the child manages the structure or logic but the parent needs to customize how individual items are
    displayed. Use scoped slots when the parent requires access to dynamic data or helper functions from the child to
    render its content correctly. This technique ensures a clean separation of responsibilities while still providing
    customization.</p>
    <br>
    <h3>Tip: When to Use Each</h3>
    <p><u>Named Slots:</u> Use when you need <u>static</u>, labeled placeholders for content. For example, defining reusable layouts like a modal, card, or template with header, body, and footer sections.</p>
    <p><u>Scoped Slots:</u> Use when the child has <u>dynamic data</u> that the parent needs access to in order to customize the display. For example, when building components like lists, grids, or tables, where the child manages the structure but the parent customizes how the data is displayed.</p>
  <ul>
    <li>Named Slots = Labeled static containers.</li>
    <li>Scoped Slots = Child shares dynamic data with the parent for customized rendering. The "scope" is the data exposed from the child.</li>
  </ul>

  <h2>Putting It All Together</h2>
  <RouterLink to="/example9">Example 9. Putting it all together</RouterLink>
  <p>Combining these techniques provides a flexible and powerful way to handle different communication needs in your
    application. The parent-to-child props and child-to-parent events establish a solid base for one-way and two-way
    communication, while slots add a layer of customization by allowing parents to control child-rendered content
    dynamically. Named slots are excellent for modular designs with multiple customizable sections, and scoped slots
    shine when sharing dynamic data from the child to the parent. Use a combination of these techniques when building
    reusable, maintainable, and dynamic Vue components that balance encapsulation and customization effectively.</p>



    <div class="markdown-body">
    <br>
    <h1>More Discussion re slots</h1>
    <!-- set options via props -->
    <VueShowdown
      :markdown="markdownContent"
      flavor="github"
      :options="{ emoji: true }"
    />
  </div>
</template>

<style scoped>
@import 'github-markdown-css/github-markdown.css';

</style>
