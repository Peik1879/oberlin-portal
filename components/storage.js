/**
 * Lokaler Storage Wrapper
 * Vereinfacht Speichern/Laden mit try/catch für localStorage
 */
const Storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error("Storage.set() fehlgeschlagen:", e);
      return false;
    }
  },

  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error("Storage.get() fehlgeschlagen:", e);
      return defaultValue;
    }
  },

  list: (prefix = "") => {
    try {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!prefix || key.startsWith(prefix)) {
          result.push({
            key,
            value: JSON.parse(localStorage.getItem(key)),
          });
        }
      }
      return result;
    } catch (e) {
      console.error("Storage.list() fehlgeschlagen:", e);
      return [];
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error("Storage.remove() fehlgeschlagen:", e);
      return false;
    }
  },

  clear: (prefix = "") => {
    try {
      if (!prefix) {
        localStorage.clear();
        return true;
      }
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) keys.push(key);
      }
      keys.forEach((k) => localStorage.removeItem(k));
      return true;
    } catch (e) {
      console.error("Storage.clear() fehlgeschlagen:", e);
      return false;
    }
  },
};
