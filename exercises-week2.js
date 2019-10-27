//Callback canyon
//https://github.com/twilson63/callback-canyon

//1 equals

function equals(a, b) {
    return a === b
}

console.log(equals(5, "5"))

//2 add

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(2, 3))

//3 subtract

function subtract(num1, num2) {
    return num1 - num2;
}

console.log(subtract(2, 3))

//4 multiply

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 3))

//5 devide 

function devide(num1, num2) {
    return num1 / num2;
}

console.log(devide(2, 3))

//6 prop Add and remove a property named "color":

function myProp(object, key) {
    delete object[key]
    return object
}

console.log(myProp({ 1: "a", 2: "b" }, 2))

//7 path ++++++++++++++++++++++++++++++++ Retrieve the value at a given path.
//R.path(['a', 'b'], {a: {b: 2}}); //=> 2
//R.path(['a', 'b'], {c: {b: 2}}); //=> undefined

    function myPath (array, object) {
        var a=[a];
        var b=[b]
        var object.push(a)
        return object;
    }
    console.log(myPath({}))

console.log(myPath(['a', 'b'], {a: {b: 2}})); 
//8 inc

function add(num1, num2) {
    return num1 + num2;
}

function inc(number) {
    return add(number, 1)
}

console.log(inc(8))


//9 dec

function subtract(num1, num2) {
    return num1 - num2;
}

function dec(number) {
    return subtract(number, 1)
}

console.log(dec(6))

//10 identity 

function myIdentity(value) {
    var type = typeof value;
    return type 
}

console.log(myIdentity(9))

//11 allways 

function myAllways(value) {
    return value
}

console.log(myAllways(5))

//12 gt

var array2 = [0, 2, 3, 4, 5]
function gt(array, number) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === number) {
            return array[i + 1]
        }
    }
}

console.log(gt(array2, 3))

//13 it 

var array2 = [0, 2, 3, 4, 5]
function gt(array, number) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === number) {
            return array[i - 1]
        }
    }
}

console.log(it(array2, 3))

//14 gte 

function gte(value, value2) {
    return value >= value2
}

console.log(gte("a", "b"))

//15 ite

function ite(value, value2) {
    return value <= value2
}

console.log(ite("a", "b"))

//16 split The split() method is used to split a string into an array of substrings, and returns the new array.

function mySplit(string) {
    var newArray = []
    
    var newArray2 = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newArray.push(i)
        }

    } newArray.push(string.length)
    newArray2.push(string.slice(0,newArray[0]));
    for (let j = 0; j < newArray.length-1; j++) {
        newArray2.push(string.slice(newArray[j]+1, newArray[j+1]))
    } return newArray2
}

var newString = "hola maria que tal"
console.log(mySplit(newString))


//17 join

function join(array) {
    var string = "";
    for (let i = 0; i <= array.length - 1; i++) [
        string = string + " " + array[i]
    ]
    return string
}

console.log(join(["ruben", "is", "awesome"]))

//18 head 

function myHead(array) {
    return array[0]
}

console.log(myHead([1, 2, 3, 4, 5, 6]))

//19 tail

function myTail(array) {
    var newArray=[];
    for(let i=1; i<array.length;i++) {
    newArray.push(array[i])
    } return newArray
}

console.log(myTail([1, 2, 3, 4, 5, 6]))

//20 nth Returns the nth element of the given list or string. If n is negative the element at index length + n is returned.

function myNth (string,number) {
    if(number >=0) {
        return string[number]
    } else {
        return string[string.length+number]
    }
}

console.log(myNth("hola",2))

//21 indexOf

function myIndexOf(value, array) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            newArray.push(array.slice(0, i))
        }
    } return newArray[0].length

}

console.log(myIndexOf(4, [1, 2, 3, 4, 5, 6]))

//22 isNil

function myIsNil(value) {
    return value === null || value === undefined;
}

console.log(myIsNil(null))

//23 last

function myLast(array) {
    return array[array.length - 1]
}

console.log(myLast([1, 2, 3, 4, 5]))

//24 match The match() method retrieves the result of matching a string against a regular expression. WE DONT NOW WHAT A REGULAR EXPRESSION IS
//25 memoize IS NOT IN THE RANDA LIBRARY


//26 not

function myNot(value) {
    return !value
}

console.log(myNot(4))

//27 pathOr 
//28 propOr 
//29 pathEq 
//30 propEq propEq (String → a → Object → Boolean) 

