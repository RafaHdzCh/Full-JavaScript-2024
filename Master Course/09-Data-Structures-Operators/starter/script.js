'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  OrderDelivery: function({starterIndex, mainIndex,time, address})
  {
    console.log(`Order #${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will bedelivered to ${address} at ${time}`);
  },

  Order: function(starterIndex, mainIndex)
  {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

/*

c

*/
/*

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
//console.log(menu);

for(const item of menu)
{
  console.log(item);
}

for(const [i,el] of menu.entries())
{
  console.log(`${i + 1}: ${el}`);
}

//Default values
const {name: restName, openingHours, menu = [], starterMenu: starters = []} = restaurant;
console.log(restName, openingHours, menu, starters);

//Nested objects
const{fri: {open: o, close: c}} = openingHours;
console.log(o,c); 



restaurant.OrderDelivery(
  {
    time: "22:30pm",
    address: "Stree #1",
    mainIndex: 2,
    starterIndex: 2
  }
);

//Mutating variables
let a = 111;
let b = 999;

const obj = {a: 23, b:7, c:14};

({a,b} = obj);
console.log(a,b)

*/

/*
--------------- ARRAYS -----------------
let [first, ,secondary] = restaurant.categories;
[first, secondary] = [secondary, first];

const temp = first;
first = secondary;
secondary = temp;


console.log(first, secondary);
[first, secondary] = [secondary, first];
console.log(first, secondary);

console.log(restaurant.Order(2,0));
const [starter,main] = restaurant.Order(2,0);
console.log("Starter: " + starter);
console.log("Mains: " + main);



const nested = [2,4,[5,6]];

//Nested destructuring
//const [i, ,j] = nested;
//console.log(i,j);

const[i, ,[j,k]] = nested;
console.log(i,j,k);



const firstNumbers = [4,5,6];
const lastNumbers = [1,2,3,];
const allNumbers = [...firstNumbers, ...lastNumbers];

console.log(...firstNumbers, ...lastNumbers);
console.log(allNumbers);

//SPREAD because on Right side of =
const arr = [1,2,  ...[3,4]];

//REST because on left side of =
const [a,b, ...others] = [1,2,3,4,5];

//console.log(a,b, others);

const add = function (...numbers)
{
  let sum = 0;
  for(let i = 0; i<numbers.length; i++)
  {
    sum += numbers[i];
  }
  console.log(sum)
}
add(1,2);
add(1,2,3,4,5);
add(6,7,8,9,10,11,12,13);

const x = [23, 5, 7];
add(...x);



//Nullish
const guests1 = undefined ?? 10;
const guests2 = undefined ?? undefined;
const guests3 = 10 ?? 11;

console.log(guests1);
console.log(guests2);
console.log(guests3);




const rest1 =
{
  name: "Chai",
  guests: 0
}

const rest2 =
{
  name: "Lola",
  owner: "Giovanni Rossi"
}

//rest1.guests = rest1.guests || 10;
//rest2.guests = rest2.guests || 10;

//rest1.guests ||= 10;
//rest2.guests ||= 10;

rest1.guests ??= 10;
rest2.guests ??= 10;

//rest1.owner = rest1.owner && "<ANONYMOUS>";
//rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";


console.log(rest1);
console.log(rest2);
*/



/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };


const [players1,players2] = [...game.players];
//console.log(players2);

const [gk,...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);

const allPlayers = [...players1,...players2];
//console.log(allPlayers);

const players1Final = [...players1,"Thiago", "Couthino", "Perisic"];
//console.log(players1Final);

const {odds:{team1, x: draw, team2}} = game;
console.log(team1, draw, team2);
team1 < team2 && console.log("Team1 wins");
team2 < team1 && console.log("Team2 wins");

function PrintGoals(..._players)
{
  //console.log(`${_players.length} goals were scored.`)
}
PrintGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
PrintGoals(...game.scored);


//CHALLENGE #2

//Task 1
for(const [index, goaler] of game.scored.entries())
{
  console.log(`Goal ${index + 1}: ${goaler}`)
}

//Task 2
const odds = (Object.values(game.odds));
let avg = 0;
const oddsArray = [];
for(const odd of odds)
{
  avg+=odd;
}
avg /= odds.length;
console.log(`Average odds: ${avg}`)

//Task 3
for(const [team, odd] of Object.entries(game.odds))
{
  const teamString = team === "x" ? "Draw" : `Victory ${game[team]}`
  console.log(`Odd of ${teamString} ${odd}`);
}

//Task 4
const scorers = {};
for (const player of game.scored) 
{
  scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);



//REFERENCE

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for(const day of days)
{
  const open = restaurant.openingHours[day]?.open ?? "closed";
  //console.log(`On ${day}, we open at ${open}`);
}
//console.log(restaurant.Order?.(0,1) ?? "Method does not exist");
//console.log(restaurant.OrderRissotto?.(0,1) ?? "Method does not exist");

const properties = Object.keys(restaurant.openingHours);
let openStr = `We are open on ${properties.length} days: `;
for(const day of properties)
{
  openStr+= `${day},`;
}
//console.log(openStr);


const entries = Object.entries(restaurant.openingHours)
//Key: "day"
//Value: {open: 0, close: 0}
          //destructuring the array into keys and two different values
for(const [key, {open, close}] of entries)
{
  //console.log(`On ${key} we open at ${open} and close at ${close}`);
}
//console.log(Object.keys(restaurant));
*/

