# Map

A Map object holds key-value pairs where both keys and values can be of any type. It remembers the original insertion order of the keys.

## Characteristics of Map

- **Key-Value Pairs:** Stores entries as key-value pairs.
- **Any Type of Keys:** Keys can be of any data type (objects, functions, primitives).
- **Order:** Maintains the insertion order of keys.
- **Iterable:** Supports iteration methods like `keys()`, `values()`, `entries()`, and `forEach()`.

## Common Methods

- **set(key, value):** Adds or updates an element with a specified key and value.
- **get(key):** Returns the value associated with the specified key, or `undefined` if the key is not found.
- **has(key):** Returns true if a value associated with the specified key exists, otherwise false.
- **delete(key):** Removes the element with the specified key.
- **clear():** Removes all elements from the Map.
- **size:** Returns the number of key-value pairs in the Map.
