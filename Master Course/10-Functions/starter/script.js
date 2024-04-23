'use strict';

/*
const bookings = [];

function CreateBooking(_flightNumber, _numPassengers = 1, _price = 199 * _numPassengers)
{
    //ES5
    //_numPassengers ||= 1;
    //_price ||= 199;

    const booking =
    {
        _flightNumber,
        _numPassengers,
        _price
    }
    console.log(booking);
    bookings.push(booking);
}

//CreateBooking("H101", 5);


function OneWord(str)
{
    return str.replace(/ /g, "").toLowerCase();
}
function UpperFirstWord(str)
{
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}

//Higher order function
function Transformer(str, fn)
{
    console.log(`Transformed string: ${fn(str)}`);
}

Transformer("JavaScript is the best!", UpperFirstWord);
Transformer("JavaScript is the best!", OneWord);



function Greet(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name}`);
    };
} 
Greet("Hey")("Rafa");

const GreetFAF = _greeting => _name => console.log(`${_greeting} ${_name}`);
GreetFAF("Hey")("Rafa");



const lufthansa = 
{
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
};

const euroWings =
{
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
}

function Book(_flightNumber, _name) 
{
    console.log(`${_name} booked a seat on ${this.airline} flight ${this.iataCode}${_flightNumber}`);
    this.bookings.push({flight: `${this.iataCode}${_flightNumber}`, _name})
}

//Call
Book.call(euroWings, 23, "RafaHernandez");
Book.call(lufthansa, 55, "JaqyAnzaldo");

//Apply
const flightData = [90, "Casillas Emilio"];
Book.apply(euroWings, flightData);
Book.call(euroWings, ...flightData);

//Bind
const BookEW = Book.bind(euroWings);
const BookLH = Book.bind(lufthansa);
BookEW(66,"Liz Hinojosa");
BookLH(99, "Bill Gates");

const BookEW23 = Book.bind(euroWings,23);
BookEW23("Steve Jobs");

//EventListeners
lufthansa.planes = 300;
lufthansa.BuyPlane = function()
{
    this.planes++;
    console.log(this);
    console.log(this.planes);
}
document.querySelector(".buy").addEventListener("click", lufthansa.BuyPlane.bind(lufthansa));

const AddTax = (rate, value) => value + value * rate;
console.log(AddTax(0.1,200));

const AddIVA = AddTax.bind(null, 0.16);
console.log(AddIVA(150));


function AddTaxRate(rate)
{
    return function(value)
    {
        return value + value*rate;
    }
}

const AddTax2 = AddTaxRate(0.75);
console.log(AddTax2(1000));




const poll = 
{
    question: "What is oyur favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: C#", "3: C++"],
    answers: new Array(4).fill(0),
    RegisterNewAnswer: function()
    {
        const userInput = window.prompt(`
        ${this.question}
        0: JavaScript
        1: Python
        2: C#
        3: C++
        (Write option number)
        `);

        //console.log(userInput);

        switch(userInput)
        {
            case "0":
                this.answers[0]++;
                //console.log(this.answers[0]);
                break;
            case "1":
                this.answers[1]++;
                //console.log(this.answers[1]);
                break;
            case "2":
                this.answers[2]++;
                //console.log(this.answers[2]);
                break;
            case "3":
                this.answers[3]++;
                //console.log(this.answers[3]);
                break;    
            default:
                alert("Please type a valid option");
                return;
        }
        console.log("Your answer was: " + userInput);
        this.DisplayResults([]);
        this.DisplayResults("");
        this.DisplayResults();
    },
    DisplayResults: function(type = Array)
    {
        if(typeof type === typeof [])
        {
            console.log(this.answers);
        }
        else if(typeof type === typeof "")
        {
            console.log("Poll results are: " + this.answers);
        }
        else
        {
            console.log(this.answers);
            console.log("Poll results are: " + this.answers);
        }
    }
}

document.querySelector(".poll").addEventListener("click", poll.RegisterNewAnswer.bind(poll));



function SecureBooking()
{
    let passengerCount = 0;
    return function()
    {
        passengerCount++;
        //console.log(passengerCount);
    }
}
const Booker = SecureBooking();
Booker();
Booker();
Booker();
console.dir(Booker);



let f;
function g()
{
    const a = 10;
    f = function()
    {
        console.log(a * 2);
    }
}

const h = function()
{
    const b = 100;
    f = function()
    {
        console.log(b * 2);
    }
}

g();
f();
h();
f();



function BoardPassengers(_amountOfPassengers, _waitTimeInSeconds)
{
    const perGroup = _amountOfPassengers / 3;

    setTimeout(function()
    {
        console.log(`We are now boarding all ${_amountOfPassengers} `);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, _waitTimeInSeconds * 1000);

    console.log(`Will start boarding in ${_waitTimeInSeconds} seconds`);
}

BoardPassengers(180, 3);
//setTimeout(function(){ console.log("TIMER")}, 5000);

*/


(function() 
{
    const header = document.querySelector("h1");
    header.style.color = "red";
    document.querySelector("body").addEventListener("click",function()
    {
        header.style.color = "blue";
    });
})();