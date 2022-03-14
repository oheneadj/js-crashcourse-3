// //Do While
// let i = 0;

// do {
// console.log(`The value of i is ${i}`);
// i++;
// }while(i<10);

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("Five");
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("Five");
//         break;
//     }
//     console.log(i);
// }

//Functions

function mySelf(){
    console.log("My name is Ohene Adjei");
}

mySelf();

//Functions with parameter
function mySelf(){
    console.log("My name is Ohene Adjei");
}

mySelf();


function multiply (x, y) {
    let product = x * y;
    console.log(`The product of ${x} and ${y} is ${product} `);
}

multiply(3,4);

//Function with return value

function multiply (x, y) {
    let product = x * y;
    return `The product of ${x} and ${y} is ${product}`;
}

let result = multiply(13,34);

console.log(result);


//Arrow Functions
let divide = (x,y) => x/y;

console.log(divide(3,5));

// let divide = (x,y) => {
//     let division
// } 


//Higher order functions

//Map()
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let squares = numbers.map((number) => number * number);

console.table(squares);


let double = numbers.map((number)=> number + number);

console.table(double);

//Filter()

//Filter even numbrs
let evens = numbers.filter((even) => even % 2 === 0);

console.table(evens);

//Filter odd numbers
let odds = numbers.filter((odd) => odd % 2 === 1);

console.table(odds);


//Find

let five = numbers.find((number) => number === 5);
 console.log(`This is ${five}`);



 //String
 let sentence = "Ohene Adjei Effah is my name";
 let password = "password";

 console.log(`This text contains ${sentence.length} characters.`);
 console.log(`This password contains ${password.length} characters.`);
 console.log(sentence.concat(". I'm a Software Developer."));
 console.log(sentence.endsWith("ne"));
 console.log(sentence.includes("ohene"));
 console.log(sentence.indexOf("Ohene"));
 console.log(sentence.indexOf("Ohene"));
 console.log(sentence.padStart(100));
 console.log(sentence.padEnd(100));
 console.log(sentence.repeat(2));
 console.log(sentence.replace("Ohene", "Othniel")); // takes two parameters (x,y) x = the word to be replaced and y = the word would replace x
 console.log(sentence.slice(2, 4));
 console.log(sentence.substring(2, 4));
 let email = "oheneadjei@gmail.com";
 console.log(email.split("@"));
 console.log(sentence.toUpperCase());
 console.log(sentence.toLowerCase());

