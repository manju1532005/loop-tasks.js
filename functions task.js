//odd or even
function Even(num) {
    return num % 2 === 0;}

function Odd(num) {
    return num % 2 !== 0;
}
console.log(Even(5));  
console.log(Even(3));  
console.log(Odd(1));   
console.log(Odd(6));   

//for loop
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//factorial
function factorial(a) {
    if (a < 0) {
        return "not defined";
    }
    let final = 1;
    for (let i = 2; i <= a; i++) {
        final *= i;
    }
    return final;
}
console.log(factorial(3)); 
console.log(factorial(1));
console.log(factorial(2)); 

//sum
function sum(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sum(20)); 
console.log(sum(10)); 
console.log(sum(0));  


//even
function Even(a) {
    for (let i = 1; i <= a; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
Even(20); 
Even(17); 
