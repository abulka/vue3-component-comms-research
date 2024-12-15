### **1. Parent to Child Communication (Props)**

The **parent component** passes data to the **child component** via **props**.

#### Parent Component
```vue
<script setup>
import ChildComponent from './ChildComponent.vue';
const message = "Hello from Parent!";
</script>

<template>
  <ChildComponent :greeting="message" />
</template>
```

#### Child Component
```vue
<script setup>
defineProps({
  greeting: String,
});
</script>

<template>
  <div>{{ greeting }}</div>
</template>
```

---

### **2. Child to Parent Communication (Emit Events)**

The **child component** sends data to the **parent** using `emit`.

#### Parent Component
```vue
<script setup>
import ChildComponent from './ChildComponent.vue';

function handleEventFromChild(data) {
  console.log("Received from Child:", data);
}
</script>

<template>
  <ChildComponent @customEvent="handleEventFromChild" />
</template>
```

#### Child Component
```vue
<script setup>
const emit = defineEmits(['customEvent']);

function sendToParent() {
  emit('customEvent', 'Hello from Child!');
}
</script>

<template>
  <button @click="sendToParent">Send to Parent</button>
</template>
```

---

### **3. Default Slot**

The **child component** defines a slot for default content, and the **parent** provides that content.

#### Parent Component
```vue
<script setup>
import ChildComponent from './ChildComponent.vue';
</script>

<template>
  <ChildComponent>
    <p>This is default slot content from Parent!</p>
  </ChildComponent>
</template>
```

#### Child Component
```vue
<script setup>
</script>

<template>
  <div>
    <slot></slot> <!-- This renders the content provided by the parent -->
  </div>
</template>
```

---

### **4. Named Slots**

Named slots allow the **parent** to provide multiple pieces of content, each with a specific name.

#### Parent Component
```vue
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
```

#### Child Component
```vue
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
```

---

### **5. Scoped Slots**

Scoped slots let the **child component** pass data to the **parent** via slots.

#### Parent Component
```vue
<script setup>
import ChildComponent from './ChildComponent.vue';
</script>

<template>
  <ChildComponent>
    <template #default="{ info }">
      <p>Received from Child: {{ info }}</p>
    </template>
  </ChildComponent>
</template>
```

#### Child Component
```vue
<script setup>
</script>

<template>
  <slot :info="'Hello from Child!'"></slot>
</template>
```

---

### **Putting It All Together**

Combining all these concepts:

#### Parent Component
```vue
<script setup>
import ChildComponent from './ChildComponent.vue';

function handleChildEvent(data) {
  console.log("Received from Child:", data);
}
</script>

<template>
  <ChildComponent :propData="'Hello Child!'" @childEvent="handleChildEvent">
    <template #header>
      <h1>Header Slot</h1>
    </template>
    <template #default="{ childMessage }">
      <p>Scoped Slot Message: {{ childMessage }}</p>
    </template>
    <template #footer>
      <p>Footer Slot</p>
    </template>
  </ChildComponent>
</template>
```

#### Child Component
```vue
<script setup>
defineProps(['propData']);
const emit = defineEmits(['childEvent']);

function sendEvent() {
  emit('childEvent', 'Hello Parent!');
}
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <p>Prop Data: {{ propData }}</p>
      <button @click="sendEvent">Send to Parent</button>
      <slot :childMessage="'This is from Child Scoped Slot'"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```