# vue3-component-comms-research

Demo and explanation of different ways to communicate between Vue 3 components.  This covers the following techniques:
1. Parent to Child Communication (Props)
2. Child to Parent Communication (Emit Events)
3. Default Slot
4. Named Slots
5. Scoped Slots
6. Putting It All Together


  <p>Based on insights gathered in conjunction with <a href="https://chatgpt.com/share/675ea719-6418-8005-9aa5-5e4c1a0560c7">this ChatGPT discussion</a></p>

# Run the app and see:

![screenshot](/doco/screenshot.png)

You can then visit the pages for each communication technique to see the examples in action.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
