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

"==" amd "==="

- Single equals reassigns a value to a variable
- Double equals checks the values
- Triple equals checks the values and types

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


// TIME: 35:20-Conditionals

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

// EX

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


