// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const MeasureKelvin = function()
{
    const measurement = 
    {
        type: "Temp",
        unit: "celsius",
        value: Number(prompt("Degrees celsius:")),
    }
    console.table(measurement);
    debugger;
    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(MeasureKelvin())
*/

//1: Understand the problem
//2: Pieces:
/*
    1.- create an array with numbers
    2.- create a function to receive an array
    3.- Loop through every item in the array and print a string in the console
*/

const temps = [10,15,18,2,-1,4];
const temps2 = [2,6,5,3,19,23,23]

function PrintForecast(_arr)
{
    let sum = "";
    for(let i = 0; i < _arr.length; i++)
    {
        sum += ` ... ${_arr[i]}C in ${i+1} days`;
    }
    console.log(sum + " ...");
}

PrintForecast(temps2);