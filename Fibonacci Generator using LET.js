// This creates a function using "let" that will accept a number as input 'n' for the number of elements to create in the Fibonacci array. //

function fibonacciGenerator(n){

	let fibonacciArray = [0, 1];

    if(n === 1){
        return [0];
    }
    
    else if(n === 2){
        return fibonacciArray;
    }
 
    else if(n > 2){
        for (let i = 0; i <= n - 3; ++i){
        let nextEle = fibonacciArray[i] + fibonacciArray[i + 1];
        fibonacciArray.push(nextEle);
    }
    return fibonacciArray;
    }
 
}