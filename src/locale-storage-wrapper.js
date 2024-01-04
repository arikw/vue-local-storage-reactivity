import Vue from 'vue';

const hashCode = s => s.split('').reduce((a, b) => (((a << 5) - a) + b.charCodeAt(0)) | 0, 0);
const keyShortner = (keyName) => (keyName.length > 40) ? `___${hashCode(keyName)}___` : keyName;

const reactive = Vue.shallowReactive ? Vue.shallowReactive : Vue.observable;
const set = Vue.set ? Vue.set : Reflect.set;

let counter = 0;
const reactiveNotifier = reactive({});

const getItem = (keyName) => localStorageProxy[keyName];
const setItem = (keyName, value) => set(localStorageProxy, keyName, value);
const removeItem = (keyName, value) => set(localStorageProxy, keyName, null);

const localStorageProxy = new Proxy({}, {
  get(_, keyName) {
    if (keyName === 'getItem') { return getItem; }
    if (keyName === 'setItem') { return setItem; }
    if (keyName === 'removeItem') { return removeItem; }
    
    const shortKeyName = keyShortner(keyName);
    if (Reflect.get(reactiveNotifier, shortKeyName) === undefined) {
      set(reactiveNotifier, shortKeyName, ++counter);
    }
    return window.localStorage.getItem(keyName);
  },

  set(_, keyName, value) {
    const shortKeyName = keyShortner(keyName);
    if (value !== null) {
      window.localStorage.setItem(keyName, value);
    } else {
      window.localStorage.removeItem(keyName);
    }
    return set(reactiveNotifier, shortKeyName, ++counter);
  },

  ownKeys(_) {
    return Reflect.ownKeys(localStorage);
  },

  getOwnPropertyDescriptor(_, prop) {
    return Reflect.getOwnPropertyDescriptor(localStorage, prop);
  },

  has(_, key) {
    return Reflect.has(localStorage, key);
  }
});

window.addEventListener('storage', ({ key }) => set(reactiveNotifier, keyShortner(key), ++counter));

export default localStorageProxy;