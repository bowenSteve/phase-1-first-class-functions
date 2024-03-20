const cbFunction = function(){
    return 'Hello';
}

function receivesAFunction(cbFunction){
    return cbFunction();
}
function returnsANamedFunction(){
    function named (){
        console.log('');
    }
    return named;
}
 function returnsAnAnonymousFunction(){
    return function(){
        return 2+2;
    }
 }