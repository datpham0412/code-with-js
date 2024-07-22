"use strict";
var obj = {};
Object.defineProperties(obj, "x", { value: 42, writable: false });
obj.x = 9; // Throws a TypeError;
