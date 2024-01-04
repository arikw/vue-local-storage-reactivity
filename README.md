# vue-local-storage-reactivity

A Vue.js library that provides a reactive interface to the `localStorage` object.

## Installation

You can install the `vue-local-storage-reactivity` package using npm:

```
npm install vue-local-storage-reactivity
```

## Compatibility
The vue-local-storage-reactivity package is compatible with Vue.js 2.6+ and 3.x

## Usage

To use the `vue-local-storage-reactivity` package, you need to import and use it as follows:

```javascript
import reactiveLocalStorage from "vue-local-storage-reactivity";
```

The `reactiveLocalStorage` object provides a reactive interface to the `localStorage` object that holds the `localStorage` data that can be updates automatically when the storage gets changed on other tabs.

Here's an example of how to use the `reactiveLocalStorage` object in a Vue.js component:

```javascript
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="++count">Increment Count</button>
  </div>
</template>

<script>
import reactiveLocalStorage from 'vue-local-storage-reactivity';

export default {
  setup() {
    return {
      count: Vue.toRef(reactiveLocalStorage, 'count')
    };
  }
};
</script>
```

## License

The `vue-local-storage-reactivity` package is open source software licensed under the [MIT license](https://opensource.org/licenses/MIT).