//31 pick Returns a filtered copy of an object with only the specified keys, similar to _.pick from lodash / underscore. +++++++++++++++++++

function myPick(object, array) {
    var arrayKeys = Object.keys(object)
    var newObject={}
    for(let j=0;j<array.length;j++) {
        for(let i=0; i<arrayKeys.length;i++) {
            if(array[i] === object[arrayKeys[j]]) {
                newObject[arrayKeys[i]] = object[arrayKeys[j]];
            }
        }   
    }  return newObject;
}

console.log(myPick({ 1: 'a', 2: 'b', 3: 'c' }, ["a","b"]))



//32  pluck The _.pluck() function is used when we need to extract a list of a given property. Like we have to find out name of all the students, then we can simply apply the _.pluck() 
//function on the details of all the students. It will only extract the name from the details of all the stuf=dents and display it. The hence formed list will be an array of names only.
//++++++++++++++++

//33 sort

function mySort(array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    var swap = array[i];
                    array[i] = array[j];
                    array[j] = swap;
                }
            }
        }
        return array;
    }
console.log(mySort([1, 3, 2]))

//34 sortBy

//35 split 

function mySplit (string, delimiter) {
    var stringArray = [''];
    var j = 0;

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == delimiter) {
            j++;
            stringArray.push('');
        } else {
            stringArray[j] += string.charAt(i);
        }
    }
    return stringArray;
}

console.log(mySplit("hola mujer guapa, perro"," "))

function mySplit2 (string, delimiter) {
    var emptySpaces=[0,];
    var arrayString=[]
    for(let i=0;i<string.length;i++) {
        if(string[i]===delimiter) {
            emptySpaces.push(i) 
            console.log(emptySpaces)
        } 
    }         
    for(let j =0; j<emptySpaces.length;j++) {
        arrayString.push(string.slice(emptySpaces[j]+1 ,emptySpaces[j+1]))
    } return arrayString    
}

console.log(mySplit2("hola mujer guapa, perro"," "))

//36 join

var newArray = ['hola', 'guapa', 'tonta', 'preciosa']
function myJoin(array) {
    var newString = '';
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            newString += array[i]
        } else {
            newString += array[i] + ", "
        }

    } return newString

}

console.log(myJoin(newArray))

//37 toUpper

function myToUpper(string) {
    let newArr = [["a", "A"], ["b", "B"], ["c", "C"], ["d", "D"], ["e", "E"], ["f", "F"], ["g", "G"], ["h", "H"], ["i", "I"], ["j", "J"], ["k", "K"], ["l", "L"], ["m", "M"], ["n", "N"], ["o", "O"], ["p", "P"], ["q", "Q"], ["r", "R"], ["s", "S"], ["t", "T"], ["u", "U"], ["v", "V"], ["w", "W"], ["x", "X"], ["y", "Y"], ["z", "Z"],[" "," "]]
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < newArr.length; j++)
            if (string[i] === newArr[j][0]) {
                newString = newString + newArr[j][1]
            } else if (string[i] === newArr[j][1]) {
                newString = newString + newArr[j][1]
            }

    } return newString
}

console.log(myToUpper("aBc"))

//38 toLower

function myToLower(string) {
    let newArr = [["a", "A"], ["b", "B"], ["c", "C"], ["d", "D"], ["e", "E"], ["f", "F"], ["g", "G"], ["h", "H"], ["i", "I"], ["j", "J"], ["k", "K"], ["l", "L"], ["m", "M"], ["n", "N"], ["o", "O"], ["p", "P"], ["q", "Q"], ["r", "R"], ["s", "S"], ["t", "T"], ["u", "U"], ["v", "V"], ["w", "W"], ["x", "X"], ["y", "Y"], ["z", "Z"],[" "," "]]
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < newArr.length; j++)
            if (string[i] === newArr[j][1]) {
                newString = newString + newArr[j][0]
            } else if (string[i] === newArr[j][0]) {
                newString = newString + newArr[j][0]
        } 

    } return newString
}

console.log(myToLower("aBc asdfkladsI"))

//39 capitalize

function myCapitalize(string) {
    var newString = "";
    var newString2 = string.slice(1, string.length)
    let newArr = [["a", "A"], ["b", "B"], ["c", "C"], ["d", "D"], ["e", "E"], ["f", "F"], ["g", "G"], ["h", "H"], ["i", "I"], ["j", "J"], ["k", "K"], ["l", "L"], ["m", "M"], ["n", "N"], ["o", "O"], ["p", "P"], ["q", "Q"], ["r", "R"], ["s", "S"], ["t", "T"], ["u", "U"], ["v", "V"], ["w", "W"], ["x", "X"], ["y", "Y"], ["z", "Z"]]
    for (let i = 0; i < newArr.length; i++) {
        if (string[0] === newArr[i][0]) {
            newString = newString + newArr[i][1]
        }
    } 
    return newString + newString2
}

