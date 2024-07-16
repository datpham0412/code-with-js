class CustomError extends Error{
    constructor(message){
        super(message)
        this.name = 'CustomError';
    }
}

function doSomeThing(){
    throw new CustomError("Something went wrong!");
}

try{
    doSomeThing();
}catch (error){
    console.log(`${error.name}: ${error.message}`);
}