/*

SETS

const orderSet = new Set(["Pizza", "Pasta", "Pasta", "Pizza", "Lassagna", "Pizza"]);
orderSet.add("Bread");
orderSet.add("Bread");
orderSet.delete("Pasta");
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Garlic Bread"));


const staff = ["Waiter", "Chef", "Chef", "Waiter", "Janitor"];
//const staffunique = new Set([staff]);
console.log(new Set(staff).size);
console.log(new Set("RafaelHernandezChavez").size);

*/


/*
//MAPS
const rest = new Map();

rest.set("name","Chai");
rest.set(1,"Firenze, Italy");
rest.set(2, "Jalisco, Mexico");
rest.delete(2);
rest.clear();
rest.set("Categories", ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);
//console.log(rest);
//console.log(rest.size);
//console.log(rest.size);
//console.log(rest.get("Categories"));
//console.log(rest.has("Categories"));


const question = new Map
(
  [
    ["question", "What's the best programming language in the world?"],
    [1,"C"],
    [2,"Java"],
    [3,"JavaScript"],
    ["Answer",3],
    [true, "Correct!"],
    [false, "Try again!"]
  ]
);
//console.log(question);


//Converting an object into a map
const mapOpeningHours = new Map(Object.entries(restaurant.openingHours));
//console.log(mapOpeningHours);

//Converting map to array
const mapToArray = [...question];
const keysArray = [...question.keys()];
const valuesArray = [...question.values()];
console.log(mapToArray);
console.log(keysArray);
console.log(valuesArray);

//Quiz app
console.log(question.get("question"));
for(const [key, value] of question)
{
  if(typeof key === "number")
  {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = 2;
console.log(question.get(answer === 3));
*/


/*
CHALLENGE

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);

  //Task 1
  const events = [...new Set(gameEvents.values())];
  console.log(events);

   //Task 2
  gameEvents.delete(92);
  console.log(gameEvents);

   //Task 3
   const amountOfEvents = gameEvents.size;
   const gameTime = 90;
   const average = gameTime/amountOfEvents;
   console.log(`An even happened, on average, every ${average} minutes.`);

   //Task 4
   for(const [time, event] of gameEvents)
   {
    const half = time <= 45 ? "FIRST" : "SECOND";
    console.log(`[${half} HALF] ${time}: ${event}`);
   }


   const airplane = "TAP Airplane Portugal";
   const plane = "A320";

   console.log(airplane.toLowerCase());
   console.log(airplane.toUpperCase());

   //RaFAel

   const passenger = "RaFaEL";
   function FixName(_nameFixed)
   {
    _nameFixed =_nameFixed[0].toUpperCase() + _nameFixed.slice(1).toLowerCase(); 
    return _nameFixed;
   }
   const passengerFixed = FixName(passenger);
   console.log(passengerFixed);

const email = "mail@mail.com";
const loginEmail = "    MAIL@mail.Com";

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
//console.log(email === trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const priceUSA = "$288.90USD";
const priceMX = priceUSA.replace("USD","MX");
console.log(priceMX);

const announcment = "All passengers come to door 23. Boarding door 23";
console.log(announcment.replace("door", "gate"));
console.log(announcment.replaceAll("door", "gate"));

console.log(announcment.replace(/door/g, "gate"));

if(plane.startsWith("A"))
{
  console.log(plane);
}
   */



  
   /*
   console.log(plane[0]);
   console.log(plane[1]);
   console.log(plane[2]);
   console.log(plane[3]);

   console.log(airplane.indexOf("r"));
   console.log(airplane.lastIndexOf("r"));
   console.log(airplane.indexOf("Portugal"));
   console.log(airplane.slice(0, airplane.indexOf(" ")));
   console.log(airplane.slice(airplane.lastIndexOf(" ")+1));


function CheckMiddleSeat(_seat)
{
  const seat = _seat.slice(-1);
  if(seat === "B" || seat === "E")
  {
    console.log("You got the middle seat");
  }
  else
  {
    console.log("You got lucky!");
  }
}

CheckMiddleSeat("11B");
CheckMiddleSeat("23C");
CheckMiddleSeat("3E");




console.log("A+VERY+NICE+STRING".split("+"));
const [firstName, lastName] = "Rafael Hernandez".split(" ");
const joinedGreeting = ["Mr.",firstName].join(" ");
console.log(joinedGreeting);

function CapitalizeName(_name)
{
  const names = _name.split(" ");
  const namesUpper= [];

  for(const word of names)
  {
    namesUpper.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(namesUpper.join(" "));
}

console.log(CapitalizeName("rafael hernandez chavez"))

function MaskCreditCard(_cardNumber)
{
  const str = _cardNumber + "";
  const last = str.slice(-4);
  const numberToShow = last.padStart(str.length, "*");
  console.log(numberToShow);
}

MaskCreditCard(1234567812345678);

   */

const variableNames = 
[
  "underscore_case",
  " first_name",
  "Some_Variable",
  "  calculate_AGE",
  "delayed_departure"
]

function CamelCasing(strArr)
{
  for(let i = 0; i < strArr.length; i++)
  {
    const [word1, word2] =  strArr[i].toLowerCase()
                                     .trim()
                                     .split("_");
    const output = `${word1}${word2.replace(word2[0], word2[0].toUpperCase())}`;
    const paddedOutput = `${output.padEnd(20," ")}${"o".repeat(i+1)}`;
    console.log(paddedOutput);
  }
}

CamelCasing(variableNames);