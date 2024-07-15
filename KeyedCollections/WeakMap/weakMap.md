# WeakMap

A WeakMap object holds key-value pairs where the keys must be objects and the values can be arbitrary values. The key feature of a WeakMap is that it does not prevent its keys from being garbage collected.

## Characteristics of WeakMap

- **Object Keys Only:** Keys must be objects.
- **No Duplicates:** Keys must be unique.
- **Weak References:** Objects in a WeakMap are held weakly, meaning that if there are no other references to an object, it can be garbage collected.
- **Non-Iterable:** Does not support iteration and does not expose methods like `keys()`, `values()`, or `entries()`.

## Common Methods

- **set(key, value):** Adds or updates an element with a specified key and value.
- **get(key):** Returns the value associated with the specified key, or `undefined` if the key is not found.
- **has(key):** Returns true if a value associated with the specified key exists, otherwise false.
- **delete(key):** Removes the element with the specified key.