console.log(myCapitalize("iop asdfasd a sdfadsf asdfdsf"))

//40 take quita todo hasta cierto elementeo

var rubenArray = [0,1,2,3,4,5,6,7,8,9,10]
function myTake (array, element) {
    var elementDelete =0;
    for(let i=0; i<array.length;i++) {
        if(array[i]===element) {
            elementDelete = i
        } 
    }
    return array.slice(elementDelete+1,array.length)
}

console.log(myTake(rubenArray,5))

//41 uniq Takes a list of values and removes all duplicates.

function myUniq(array) {
    var newObject = array.reduce((a, b) => (a[b] = '', a), {});
    return Object.keys(newObject)
}

console.log(myUniq([1, 2, 3, 4, 2, 1]))

//42 fromPairs

var newArray = [['a',1],['b',2],['c',3],['d',4]]

function fromPairs (array) {
    var newObject ={};
    array.forEach(function (element) { newObject[element[0]] = element[1]})
    return newObject;
}

console.log(fromPairs(newArray))


//43 toPairs

var newObject = { a: 1, b: 2, c: 3, d: 4 }
function myToPairs(object) {
    var newArray = Object.keys(object)
    var newArray2 = Object.values(object)
    var newArray3 = []
    return newArray3 = newArray.map((element,i) => {return [element,newArray2[i]] })

}

console.log(myToPairs(newObject))

//44 zip

var array1 =[1,2,3,4,5,6]
var array2 = ['a','b','c','d','e','f']

function myZip (array1, array2) {
    newArray3=[]
    return newArray3 = array1.map((element,i) => {return [element,array2[i]] })
}

console.log(myZip(array1,array2))

//45 union Union of arrays would represent a new array combining all elements of the input arrays, without repetition of elements.

var newArray1 = [1, 2]
var newArray2 = [1, 4]
var newArray5 = [1, 6]



function myUnion() {
    var newArray = newArray1.concat(newArray2, newArray5)
    var newObject = {};
    var newArray3 = []
    for (var i = 0; i < newArray.length; ++i) {
        newObject[newArray[i]] = '';
    }
    newArray = Object.keys(newObject)
    return newArray
}

console.log(myUnion(newArray1))

//46 intersection intersection([1,2,3], [2,3,4,5]) => [2, 3]

var rubenArray =[1,2,3,4,5];
var caseyArray = [1,5,6,7];


function myIntersection (array1, array2) {
    var newArray=[]
        for (let j=0;j<array2.length;j++) {
            if(array1.includes(array2[j])) {
                newArray.push(array2[j])
            }
        } return newArray
    }
console.log(myIntersection(rubenArray, caseyArray))


//47test

function myTest(string, string2) {
    return string.includes(string2)
}

console.log(myTest("hola", "oila"))

//48 replace

function myReplace(string1, string2, string3) {
    var newArray = []
    var newArray2 = []
    newArray3 =[]
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === " ") {
            newArray.push(i)
        }

    } newArray.push(string1.length)
    newArray2.push(string1.slice(0,newArray[0]));
    for (let j = 0; j < newArray.length-1; j++) {
        newArray2.push(string1.slice(newArray[j]+1, newArray[j+1]))
        } console.log(newArray2)
        for(let k=0;k<newArray2.length;k++) {
            if(newArray2[k]!=string2) {
                newArray3.push(newArray2[k])
            } else {
                newArray3.push(string3)
            }
        } return newArray3
    
    }
    
    var newString = "hola maria que tal"
    console.log(myReplace(newString,'maria','lola'))

}

//49 range

function myRange(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
console.log(myRange([1, 2, 3, 4, 5], 2, 4))

//50 omit Return a copy of an object excluding the given key, or array of keys. Also accepts an optional filter function as the last argument.

function myOmit (object,key) {
    delete object[key]
    return object
}

    var newObject = {"name": "ruben",
                    "color": "yellow",}

console.log(myOmit(newObject,"name"))


//51 where


//52 T 

  function myT() {
      return true
  }

console.log(myT(5))

//53 F 

function myT() {
    return false
}

console.log(myT(5))


//54 comparator Makes a comparator function out of a function that reports whether the first element is less than the second.

function myComparator (object) {
    if(object[i])
}


const people = [
    { name: 'Emma', age: 70 },
    { name: 'Peter', age: 78 },
    { name: 'Mikhail', age: 62 },
  ];

//Map
//https://github.com/jrs-innovation-center/javascript-exercises/blob/master/map/index.md

//1. Use the number to words module and map, to transform this
//array of number to array of words
//const converter = require('number-to-words')
//console.log(converter.toWords(10)) // ten

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 99, -2]
const converter = require('number-to-words')

