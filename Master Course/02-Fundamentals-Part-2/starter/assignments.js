//CHALLENGE #1

/*
const CalculateAverage = (_score1, _score2, _score3) => 
{
    return (_score1 + _score2 + _score3) / 3;
}

function CheckWinner(_averageDolphins,_averageKoalas)
{
    if(_averageDolphins > _averageKoalas)
    {
        if(_averageDolphins >= _averageKoalas * 2)
        {
            console.log(`Koalas win (${_averageDolphins} vs. ${_averageKoalas})`);
        }
        else
        {
            console.log("Dolphins no alcanzo la puntuacion requerida.")
        }
    }
    else if(_averageKoalas > _averageDolphins)
    {
        if(averageKoalas >= averageDolphins * 2)
        {
            console.log(`Koalas win (${_averageKoalas} vs. ${_averageDolphins})`);
        }
        else
        {
            console.log("Koalas no alcanzo la puntuacion requerida.")
        }
    }
    else
    {
        console.log("No one wins.")
    }
}
const averageKoalas = CalculateAverage(85,54,41);
const averageDolphins = CalculateAverage(23,34,27);

CheckWinner(averageDolphins, averageKoalas);
*/


//CHALLENGE #2
/*
const bills = [125, 555, 44];
const tips = [];
const totals = [];

function CalculateTip(_billAmount)
{
    const tipPercentaje = _billAmount >= 50 && _billAmount <= 300 ? .15 : .20;
    const tipAmount = _billAmount * tipPercentaje;
    tips.push(tipAmount);
    const totalBill = _billAmount + tipAmount;
    totals.push(totalBill);
    console.log(`Your bill is: $${_billAmount}. Your suggested tip is $${tipAmount} (${tipPercentaje*100}%). Your total is: $${totalBill}.`)
    return totalBill;
}

console.log(CalculateTip(bills[0]));
console.log(CalculateTip(bills[1]));
console.log(CalculateTip(bills[2]));

console.log(tips);
console.log(totals);



//CHALLENGE #3
const mark = 
{
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function()
    {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = 
{
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function()
    {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if(john.bmi > mark.bmi)
{
   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!)`);
}
else if(mark.bmi > john.bmi)
{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!)`);
}
else
{
    console.log("Same BMI.")
}

*/



const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

function CalculateTip ()
{
    for(let i = 0; i < bills.length; i++)
    {
        const tipPercentaje = bills[i] >= 50 && bills[i] <= 300 ? .15 : .20;
        const tipAmount = bills[i] * tipPercentaje;
        tips.push(tipAmount);
        const totalBill = bills[i] + tips[i];
        totals.push(totalBill);
        console.log(`Your bill is: $${bills[i]}. Your suggested tip is $${tips[i]} (${tipPercentaje*100}%). Your total is: $${totals[i]}.`)
    }
} 

CalculateTip();


function CalculateAverage(_arr)
{   
    let sum = 0;
    let i = 0;
    while(i<_arr.length)
    {
        sum += _arr[i];
        i++;
    }
    const avg = sum/_arr.length;
    return avg;
}

console.log(`El promedio del arreglo es: ${CalculateAverage(totals)}`);