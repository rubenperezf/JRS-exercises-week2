//Callback canyon
//https://github.com/twilson63/callback-canyon
//1 equals

function equals(a, b) {
 return a === b
}

console.log(equals(5,"5"))

//2 add

function add (num1, num2) {
    return num1+num2;
}

console.log(add(2,3))

//3 subtract

function subtract (num1, num2) {
    return num1-num2;
}

console.log(subtract(2,3))

//4 multiply
function multiply (num1, num2) {
    return num1*num2;
}

console.log(multiply(2,3))

//5 devide 

function devide (num1, num2) {
    return num1/num2;
}

console.log(devide(2,3))

//6 prop


//7 path
//8 inc
function add (num1, num2) {
    return num1+num2;
}
function inc (number) {
    return add(number,1)
}
console.log(inc(8))
//9 dec
function subtract (num1, num2) {
    return num1-num2;
}
function dec(number) {
    return subtract(number,1)
}
console.log(dec(6))
//10 identity 
function identity (value) {
    return value
}
console.log(identity(89))
console.log(identity("gika"))
//11 allways
function allways (){
    if(true) {
        return allways
    } else {
        return allways
    }
}

console.log(allways())
//12 gt
var array2 =[0,2,3,4,5]
function gt (array, number) {
    for(let i=0; i<=array.length;i++) {
        if(array[i] === number) {
            return array[i+1]
        }
    }
}
console.log(gt(array2,3))
//13 it 
var array2 =[0,2,3,4,5]
function gt (array, number) {
    for(let i=0; i<=array.length;i++) {
        if(array[i] === number) {
            return array[i-1]
        }
    }
}
console.log(it(array2,3))
//14 gte 
function gte (value,value2) {
    return value>=value2
}
console.log(gte("a","b"))

//15 ite
function ite (value,value2) {
    return value<=value2
}
console.log(ite("a","b"))
//16 split The split() method is used to split a string into an array of substrings, and returns the new array.
function mySplit (string) {
    var newArray= []
    var newArray2 = []
    for(let i =0;i<string.length; i++) {
        if(string[i]===" ") {
        newArray.push(i)
        } 
        
    } newArray.push(string.length)
    for(let j=0;j<newArray.length;j++) {
        newArray2.push(string.slice(newArray[j-1],newArray[j]))
    }return newArray2

    
}  

var newString ="hola maria que tal"
console.log(mySplit(newString))

//17 join
function join (array) {
    var string="";
    for(let i=0; i<= array.length-1; i++) [
        string = string + " " + array[i]
    ]
    return string
}

console.log(join(["ruben","is","awesome"]))
//18 head 
function myHead (array) {
    return array[0]
}
console.log(myHead([1,2,3,4,5,6]))
//19 tail
function myTail (array) {
    return array.slice(1)
}
console.log(myTail([1,2,3,4,5,6]))
//20 nth
function mytNh (array) {
    return array[2]
}
console.log(myNth([1,2,3,4,5,6]))
//21 indexOf
function myIndexOf(value, array) {
    var newArray=[];
for(let i =0; i<array.length;i++) {
    if(array[i]===value) {
       newArray.push(array.slice(0,i))
    } 
}   return newArray[0].length

}

console.log(myIndexOf(4, [1,2,3,4,5,6]))

//22 isNil
function myIsNil(value) {
    return value === null || value === undefined;
  }

  console.log(myIsNil(null))

//23 last

function myLast (array) {
    return array[array.length-1]
}

console.log(myLast([1,2,3,4,5]))

//24 match

function myMatch (string) {
    var newArray=[]
    var regexp=/[A-Z]/g;
    for(let i=0;i<string.length;i++) {
        if(string[i] === /[A-Z]/g) {
            newArray.push(string[i])
        }
    } console.log(newArray)
    return newArray

}
console.log(myMatch("Hola"))

//25
//26 not
function myNot(value) {
    return value ===false
}

console.log(myNot(4))

//27 pathOr
//28 propOr
//29 pathEq
//30 propEq
//31 pick

function myPick (object) {
    return Object.keys

}
//32  pluck
//33 sort
//34 sortBy
//35 split
//36 join
//37 toUpper

function myToUpper (string) {
    let newArr =[["a","A"],["b","B"],["c","C"],["d","D"],["e","E"],["f","F"],["g","G"],["h","H"],["i","I"],["j","J"],["k","K"],["l","L"],["m","M"],["n","N"],["o","O"],["p","P"],["q","Q"],["r","R"],["s","S"],["t","T"],["u","U"],["v","V"],["w","W"],["x","X"],["y","Y"],["z","Z"]]
    let newString = ""
    for(let i=0;i<string.length;i++) {
        for(let j=0; j<newArr.length;j++)
        if(string[i]===newArr[j][0]) {
            newString = newString+newArr[j][1]
        } else if(string[i]===newArr[j][1]) {
            newString = newString+newArr[j][1]
        }
        
    } return newString
}

