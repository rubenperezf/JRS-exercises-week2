//Recursion

//1. Write a JavaScript program to calculate the factorial of a number.
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial (n) {
    if(n<=1) {
        return n;
    }
    return n*factorial(n-1)
}
console.log(factorial(10))
//2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function gcd (num1, num2) {
    let newArray =[];
    for(i=0;i<num2;i++) {
        if(num1%i===0 && num2%i===0) {
        newArray.push(i)
        } 
    }  return newArray[newArray.length-1]
    
}
console.log(gcd(2,4))

function gcd2 (num1, num2) {
    if (num2==0) {
        return num1
    }return gcd2(num2,num1%num2);
}
console.log(gcd2(36,60))




//3. Write a JavaScript program to get the integers in range (x, y).
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]
function range2 (x,y) {
    let newArray =[]
    for (let i=1; i<y;i++ ) {
    newArray.push(i)
    }
    return newArray
} 
console.log(range2(2,9))

function range (x,y) {
    if(y-x===2) {
        return [x+1]
    } else {
        var newArray = range(x,y-1)
        newArray.push(y-1)
        return newArray
    }

} 
console.log(range(2,89))




//4. Write a JavaScript program to compute the sum of an array of integers.
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21

function sumArray (array) {
    var sum =0
    for(let i =0; i<=array.length-1;i++) {
        sum=sum + array[i]
    } return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))

function sumArray2 (array) {
    if(array.length === 1) {
        return array[0]
    } return array.pop() + sumArray2(array)
}
console.log(sumArray2([1,2,3,4,5]))

//5. Write a JavaScript program to compute the exponent of a number.
//Note : The exponent of a number says how many times the base number is used as a factor. 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function exponent (base, exp) {
    count=1
    for(let i =1; i<=exp; i++) {
        count*=base
    } return count
}
console.log(exponent(2,2))

function exponent2 (base, exp) {
    if(exp ===0) {
        return 1
    } return base * exponent2 (base, exp-1)
}
console.log(exponent2(8,2))

//6. Write a JavaScript program to get the first n Fibonacci numbers.
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

//7. Write a JavaScript program to check whether a number is even or not.

function isEven (num) {
    if(num%2===0) {
        return true
    } else {
        return false
    }
}
console.log(isEven(91))

function isEven2 (num) {
    num=Math.abs(num)
    if(num===0) {
        return true
    } else if (num===1) {
        return false;
    } return isEven2(num-2)
}
console.log(isEven2(0))

//8. Write a JavaScript program for binary search. Go to the editor
//Sample array : [0,1,2,3,4,5,6]
//console.log(l.br_search(5)) will return '5' mirar khan academy

var array =[1,2,10,3,4]
array.sort();
console.log(array)

//9. Write a merge sort program in JavaScript.
//Sample array : [34,7,23,32,5,62]
//Sample output : [5, 7, 23, 32, 34, 62]
//Index