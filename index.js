function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return (function spy(){return "Hello world!"});
}

function returnsAnAnonymousFunction(){
    return function () {
        
    }
}