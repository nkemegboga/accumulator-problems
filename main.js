/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
    var string = "This Works!";
    return string;
}
console.log("1:", test())


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/
var input_array = [1, 2, 3];

function sum(array) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log("2:", sum(input_array))



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/
var input_array = [1, 2, 3];

function doubleNumbers(array) {
    var result = [];
    for (i = 0; i < array.length; i++) {
        result[i] = 2 * array[i];
    }
    return result
}
console.log("3:", doubleNumbers(input_array))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

var input_array = [1, 2, 3];

function multiplyNumbers(array, num) {
    var result = [];
    for (i = 0; i < array.length; i++) {
        result[i] = num * array[i];
    }
    return result
}
console.log("4:", multiplyNumbers(input_array, 5))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

var input_string = "abc";

function doubleLetters(string) {
    var result = "";
    for (i = 0; i < string.length; i++) {
        result = result + string[i] + string[i];
    }
    return result
}
console.log("5:", doubleLetters(input_string))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

var input_array1 = ["a","b","c"];
var input_array2 = ["d","e","f"];

function interleave(input_array1, input_array2) {
    var result = [];
    for (i = 0; i < input_array1.length; i++) {
        result.push(input_array1[i])
        result.push(input_array2[i])
    }
    return result
}
console.log("6:",interleave(input_array1, input_array2))



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange(num,input) {
    var result = [];
    for (i = 0; i < num; i++) {
        result.push(input)
    }
    return result
}
console.log("7:",createRange(4, "Hello"))


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

var input_array = ["quick", "brown", "fox"];

function flipArray(input_array) {
    var result = new Object();
    for (i = 0; i < input_array.length; i++) {
        result[input_array[i]] = i;
    }
    return result
}
console.log("8:",flipArray(input_array))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

var input_array = [[2014, "Horse"], [2015, "Sheep"]];

function arraysToObject(input_array) {
    var result = new Object();
    for (i = 0; i < input_array.length; i++) {
        result[input_array[i][0]] = input_array[i][1];
    }
    return result
}
console.log("9:",arraysToObject(input_array))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

var input_string = "hello"

function reverseString(input_string) {
    var result = "";
    for (i = input_string.length - 1; i >= 0; i--) {
        result = result + input_string[i]
    }
    return result
}
console.log("10:",reverseString(input_string))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

var input_string = "haha";

function repeats(input_string) {
    var result = true;
    var array1 = "";
    var array2 = "";
    if (input_string.length%2 == 1){result = false;}
    else {var array1 = input_string.slice(0,input_string.length/2);
    var array2 = input_string.slice((input_string.length/2),input_string.length);}
    if (array1 !== array2){result = false;}
    return result
}
console.log("11:",repeats(input_string))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(input_string){
  var result = "";
  for (i = 0; i < input_string.length; i+=2){result = result + input_string[i]}
  return result
}

