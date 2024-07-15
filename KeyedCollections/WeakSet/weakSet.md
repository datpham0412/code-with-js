# WeakSet

A WeakSet is a collection of objects. Like a Set, each value must be unique, but WeakSet only accepts objects as values, not primitive values. WeakSet objects are not iterable and do not maintain the insertion order of the elements.

## Characteristics of WeakSet

- **Only Objects:** A WeakSet can only contain objects.
- **No Duplicates:** Each object in a WeakSet must be unique.
- **Weak References:** Objects in a WeakSet are held weakly, meaning that if there are no other references to an object, it can be garbage collected.
- **Non-Iterable:** WeakSet objects are not iterable and do not have methods to iterate over elements.

## Common Methods

- **add(value):** Adds a new object to the WeakSet.
- **delete(value):** Removes the specified object from the WeakSet.
- **has(value):** Returns true if the WeakSet contains the specified object, otherwise false.
