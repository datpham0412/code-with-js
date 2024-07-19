function sum (){
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

console.log(sum(1,2,3,4)); // Output: 10
console.log(sum(5,10)); // Output: 15