console.log("12:",everyOther("abcdef"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual(input_string){
  var result = true;
  for (i = 1; i < input_string.length; i++){
    if (input_string[i] != input_string[i-1]){
      return false
    }
  }
  return result
}
console.log("13:",allEqual("aba"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/

function sumLetters(input_string){
  sumLets = 0;
  for (i = 0; i < input_string.length; i++){
    sumLets += Number(input_string[i]);
  }
  return sumLets
}
console.log("14:",sumLetters("485"))
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(input_string){
  sumVowels = 0;
  for (i = 0; i < input_string.length; i++){
    if (input_string[i] == "a" || input_string[i] == "e" || input_string[i] == "i" || input_string[i] == "o" || input_string[i] == "u")
    {sumVowels += 1}
  }
  return sumVowels
}
console.log("15:",countVowels("you"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(input_string){
  array = [];
  for (i = 0; i < input_string.length; i++){
    array.push(input_string[i])
  }
  return array
}
console.log("16:",split("you"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(input_string){
  array = [];
  for (i = 0; i < input_string.length; i++){
    array.push(input_string.codePointAt(i))
  }
  return array
}
console.log("17:",getCodePoints("Hello"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(input_string) {
    var result = new Object();
    for (i = 0; i < input_string.length; i++) {
        result[input_string[i]] = i;
    }
    return result
}
console.log("18:",letterMap("Hello"))


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(input_string) {
    var result = new Object();
    for (i = 0; i < input_string.length; i++) {
      if (result[input_string[i]] == undefined){result[input_string[i]] = 1;}
      else {result[input_string[i]] += 1;}
    }
    return result
}
console.log("19:",letterCount("Hello"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(num1,num2){
  var result = false;
  if (num2>num1 && num1&2 == 1 && num2 - num1 >= 7){result = true;}
  else if (num1>num2 && num2%2 == 1 && num1 - num2 >= 7){result = true;}
  else if (num2>num1 && num1%2 == 0 && num2 - num1 >= 6){result = true;}
  else if (num1>num2 && num2%2 == 0 && num1 - num2 >= 6){result = true;}
  return result
}
console.log("20:", threeOdds(0,6))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(string, length, fillCharacter){
  for(i = 0; i < length; i++){
    if (string.length < length){string = fillCharacter + string}
  }
  return string
}
console.log("21:",leftPad("a", 3, "*"))
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

function createString(number, letter){
  string = ""
  for(i = 0; i < number; i++){
    if (string.length < number){string = letter + string}
  }
  return string
}
console.log("22:",createString(3, 'a'))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial(number){
  result = 1
  for (i = 1; i <= number; i++){result = result *i}
  return result
}
console.log("23:",factorial(4))
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(number){
  result = []
  for (i = 1; i <= number; i++){result.push(i)}
  return result
}
console.log("24:", arrayOfNumbers(3))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd(number1,number2){
  var result = new Object()
  for (i = number1; i<= number2; i++){
    if (number1 > 0 || number2 > 0){
    if (i%2 == 0){result[i] = "even"}
    else if (i%2 == 1){result[i] = "odd"}
  }
  }
  return result
}
console.log("25:", evenOdd(0,0))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

function growingKeys(number, string){
  var result = new Object()
  var attach = ""
  for (i = 1; i <= number; i++){
    attach = attach+string
    result[attach] = true
  }
  return result
}
console.log("26:", growingKeys(3,"d"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

function every(array, number){
  result = true
  for (i = 0; i < array.length; i++){
    if (array[i] != number){return false}
  }
  return result
}
console.log("27:", every([1,1], 1))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

function some(array, number){
  result = false
  for (i = 0; i < array.length; i++){
    if (array[i] == number){return true}
  }
  return result
}
console.log("28:", some([3,2], 1))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence(array){
  var string = ""
  for (i = 0; i<array.length-2; i++){
    if (array.length>2){string = string+array[i]+", "}
    else {string = string + array[i]}
  }
  if (array.length > 0)
  {string = string + array[array.length-2]+" and "+array[array.length-1]}
  return string
}
console.log("29:",toSentence(["Sue", "Will"]))


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", "Script", "Object", "Notation"] it should return "JSON"
*/

function acronym(array){
  var string = ""
  for (i = 0; i<array.length; i++){string = string + array[i][0]}
  return string
}
console.log("30:", acronym(["Java", "Script", "Object", "Notation"] ))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(array){
  var minimum
  if (array.length > 0){minimum = array[0]}
  for (i = 1; i<array.length; i++){
    if (array[i-1] > array[i]){minimum = array[i]}
  }
  return minimum
}
console.log("31:", min([]))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

function index(array, propertyName){
  var result = new Object()
  for (i = 0; i<array.length; i++){result[array[i][propertyName]] = array[i]}
  return result
}
array = [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}]
console.log("32:", index(array, "id" ))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

function invert(object){
  result = new Object()
  for (var key in object){result[object[key]] = key}
  return result
}
console.log('33:', invert({id: 1, name: "Joe"}))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(name,object){
  var result = new Object()
  for (var key in object){result[key+"-signed"] = object[key]+" - "+name}
  return result
}
console.log("34:", addSignature( "Fred",{"contract": "foo"}))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

function pairs(object){
  var result = []
  for (var key in object){result.push(key + ' - '+object[key])}
  return result
}
console.log("35:", pairs({name: "Will", age: 24}))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

function sumValues(object){
  var sum = 0
  for (key in object){sum = sum + object[key]}
  return sum
}
console.log("36:", sumValues({a: 1, b: 2}))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

function biggestProperty(object){
  var maximum
  var array1 = []
  var array2 = []
  for (var key in object){
    array1.push(key)
    array2.push(object[key])
  }
  maximum_index = 0
  for (i = 1; i<array2.length; i++){
    if (array2[i]>array2[maximum_index]){
      maximum_index = i
      maximum = array1[i]}
  }
  return maximum
}
console.log("37:", biggestProperty({1999: 4036, 2000: 7654}))


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

function keyForValue(object, value){
  var result
  for (key in object){
    if (object[key] == value){
      result = key
      return result}
  }
  return result
}
console.log("38:", keyForValue({1999: 4036, 2000: 7654}, 4036))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

function containsValue(object, value){
  result = false
  for (key in object){
    if (object[key] == value){
      return true}
  }
  return result
}
console.log("39:", containsValue({1999: 4036, 2000: 7654}, 4036))

//
console.log("Out of 39 problems")
