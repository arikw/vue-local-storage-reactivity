# vue-local-storage-reactivity

A Vue.js library that provides a reactive interface to the `localStorage` object.

## Installation

You can install the `vue-local-storage-reactivity` package using npm:

```
npm install vue-local-storage-reactivity
```

## Compatibility
The vue-local-storage-reactivity package is compatible with Vue.js 2.6+ and 3.x

## Features
Here are some advantages of the 'vue-reactive-local-storage' package:

- Does not require you to state what `localStorage` keys are of interest beforehand
- Reacts to `localStorage` changes done on other tabs
- Reacts to new keys as they are added to the `localStorage`
- Compatible with both Vue.js 2.6 and Vue.js 3.x, so it can be used in a wide range of Vue.js applications
- Tiny package size
- Zero-dependencies

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