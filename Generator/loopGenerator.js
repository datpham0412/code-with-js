function* countDownGenerator(start){
    while (start >= 0){
        yield start --;
    }
}

// Using the generator with a for ...of loop
for (const value of countDownGenerator(5)){
    console.log(value); // Output: 5 4 3 2 1 0
}