let num = 123;
let str = "123";
console.log(num == str); // true, because it implicitly converts str to number before comparision
console.log(num === str); // false, because it does not convert str to number before comparision