function division (a,b){
    if (b === 0){
        throw new Error("Division by zero is not allowed")
    }else{
        return a/b;
    }
}

try{
    let result = division(5,0);
    console.log(result);
}catch(error){
    console.log("An unknown error occured ", error.message);
}