//'use strict';

/*
let hasDriverLicense = false;
const passTest = true;

if(passTest)
{
    hasDriverLicense = true;
}

if(hasDriverLicense)
{
    console.log("I can drive.");
}
//const private = "Audio";




//Reusable chunk of code
function Logger()
{
    //Function body
    console.log("My name is Rafa");
}

//Calling / Running / Invoking / Executing a function
Logger();

function FruitProcesser(_applesAmount, _orangesAmount)
{
    const juice = `Juice with ${_applesAmount} apple(s) and ${_orangesAmount} organge(s).`;
    return juice;
}

const juice = FruitProcesser(4,6);
console.log(juice);
console.log(FruitProcesser(1,2));




//Function declaration
function CalculateAge1(_birthYear)
{
    return 2024 - _birthYear;
}
console.log(CalculateAge1(1998));

//Function expression
const CalculateAge2 = function (_birthYear)
{
    return 2024 - _birthYear;
}
console.log(CalculateAge2(1998));

//Arrow function
 const CalculateAge3 = _birthYear => 2024 - _birthYear;
 console.log(CalculateAge3(1998))

 //Arrow function: multiple arguments and lines of code
 const CalculateYearsUntilRetirement = (_birthYear, _firstName) =>
 {
    const age = 2024 - _birthYear;
    const retirement = 65 - age;
    return `${_firstName} will retire in ${retirement} years.`;
 }

console.log(CalculateYearsUntilRetirement(1998,"Rafa Hernandez"));




function CutFruitPieces(_fruit)
{
    return _fruit * 4;
}

function FruitProcesser(_applesAmount, _orangesAmount)
{
    const applePieces = CutFruitPieces(_applesAmount);
    const orangePieces = CutFruitPieces(_orangesAmount); 
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(FruitProcesser(2,4));


function CalculateAge(_birthYear)
{
    return 2024 - _birthYear;
}


const CalculateYearsUntilRetirement = function (_birthYear, _firstName)
 {
    const age = CalculateAge(_birthYear)
    const retirement = 65 - age;
    if(retirement > 0)
    {
        console.log(`${_firstName} will retire in ${retirement} years.`);
        return retirement;
    }
    else
    {
        console.log(`${_firstName} has already retired.`);
        return -1;
    }
 }

console.log(CalculateYearsUntilRetirement(1900,"Rafa Hernandez"));



//Declaring an array
const animals = ["Dog","Cat","Pig","Cow","Chicken"];
const years = new Array(1991,1984,2012,2020);

console.log(animals[0]); //First element
console.log(animals[2]);

console.log(animals.length);
console.log(animals[animals.length-1]); //Last element

animals[2] = "Dolphin";
console.log(animals);


const rafa = ["Rafa", "Hernandez", 25, 1998, animals];
console.log(rafa);

function CalculateAge(_birthYear)
{
    return 2024 - _birthYear;
}

const ages = [1990, 1967, 2002, 2010, 2018];

console.log(CalculateAge(ages[0]));
console.log(CalculateAge(ages[1]));
console.log(CalculateAge(ages[ages.length-1]));

const y = [CalculateAge(ages[0]),CalculateAge(ages[1]),CalculateAge(ages[ages.length-1])];
console.log(y);





const animals = ["Dog","Cat","Pig","Cow","Chicken"];
animals.unshift("Elephant");
console.log(animals);
const popped = animals.pop();
console.log(popped);

console.log(animals.indexOf("Cow"));

console.log(animals.includes("Dog")); //Exists
console.log(animals.includes("Crab")); //Doesnt exists

if(animals.includes("Dog"))
{
    console.log("Theres is a dog.")
}





const rafa = 
{
    firstName: "Rafa",
    lastName: "Hernandez",
    age: 2023 - 1998,
    job: "Programmer",
    animals: ["Cat", "Dog", "Bird"]
};

console.log(rafa);
console.log(rafa.job);
console.log(rafa["job"]);

const nameKey = "Name";
console.log(rafa["first" + nameKey]);
console.log(rafa["last" + nameKey]);

rafa.location = "Mexico";

const interestedIn = prompt("What do you want to know about Rafa? Choose between firstName, lastName, age, job, animals.");
if(rafa[interestedIn])
{
    console.log(rafa[interestedIn]);
}
else
{
    console.log("That information is not available.");
}

console.log(`${rafa.firstName} has ${rafa.animals.length} animals, and his favorite is ${rafa.animals[0]}.`);





const rafa = 
{
    firstName: "Rafa",
    lastName: "Hernandez",
    birthYear: 1998,
    job: "Programmer",
    animals: ["Cat", "Dog", "Bird"],
    hasDriverLicense: false,
    
    CalculateAge: function()
    {
        return 2024 - this.birthYear;
    }
    

    CalculateAge: function()
    {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    Summary: function()
    {
        return (`${this.firstName} ${this.lastName} is ${this.CalculateAge()} years old ${this.job}. He has ${this.hasDriverLicense ? "a" : "no"} driver's license.`);
    }
};

//#1
//const age = rafa.CalculateAge();
//console.log(age);

console.log(rafa.Summary());





for (let i = 0; i < 10; i++)
{
    if (i > 6) break;
    if (i%2 !== 0) continue;
    //console.log("Repetition #" + i);
}

const rafa = ["Rafa",
             "Hernandez", 
             25, 
             1998,
             ["Dog","Cat","Pig","Cow","Chicken"]];

for(let i = 1; i < 4; i++)
{
    //console.log(`- Season ${i}`)
    for(let k = 1; k < 6; k++)
    {
        //console.log(`   Episode ${k}`);
    }
}

let i = 0
while(i < 10)
{
    //console.log(i);
    i++;
}

let dice = 0;

while(dice !== 6)
{
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`You rolled a ${dice}.`);
}
console.log(`You escaped the loop.`);

*/