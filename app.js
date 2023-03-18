console.log('Hello world')

/* 

Crash Course Overview :

1. Data Types & Variables
2. Conditionals
3. Loops
4. Functions
5. Arrays
6. Objects
7. Document Object Model (DOM)

*/

/* 

DATA TYPES & VARIABLES:

Data Types:
- they help us organize data
- Ex: Strings, Numbers, Booleans, Undefined, and null


STRINGS-DATA TYPE
-It is literally any kind of text (letters, numbers, emojis, symbols, etc).
-Must use quotes around (it can be any kind, "", ``, or '')
but there needs to be quotes around it, or else it will be 
treated like a variable.

Ex:
- "Hello World"
- "Frontend Simplified is amazing"
- "100" 

Character at a Certain Index (starts at 0):
0 1 2 3 4 5 6
| | | | | | |
G e o r g i a

EX:

*/ 

console.log('Hello World'[10])

console.log('12-45'.length)

let str =('Your just so beautiful :D')

console.log(str[str.length - 1])

/* NUMBER-DATA TYPE 

EX: 
- 1
- 4.5
- -100

NOTE: if ever confused about the data type, in the console write:

'
typeof [instert whatever it is here-minus the brackets and hit enter]
'


NOTE: if doing calculations in the console, computers respect order of operations

NOTE: * symbol, is for multuplication
      / symbol, is for division
      % symbol, gives you the remainder




BOOLEAN
- true
- false


NULL &/OR UNDEFINED

- Null: is the value of nothing
- Undefinded: the value was never set in the first place
- NaN: not a number (means error in your code)

To comment something out:

'Command' + '/'

Multiple Lines of Comments:

'/' + '**'


VARIABLES
- Store Data

Three ways to define a variable:
-var (it's very outdated)
-let (use it anywhere)
-const


NOTE: In coding, your variable name needs to be descriptive
in the name to what it is doing.

Don't forget Cammel Case:
Every word (execpt the first word) starts with a Capital!
We do this because spaces in your variable name will give you
an error.

*/

let fullNameOfUser = 'Georgia Vrana'

/* NOTE: you do not have to define the data type like you do
in Java. */

let isRaining = true
let temperature = 20
let planet = "Earth"

temperature = temperature + 2

console.log(temperature)

/* 
'const' is almost the same as 'let'
the difference is that we cannot re-assign a 
value to a constant variable.
*/

/* PRACTICE PROBLEMS

Coverting Temperatures:
Celsius-to-Fahrenheit formula:

F = C x 1.8 + 32

*/

let celsius = 10
let fahrenheit = celsius * 1.8 + 32

console.log('The fahrenheit value is' + fahrenheit 
            + "when the celsius value is " + celsius)



/* EQUALITIES

"==", "===", "!=", "!=="

- Single equals reassigns a value to a variable
- Double equals checks the values
- Triple equals checks the values and types

!= - value no equal
!== - not equal value and/or equal type

> greater than
< less than
>= greater than or equal to
<= less than or equal to

*/

let bool = '1' == 1

console.log(bool)

// values & types are equal, therefore returns true

let bool1 = '1' === 1

// values are equal, but the types are not equal, 
// therefore it returns false.

/* NOTE: Almost  always use the '===' for safety

How to check if they are NOT equal to eachother:
*/

let bool2 = '1' != 1

// checks if values are NOT equal, therefore returns false

let bool3 = '1' !== 1

// checks if values & types are NOT equal, therefore returns false

/*
CONDITIONALS:
*/

//  NOTE: Just like Java, you can have an if statement and
//  no else statement, but you cannot only have an else statment without an if statement


// EX:


let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log('show the video')
} 
else if (loggedIn === true) {
    console.log("tell the user to upgrade their subscription.")
}
else {
    console.log('tell user to log into account')
}

// EX 1:

let cash = 40
let price = 40

let x = cash - price

if (cash > price) {
    console.log("you paid extra-here's" + x + "dollars change")
}

else if (cash === price) {
    console.log("you paid the exact ammount have a nice day")
}

else {

    x = (cash - price) * (-1)
    console.log("not enough money - you still owe" + x + "dollars")
}


// VIDEO EXAMPLE:

let cash1 = 40
let price1 = 40

let x1 = cash - price

if (cash1 > price1) {
    console.log(`you paid extra-here's ${x1} dollars change`)
}

else if (cash1 === price1) {
    console.log("you paid the exact ammount have a nice day")
}

else {

    x = (cash1 - price1) * (-1)
    console.log(`not enough money - you still owe ${x1 * (-1)} dollars`)
}

/* 

LOGICAL OPERATORS:

&& checks if the left and right side of the comparison are true

EX: (--> means produces)
- true && true --> true
- true && false --> false
- false && false --> false
- false && false --> false

*/

let cash2 = 50
let price2 = 40
let isStoreOpen = true

if (cash >= price && isStoreOpen === true){
    console.log("Print the receipt.")
}

/* '||' checks if the left OR right 
side of the comparison is true. 

*/

let cash3 = 50
let price3 = 40
let isStoreOpen1 = false

if (cash >= price || !isStoreOpen){
    console.log("Print the receipt.")
}

/* NOTE: Because 'isStoreOpen' variable is a boolean
in and of its self, we do not need to put '=== true' because
it is a boolean. 

If we want it to do *something* when it is 'false' we simply
can add a ! before the boolean variable.

Making it mean if the variable ! (is not equal to) true.

*/