console.log(myToUpper("aBc"))
//38 toLower
function myToLower (string) {
    let newArr =[["a","A"],["b","B"],["c","C"],["d","D"],["e","E"],["f","F"],["g","G"],["h","H"],["i","I"],["j","J"],["k","K"],["l","L"],["m","M"],["n","N"],["o","O"],["p","P"],["q","Q"],["r","R"],["s","S"],["t","T"],["u","U"],["v","V"],["w","W"],["x","X"],["y","Y"],["z","Z"]]
    let newString = ""
    for(let i=0;i<string.length;i++) {
        for(let j=0; j<newArr.length;j++)
        if(string[i]===newArr[j][1]) {
            newString = newString+newArr[j][0]
        } else if(string[i]===newArr[j][0]) {
            newString = newString+newArr[j][0]
        }
        
    } return newString
}

console.log(myToLower("aBc"))
//39 capitalize
function myCapitalize (string) {
    var newString ="";
    var newString2= string.slice(1,string.length)
    let newArr =[["a","A"],["b","B"],["c","C"],["d","D"],["e","E"],["f","F"],["g","G"],["h","H"],["i","I"],["j","J"],["k","K"],["l","L"],["m","M"],["n","N"],["o","O"],["p","P"],["q","Q"],["r","R"],["s","S"],["t","T"],["u","U"],["v","V"],["w","W"],["x","X"],["y","Y"],["z","Z"]]
    for(let i=0;i<newArr.length;i++) {
        if(string[0]===newArr[i][0]) {
            newString = newString + newArr[i][1]
        } 
    } console.log(newString)
    return newString+newString2
}

console.log(myCapitalize("iop asdfasd a sdfadsf asdfdsf"))

//40 take
//41 uniq
//42 fromPairs
//43 toPairs
//44 zip
//45 union
//46 intersection
//47 test
//48 replace
//49 range
//50 omit
//51 where
//52 T
//53 F
//54 comparator

 comparator
console.log(myPick({a: 'a', b: 'b', c: 'c'}))
//Map
//https://github.com/jrs-innovation-center/javascript-exercises/blob/master/map/index.md
//1. Use the number to words module and map, to transform this
//array of number to array of words

const converter = require('number-to-words')
console.log(converter.toWords(10)) // ten
const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]
const converter = require('number-to-words')
console.log(numbers.map(element=> {return converter.toWords(element)}))



//2. Use the map function to add 10 to array of numbers
const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]
console.log(numbers.map(element =>{return element+10}))

//Filter
//https://github.com/jrs-innovation-center/javascript-exercises/blob/master/filter/index.md

//1. Show only even numbers
const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers.filter(element => {return element%2===0}))


//2. Show only numbers divisible by 5
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(numbers.filter(element => {return element%5===0}))

//Reduce
//https://github.com/jrs-innovation-center/javascript-exercises/blob/master/reduce2/index.md
//1. Use reduce to add the list of numbers together and return the sum.
const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99]
console.log(numbers.reduce((acc,item) => {return acc+ item}));

//2. Use reduce to count the number of items that are true
const items = [false, true, false, true, true,true]
console.log(items.reduce((acc,item) => {return acc+ item}));
console.log(items.length-(items.reduce((acc,item) => {return acc+ item})));

//3. Use reduce to return an object of key value pairs from paired arrays,
//where index 0 is the key and index 1 is the value

const data = [['name', 'Larry'], ['type', 'person'], ['address', '123 Main Street']]

console.log(data.reduce())

//Recursion
//https://github.com/jrs-innovation-center/javascript-exercises/blob/master/recursion/index.md

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

function sumArray2 (array) {
    if(array.length === 1) {
        return array[0]
    } return  array [0] +sumArray2(array.slice(1,array.length));
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
function fibonacci(num) {
    if (num <= 1) 
    return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  console.log(fibonacci(5))

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



//9. Write a merge sort program in JavaScript.
//Sample array : [34,7,23,32,5,62]
//Sample output : [5, 7, 23, 32, 34, 62]



function sort (array){
    for(var i =0;i<array.length;i++){
        for(var j= i+1;j<array.length;j++){
            if(array[i]>array[j]){
                var swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }
return array;
}
console.log(sort([1,2,3,6,4]))

function sort(array) {
    if() {
        return
    }return 
}

function sort (array) {
    var newArray=[]
    if(Math.min(...array) === array[0]) {
        return array[0]
    } return   
}
console.log(sort([2,1,3]))
