/*
let js = "amazing";

if (js = "amazing") 
{
    alert("Javascript is fun!");
}
console.log(40 + 8 + 23 - 10);

"Jonas" //Just a value

let firstName = "Rafa"; //Variable declaration stored in the RAM
let PI = 3.1416;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";


const currentYear = 2024;
const ageRafa = currentYear - 1998;
const ageSarah = currentYear - 2018;

const isFullAge = ageSarah >= 18;


const rafa = `I am ${firstName}, a ${ageRafa} years old ${myCurrentJob}.`; 
console.log(rafa);
console.log(`Just a string`);

console.log("This is a string with \n\
multiple \n\ lines");
console.log(`Hola
script
multilineas`);

let x,y;
x = y = 25 - 10 - 5;

const age = 15;

if(age >= 18)
{
    console.log("Rafa can start driving");
}
else
{
    const yearsLeft = 18 - age;
    console.log(`Rafa is not old enough. Wait another ${yearsLeft} year(s).`);
}

const birthYear = 1998;
let century;

if(birthYear <= 2000)
{
    century = 20;
}
else
{
    century = 21;
}
console.log(`Rafa was born in the ${century}th century`);

//Type conversion
const inputYear = "1998";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(typeof NaN);

console.log(String(123), 123);

//Type coercion
console.log("I am " + 23 + " years old");
//console.log("23" - "10" - 3);

//let n = "1" + 1;
let n = 5 + 1 + 2 + "1";
n = n - 1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean("Rafa"));

const age = 18;
if(age === 18)
{
    console.log("You just became an adult");
}

const favouriteNumber = Number(prompt("What's your favorite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if(favouriteNumber !== 100)
{
    console.log("The number is not 100");
}


const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;


if(shouldDrive)
{
    console.log("Can drive.");
}
else
{
    console.log("Someone else should drive...");
}


const day = "Friday";
let activity;

switch(day)
{
    //Comparissons are strict
    case "Monday": //day === "Monday"
        activity = "Planning...";
        break;
    case "Tuesday":
        activity = "Planning...";
        break;
    case "Wednesday":
        activity = "Working...";
        break;
    case "Thursday":
        activity = "Excercising...";
        break;
    case "Friday":
        activity = "Sleeping...";
        break;
    case "Saturday":
        activity = "Going out...";
        break;
    case "Sunday":
        activity = "Relaxing...";
        break;
    default:
        activity = "Invalid day...";
        break;
}

//console.log("Today's activity is: " + activity);

if(day === "Monday")
{
    activity = "Planning...";
}
else if (day === "Tuesday")
{
    activity = "Excercising...";
}
else if (day === "Wednesday" || day === "Thursday")
{
    activity = "Working...";
}
else if (day === "Friday")
{
    activity = "Going out...";
}
else if (day === "Saturday")
{
    activity = "Relaxing...";
}
else if (day === "Sunday")
{
    activity = "Sleeping...";
}
else
{
    console.log("Not a valid day");
}

console.log("Today's activity is: " + activity);

*/

//Expression
const age = 2024 - 1998;

//Statement
console.log(`I am ${2024 - 1998} years old.`) ;
console.log(`I am ${age >= 18 ? "over 18" : "under 18"}.`);