console.log(numbers.map(element => { return converter.toWords(element) }))

//2. Use the map function to add 10 to array of numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 99, -2]

console.log(numbers.map(element => { return element + 10 }))

//3. Use the map function and hyperscript to tranform a list of strings to
//an unordered list
//hyperscript docs

var newArray = ["a", "b", "c"]
const h = require('hyperscript')
const buzzwords = require('buzzwords')
const li = (w) => h('li', w)

console.log(newArray.map(element => { return  h('li', element).outerHTML }))

console.log(h('ul', __))

//4. Use the map function to convert a list of colors to their rgb code.

const convert = require('color-convert')
const cssColorList = require('css-color-list')

console.log(cssColorList().map(element => { return convert.keyword.rgb(element) }))

//5. Use the map function transform a list of movies objects from a movie
//db search into a list of movie posters.

const h = require('hyperscript')
const request = require('request')
const search = (query, callback) => {
request({
method: 'GET',
json: true,
url: 'http://www.omdbapi.com/?r=json&s=' + query
}, (e,r,b) => callback(e,b))
}


const img = (url) => h('img', {src: url})


search('batman', (e,b) => {
// map over results and show movie posters

})



//Filter
//https://github.com/jrs-innovation-center/javascript-exercises/blob/master/filter/index.md

//1. Show only even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers.filter(element => { return element % 2 === 0 }))


//2. Show only numbers divisible by 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(numbers.filter(element => { return element % 5 === 0 }))

//3.3. Filter all buzzwords that contains cloud, html, and data
const h = require('hyperscript')
const buzzwords = require('buzzwords')
console.log(buzzwords.filter(element => { return element.includes("cloud") + element.includes("data") + element.includes("html") }))

//Reduce
//https://github.com/jrs-innovation-center/javascript-exercises/blob/master/reduce2/index.md

//1. Use reduce to add the list of numbers together and return the sum.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 99]
console.log(numbers.reduce((acc, item) => { return acc + item }));

//2. Use reduce to count the number of items that are true
const items = [false, true, false, true, true, true]
console.log(items.reduce((acc, item) => { return acc + item }));
console.log(items.length - (items.reduce((acc, item) => { return acc + item })));

//3. Use reduce to return an object of key value pairs from paired arrays,
//where index 0 is the key and index 1 is the value

function convertToObject (array) {
    return data.reduce(function (p, c) {
        p[c[0]] = c[1];
        return p;
    }, {});
}
const data = [['name', 'Larry'], ['type', 'person'], ['address', '123 Main Street']]
console.log(convertToObject(data))

//4. Use reduce to concat a variadic set of arguments into a single list
//function concat(...args) {
  // TODO: add reduce here

  function concat (...args) {
    var newArray = args.reduce((prev, curr) => prev.concat(curr), []);
    return newArray
     
  }

  console.log(concat([0,1,2],[1,2,3],[0,1]))

  //5. Use reduce to create your own filter function
  //function filter (fn, list) {
    // TODO: use reduce to create your own filter
     // filter to even numbers
     //filter(v => v % 2 === 0, [1,2,3,4,5,6,7,8,9,10])

    function myFilter(fn, list) {
        return list.reduce( function (result, item) {
          if (fn(item)) {
            result.push(item);
            return result;
          }
          return result
        }, []);
      } 

      console.log(myFilter(v => v % 2 === 0, [1,2,3,4,5,6,7,8,9,10]))

  //6. Use reduce to create your own reject function
  //function reject (fn, list) {
 // }
   // reject even numbers
   // reject(v => v % 2 === 0, [1,2,3,4,5,6,7,8,9,10])

   function myReject(fn, list) {
    return list.reduce( function (result, item) {
      if (fn(item)===false) {
        result.push(item);
        return result;
      }
      return result
    }, []);
  } 

  console.log(myReject(v => v % 2 === 0, [1,2,3,4,5,6,7,8,9,10]))


