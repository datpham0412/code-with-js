function sum (){
    const args = Array.prototype.slice.call(arguments);
    return args.reduce((total, num) => total + num, 0);
}


console.log(sum(1,2,3,4)); // Output: 10