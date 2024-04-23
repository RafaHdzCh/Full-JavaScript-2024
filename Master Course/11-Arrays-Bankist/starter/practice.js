/*
//#region Number

console.log(23 === 23.0)
console.log(0.1 + 0.2);

//Read a value out of a string
console.log(Number.parseInt("30px", 10));
console.log(Number.parseFloat("2.5px", 10));

//Check if value is NaN
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20px"));
console.log(Number.isNaN(1/0));

//Check if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite(20/0));
console.log(Number.isFinite("20"));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger("20"));

//#endregion

console.log(Math.sqrt(25));
console.log(Math.max(1,2,3,4,5,9,8,7,6));
console.log(Math.min(1,2,3,4,5,9,8,7,6));
console.log(Math.PI);
//console.log(Math.trunc(Math.random() * 6) + 1);

//#region 

//Rounding integers
console.log("ROUND INTEGERS");

    //Removes decimals
console.log(Math.trunc(50.1));
console.log(Math.trunc(50.9));

    //Nearest number
console.log(Math.round(23.2));
console.log(Math.round(23.9));

    //Rounds up
console.log(Math.ceil(100.1));
console.log(Math.ceil(100.9));

    //Rounds up
console.log(Math.floor(0.1));
console.log(Math.floor(0.9));

//#endregion

//Rounding decimals
console.log("ROUND DECIMALS");

//Returns a string
console.log((2.7).toFixed(3)); //("2.700")
console.log((2.345).toFixed(2)); //("2.35")
console.log(Number((2.345).toFixed(2))); //(2.35)



const IsEven = n => n % 2 === 0;
//console.log(IsEven(4));

const RandomInt = (_min, _max) => Math.floor(Math.random() * (_max - _min + 1)) + _min;
//console.log(RandomInt(10,20));



[...document.querySelectorAll(".movements__row")]
            .forEach(function (row, i)
            {
                if(i % 2 === 0)
                {
                    //Changes tha background color on even rows
                    row.style.backgroundColor = "blue";
                }
            }
);

//NUMERIC SEPARATORS
const diameter = 287_460_000_000;
console.log(diameter);

//Big Integers
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(456489456432141564875643215n);
console.log(BigInt(Math.floor(Math.sqrt(((13+4)*3)/2)))); //BigInt


//#region DATES

//#1
const now = new Date();
console.log(now);

const christmas = new Date("December 24, 2015");
console.log(christmas);

console.log(new Date(account1.movementsDates[0]));
    
console.log(new Date(259200000));

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(now.toISOString());
console.log(now.getTime())


console.log(new Date(1708724495270423));
console.log(Date.now());
//#endregion


function MaximumValue(movements)
{
  const maxValue = movements.reduce((accumulator, currentValue) => 
  currentValue > accumulator ? accumulator = currentValue : accumulator = accumulator, movements[0]);

  return maxValue;
}

const CalculateDaysPassed = (date1, date2) => Math.abs((date1 - date2) / (1000 * 60 * 60 * 24));

const daysResult = CalculateDaysPassed(new Date(2024, 0, 11),new Date(2024, 0, 1));
console.log(daysResult);

*/


//TIMERS
/*
const ingredients = ["pepperoni", "cheese"];
const PizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}.`), 3000, ...ingredients);

if(ingredients.includes("pepperoni"))
{
    clearTimeout(PizzaTimer);
}

const now = new Date();

setInterval(function()
{
    console.log(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds())
}, 1000);
*/