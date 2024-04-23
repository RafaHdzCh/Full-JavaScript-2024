'use strict';

//#region PROTOTYPE

/*
const Person = function(firstName, birthYear)
{
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const rafaProto = new Person("Rafa", 1998);
const jaqyProto  = new Person("Jaqy", 2003);

//console.log(rafa instanceof Person);
Person.prototype.CalculateAge = function()
{
    //console.log(2024-this.birthYear);
}

rafaProto.CalculateAge();

Person.prototype.species = "homosapiens";
//console.log(rafa);
//console.log(rafa.hasOwnProperty("species"));

//console.log(rafaProto.__proto__);
//console.log(rafaProto.__proto__.__proto__);
//console.log(rafaProto.__proto__.__proto__.__proto__);
//console.log(Person.prototype.constructor);
//console.dir(Person.prototype.constructor);

const arr = [1,2,2,3,3,0,4,5,2,4,6,9,0,5];

//console.log(arr.__proto__.prototype === Array.prototype.__proto__);

Array.prototype.unique = function()
{
    return [...new Set(this)];
}

//console.log(arr.unique());
*/

//#endregion



//#region Challenge1

/*
const Car = function(make, speed)
{
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function()
{
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function()
{
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const Bmw = new Car("BMW", 110);
Bmw.accelerate();

const Mercedes = new Car("Mercedes",100);
Mercedes.brake();

*/
//#endregion



//#region ES6 Classes

/*
//1. Classes are not HOISTED
//2. Class are first-class citizens (can be sent and returned from functions)
//3. Classes are executed in strict mode
class PersonClass 
{
    constructor(firstName, birthYear)
    {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //Instance methods
    //Methods will be added to .prototype property
    CalculateAge()
    {
        //console.log(2024 - this.birthYear);
    }

    //Static methods
    static Grettings()
    {
        //console.log(`Hey, ${this.firstName}`);
    }
}

const jaqy = new PersonClass("Jaqy", 2003);

//console.log(jaqy.__proto__);
jaqy.CalculateAge();
PersonClass.prototype.Greet = function()
{
    //console.log(`Hey, ${this.firstName}`);
}
jaqy.Greet();

*/

//#endregion



//#region Setters and Getters
/*

const account =
{
    owner: "Rafa",
    movements: [12,4,6,8,9],

    get LatestMovement()
    {
        return this.movements.slice(-1).pop();
    },

    set LatestMovement(mov)
    {
        this.movements.push(mov);
    }
}


account.LatestMovement = 50;
//console.log(account.LatestMovement)
//console.log(account.movements);

*/

//#endregion



//#region Static Methods

//Person.Hey = function()
{
    //console.log("Hello there!");
}

//Person.Hey();

//PersonClass.Grettings();

//#endregion



//#region Object Create

const CarProto = 
{
    TurningEngineOn()
    {
        //console.log("Turning on...");
    },
    Init(year)
    {
        this.year = year;
    }
}

const delorean = Object.create(CarProto);
delorean.model = "delorean";
delorean.TurningEngineOn();
delorean.Init(1985);

//console.log(delorean);
//console.log(delorean.__proto__ === CarProto);

//#endregion



//#region Inheritance between classes
/*
const Person = function(firstName, birthYear)
{
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.CalculateAge = function()
{
    console.log(2024-this.birthYear);
}

const Student = function(firstName, birthYear, course)
{
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.Introduce = function()
{
    //console.log(`My name is ${this.firstName} and i study ${this.course}.`);
}

const mike = new Student("Mike", 1998, "Computer Science");
//console.log(mike);
mike.Introduce();
//mike.CalculateAge();

//console.log(mike.__proto__);
//console.log(mike.__proto__.__proto__);

//console.log(mike instanceof Student);
//console.log(mike instanceof Person);
//console.log(mike instanceof Object);

Student.prototype.constructor = Student;
//console.log(Student.prototype.constructor);
//console.dir(Student.prototype.constructor);

*/
//#endregion



//#region Challenge2

/*
class Car
{
    constructor(make, speed)
    {
        this.make = make;
        this.speed = speed;
    }

    Accelerate()
    {
        this.speed += 10;
        this.GetSpeed();
    }
    Break()
    {
        this.speed -= 5;
        this.GetSpeed();
    }
    GetSpeed()
    {
        console.log(`${this.make} is going at ${this.speed}km/h`);
    }

    get speedUS()
    {
        return this.speed/ 1.6;
    }
    set speedUS(mph)
    {
        this.speed = mph * 1.6;
    }
}
*/

