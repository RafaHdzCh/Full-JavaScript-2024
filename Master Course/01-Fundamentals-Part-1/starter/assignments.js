//Coding challenge #1

//Mark's data
const markMass = 78;
const markHeight = 1.69;

//John's data
const johnMass = 95;
const johnHeight = 1.88;

//BMIs
const markBMI = markMass / markHeight * markHeight;
const johnBMI = johnMass / johnHeight * johnHeight;

const markHigherBMI = markBMI > johnBMI;

if(markHigherBMI)
{
    console.log("Mark's BMI (" + markBMI + ") is higher than John's BMI (" + johnBMI + ")");
}
else
{
    console.log("John's BMI (" + johnBMI + ") is higher than Mark's BMI (" + markBMI + ")");
}





//Coding challenge #2
const dolphinsScore1 = 109;
const dolphinsScore2 = 105;
const dolphinsScore3 = 110;

const koalasScore1 = 106;
const koalasScore2 = 105;
const koalasScore3 = 110;

const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

const minimumScore = 100;

let winnerScore;
let winnerTeam;
if(dolphinsAverageScore > koalasAverageScore)
{
    winnerTeam = "Dolphins"
    winnerScore = dolphinsAverageScore;
}
else if(dolphinsAverageScore === koalasAverageScore)
{
    winnerScore = dolphinsAverageScore;
}
else
{
    winnerTeam = "Koalas";
    winnerScore = koalasAverageScore;
}

if(winnerScore < minimumScore)
{
    console.log(winnerTeam + " no supero la puntuacion minima.")
}
else
{
    if(dolphinsAverageScore === koalasAverageScore)
    {
        console.log("EMPATE.")
    }
    else
    {
        console.log("La puntuacion ganadora fue del equipo " + winnerTeam + " con " + winnerScore + " puntos.");
    }
}





//Coding challenge #3
const bill = 342;
const tip = bill >= 50 && bill <= 300 ? bill*.15 : bill*.20;

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill+tip}`);