//7. Use reduce to create your own find function
//function find (fn, list) {}
// find waldo
//find(v => v === 'waldo', ['Larry', 'Curly', 'Moe', 'Waldo', 'Jim', 'Harry'])

function myFind(fn, list) {
    return list.reduce( function (result, item) {
      if (fn(item)) {
        result.push(item);
        return result;
      }
      return result
    }, []);
  } 
  console.log(myFind(v => v>10, [5, 12, 8, 130, 44]));
  console.log(myFind(v => v === 'Waldo', ['Larry', 'Curly', 'Moe', 'Waldo', 'Jim', 'Harry']))
  
//Recursion
//https://github.com/jrs-innovation-center/javascript-exercises/blob/master/recursion/index.md

//1. Write a JavaScript program to calculate the factorial of a number.
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial(n) {
    if (n <= 1) {
        return n;
    }
    return n * factorial(n - 1)
}
console.log(factorial(10))

//2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(num1, num2) {
    let newArray = [];
    for (i = 0; i < num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            newArray.push(i)
        }
    } return newArray[newArray.length - 1]

}
console.log(gcd(2, 4))

function gcd2(num1, num2) {
    if (num2 == 0) {
        return num1
    } return gcd2(num2, num1 % num2);
}
console.log(gcd2(36, 60))




//3. Write a JavaScript program to get the integers in range (x, y).
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]
function range2(x, y) {
    let newArray = []
    for (let i = 1; i < y; i++) {
        newArray.push(i)
    }
    return newArray
}
console.log(range2(2, 9))

function range(x, y) {
    if (y - x === 2) {
        return [x + 1]
    } else {
        var newArray = range(x, y - 1)
        newArray.push(y - 1)
        return newArray
    }

}
console.log(range(2, 89))

//4. Write a JavaScript program to compute the sum of an array of integers.
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21

function sumArray(array) {
    var sum = 0
    for (let i = 0; i <= array.length - 1; i++) {
        sum = sum + array[i]
    } return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))

function sumArray2(array) {
    if (array.length === 1) {
        return array[0]
    } return array.pop() + sumArray2(array)
}
console.log(sumArray2([1, 2, 3, 4, 5]))

function sumArray2(array) {
    if (array.length === 1) {
        return array[0]
    } return array[0] + sumArray2(array.slice(1, array.length));
}
console.log(sumArray2([1, 2, 3, 4, 5]))

//5. Write a JavaScript program to compute the exponent of a number.
//Note : The exponent of a number says how many times the base number is used as a factor. 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function exponent(base, exp) {
    count = 1
    for (let i = 1; i <= exp; i++) {
        count *= base
    } return count
}
console.log(exponent(2, 2))

function exponent2(base, exp) {
    if (exp === 0) {
        return 1
    } return base * exponent2(base, exp - 1)
}

console.log(exponent2(8, 2))

//6. Write a JavaScript program to get the first n Fibonacci numbers.
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
function fibonacci(num) {
    if (num <= 1)
        return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5))

//7. Write a JavaScript program to check whether a number is even or not.

function isEven(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isEven(91))

function isEven2(num) {
    num = Math.abs(num)
    if (num === 0) {
        return true
    } else if (num === 1) {
        return false;
    } return isEven2(num - 2)
}
console.log(isEven2(0))

//8. Write a JavaScript program for binary search. Go to the editor
//Sample array : [0,1,2,3,4,5,6]
//console.log(l.br_search(5)) will return '5' mirar khan academy

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];

function miBinarySearch(arr, searchNumb) {
    var length = arr.length;
    var midPoint = Math.floor(length / 2);
    var newArr = arr;

    if (arr[midPoint] > searchNumb) {

        var newArr = arr.slice(0, midPoint);
        return miBinarySearch(newArr, searchNumb);

    } else if (arr[midPoint] < searchNumb) {

        var newArr = arr.slice(midPoint+1, arr.length);
        return miBinarySearch(newArr, searchNumb);

    } else {
        return arr[midPoint];
    }
}
console.log(miBinarySearch(arr,2))

//9. Write a merge sort program in JavaScript.
//Sample array : [34,7,23,32,5,62]
//Sample output : [5, 7, 23, 32, 34, 62]

function sort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}
console.log(sort([1, 2, 3, 6, 4]))

function mySort (arr, end=0) {
  if (end >= arr.length) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let swap = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = swap;
    }
  }

  return mySort(arr, ++end);
}

console.log(mySort([6, 1, 5, 3, 9, 6, 7, 10, 16, 4, 0, 12, 2]));