//const zentorno = new Car("Zentorno", 150);
//zentorno.Accelerate();
//console.log(zentorno.speedUS);
//zentorno.speedUS = 10;
//zentorno.GetSpeed();
//console.log(zentorno);

//#endregion



//#region Challenge 3

/*
const CarClass = function(make, speed)
{
    this.make = make;
    this.speed = speed;
}

const ElectricVehicle = function(make, speed, charge)
{
    CarClass.call(this, make, speed);
    this.charge = charge;
}

ElectricVehicle.prototype = Object.create(CarClass.prototype);

ElectricVehicle.prototype.ChargeCar = function(chargeTo)
{
    this.charge = chargeTo;
}

ElectricVehicle.prototype.AccelerateElectric = function()
{
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
}

const tesla = new ElectricVehicle("Tesla", 100, 66);


tesla.ChargeCar(99);
console.log(tesla);
tesla.AccelerateElectric();
tesla.AccelerateElectric();
tesla.AccelerateElectric();

*/

//#endregion



//#region Inheritance between ES6 classes

/*
class PersonClass 
{
    constructor(firstName, birthYear)
    {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //Instance methods
    //Methods will be added to .prototype property
    CalculateAge()
    {
        console.log(2024 - this.birthYear);
    }

    //Static methods
    static Grettings()
    {
        console.log(`Hey, ${this.firstName}`);
    }
}

class Student extends PersonClass
{
    constructor(firstName, birthYear, course)
    {
        //ALWAYS NEEDS TO HAPPEN FIRST!
        super(firstName, birthYear);

        this.course = course;
    }

    Introduce()
    {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }

    CalculateAge()
    {
        console.log(`I am ${2024 - this.birthYear} years old, but a as a student i feel like ${2024 - this.birthYear + 10}`);
    }
}

const martha = new Student("Martha Jones", 2012, "Biology");
martha.Introduce();
martha.CalculateAge();
*/

//#endregion



//#region Inheritance between Object.create

/*
const PersonProto = 
{
    Init(firstName, birthYear)
    {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },

    CalculateAge()
    {
        console.log(2024-birthYear)
    }
}
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.Init = function(firstName,birthYear, course)
{
    PersonProto.Init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.Introduce = function()
{
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.Init("Jay", 2010, "Physics")
*/

//#endregion



//#region Encapsulation and chaining methods

// public fields
// private fields
// public methods
// private methods

class Account
{
    //1.- Public fields(instances)
    locale = navigator.language;
    
    //2.-Private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin)
    {
        this.owner = owner;
        this.currency = currency;
        //Protected property
        this.#pin = pin;
        //this._movements = [];
        //this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    GetMovements()
    {
        return this.#movements;
    }

    //Public interface
    Deposit(amount)
    {
        this.#movements.push(amount);
        return this;
    }

    Whitdraw(amount)
    {
        this.Deposit(-amount);
        return this;
    }

    RequestLoan(amount)
    {
        if(this.#ApproveLoan(amount))
        {
            this.Deposit(amount);
            console.log("Loan approved!");
        }
    }

    //private methods
    #ApproveLoan()
    {
        return true;
    }

    static Helper()
    {
        console.log("Assistance required...");
    }
}
const account1 = new Account("Rafa", "MXN", 1111);

account1.Deposit(10);
account1.Whitdraw(3);
account1.RequestLoan(100);

Account.Helper();

account1.Deposit(300).Deposit(66).Whitdraw(20);
console.log(account1);
//#endregion


//#region Challenge4

class CarClass
{
    constructor(make, speed)
    {
        this.make = make;
        this.speed = speed;
    }

    Accelerate()
    {
        this.speed += 10;
        this.charge--;
        console.log(`${this.make} is going at ${this.speed} km/h.`);
        return this;
    }

    Brake()
    {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h.`);
        return this;
    }
}

class ElectricVehicleClass extends CarClass
{
    #charge;
    constructor(make, speed, charge)
    {
        super(make,speed);
        this.#charge = charge
    }

    ChargeBattery(_chargeTo)
    {
        this.#charge = _chargeTo;
    }
}

const rivian = new ElectricVehicleClass("Rivian", 120, 55);

rivian.Accelerate()
      .Accelerate()
      .Brake()
      .Accelerate()
      .Accelerate()
      .Brake();
//#endregion
