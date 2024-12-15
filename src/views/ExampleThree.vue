<script setup lang="ts">
import ParentComponent from '@/components/example3/ParentComponent.vue'
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { codeParent, codeChild } from '@/components/example3/_code';

function highlighter(code: string) {
   // languages.<insert language> to return html with markup
  return highlight(code, languages.html, 'html');
}
</script>

<template>
  <main>
    <h1>3. Default Slot</h1>
    <p>The child component defines a slot for default content, and the parent provides that content.</p>
    <h2>Parent Component</h2>
    <div>
      <prism-editor
        class="my-editor"
        v-model="codeParent"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
    </div>
    <h2>Child Component</h2>
    <div>
      <prism-editor
        class="my-editor"
        v-model="codeChild"
        :highlight="highlighter"
        line-numbers
      ></prism-editor>
    </div>
    <h2>Output</h2>
    <ParentComponent />
  </main>
</template>

<style>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>
