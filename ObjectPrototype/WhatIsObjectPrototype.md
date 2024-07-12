# Object Prototype

## Definition:

- Every JavaScript object has an internal property called `[[Prototype]]`, which points to another object. This is referred to as the object's prototype.
- The prototype object is used to share properties and methods among multiple instances.

## Usage:

- The prototype is accessed using the `__proto__` property or through methods like `Object.getPrototypeOf` and `Object.setPrototypeOf`.
- Constructor functions have a `prototype` property that is used to define properties and methods that should be inherited by instances created by that constructor.