/*

FALSY VALUES: a falsy value is considered as 'false' when 
converted to a boolean.

- undefined
- null
- NaN (not a number)
- 0
- ""
- false

TRUTHY VALUES: is considered as 'true' when converted to a 
boolean.
-10
-3.14
-"Frontend Simplified"
-"false"
-"0"
-[]
-{}

*/

// NOTE: to check if truthy or falsy, 
// in the console write '!!' + 'your value' 
// and it will tell you if it is true or false


/* 

TERNARY OPERATORS: a shortcut for an if else condition

EX:
"isObsese ? 'unhealthy' : 'healthy"

"subscribed ? 'blockVideo' : 'showVideo'"

*/

let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold')


//EX:

let subscribed1 = true
let loggedIn1 = true

let ifStatement = subscribed1 && loggedIn1 ? 'show the video' : 'hide the video'
console.log(ifStatement);


//Practice

let money = 50
let cost = 40
let store = true

let gotMoney = (money >= cost) && store ? "give receipt" : "don't give receipt"

console.log(gotMoney);

/* 
LOOPS
- Reoeat the same code over and over again.
- Will keep looping until we give it a condition to stop.


DRY: don't repeat yourself because you can use a loop.

JavaScript has Three Types of Loops:
- for loop
- while loop
- do while loop

*/
let count = 1;


while (count <= 100) {

    console.log(count)
    count = count + 1

}

for (let i = 1; i < 100; i++) {

    console.log(i);

}



for (let i = 1; i < 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} --> Frontend Simplified`);
    }

    else if (i % 3 === 0) {
        console.log(`${i} --> Frontend`);
    }

    else if (i % 5 === 0) {
        console.log(`${i} --> Simplified`);
    }

    else {
        console.log(`${i} --> ${i}`);
    }

}

const string = "Frontend Simplified"

for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}

/*


FUNCTIONS
- just a block of code designed to preform a particular task



EX:

 */

// Funtction Definition: set the code that is repeated so you can just call it
function welsomePersontoFES(name, firstName, lastName) {
    console.log(`Welsome to FES, ${name}, ${firstName} ${lastName}`)
}

//Call a funtion
welsomePersontoFES('Georgia', 'Georgia', 'Vrana');
welsomePersontoFES('David', 'Brag', 'David');
welsomePersontoFES('Zen');
welsomePersontoFES('Mitri');


//return statmenet

function fn() {
    return 5
    console.log('my function')
}

console.log(fn());


//add two numbers together?

function sumOfTwoNumbers () {
    return 5 + 10
}

console.log(sumOfTwoNumbers());

//let's make it dynamic


function sumOfTwoNumber (num1, num2) { // parameter when you are defining the funciton
    return num1 + num2
}

console.log(sumOfTwoNumber(10, 10)) // argument when calling the function

/* MAKE SURE THAT THE ORDER OF THE NUMBERS MATCHES THE ORDER OF THE PARAMETER'S NAMES

NOTE: hover over the function name to find the order (sumOfTwoNumber) */


/* Practice: Create a Function that Converts Celsius to Fahrenheit

Celsuis to Fahrenheit Formula:

    F = C x 1.8 + 32

@example
converCelsiusToFharenheit(0) -> 32
converCelsiusToFharenheit(10) -> 50
converCelsiusToFharenheit(30) -> 86

*/

function celsiusToFharenheit (cTemp) {
    return cTemp * 1.8 + 32
}

console.log(celsiusToFharenheit(0));


/* SECOND WAY TO CALL A FUNCTION */

//error function

const convertCelsiusToFharenheit = (cTemp) => {
    return cTemp * 1.8 + 32
}

console.log(convertCelsiusToFharenheit(0));


/* 

ARRAYS 
- Data structure that can hold multiple data values in one variable


*/


let arr = [20, 30, 40, 50, 100] //you can put more than one data type in one array!


//First element of an array
console.log(arr[0])

//Last element of an array
console.log(arr[arr.length - 1])


//Pushs the new element on to the end of the array

arr.push(200)

console.log(arr);

//This is a call back function

// 

let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true;
    }
})

console.log(newArr)


//How to do the above in 1 line

let oldArr = arr.filter(element => element < 50)

console.log(oldArr)


/* Practice:

Filter out all the 'FAIL' elements in an array

@examples
 ['A+', 'A', 'FAIL'] => ['A+', 'A']
 ['FAIL', 'FAIL', 'B' ] => ['B']
 ['FAIL'] => []

*/


let grades = ['A+', 'A', 'FAIL']

let goodGrades = grades.filter(element => element !== 'FAIL')

console.log(goodGrades)


/*
Filter out all the 'FAIL' elements in an array
with using the Array.filter method

@examples
 ['A+', 'A', 'FAIL'] => ['A+', 'A']
 ['FAIL', 'FAIL', 'B' ] => ['B']
 ['FAIL'] => []

*/

let grades1 = ['A+', 'A', 'FAIL']

let goodGrade = []

for (let i = 0; i < grades.length; ++i) {
  if (grades[i] !== 'FAIL')
  {
    goodGrade.push(grades[i])
  }
  else {
    console.log()
  }
}

console.log(goodGrade)
