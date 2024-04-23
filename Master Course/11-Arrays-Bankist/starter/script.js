'use strict';

// BANKIST APP

//#region Accounts

const account1 = {
  owner: 'Rafa Hernandez',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-05-08T14:11:59.604Z',
    '2024-02-23T17:01:17.194Z',
    '2024-02-24T23:36:17.929Z',
    '2024-02-25T10:51:36.790Z',
    '2024-02-26T10:51:36.790Z',
  ],
  locale: 'es-MX', // de-DE
  dateOptions:
  {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    //weekday: "long",
  },

  numberOptions:
  {
    style: "currency",
    currency: "MXN",
  }
};

const account2 = {
  owner: 'Jaqy Anzaldo',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  locale: 'en-US',
  dateOptions:
  {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    //weekday: "long",
  },

  numberOptions:
  {
    style: "currency",
    currency: "MXN",
  }

};

const account3 = {
  owner: 'Vicente Fernandez',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  locale: 'pt-PT', // de-DE

  dateOptions:
  {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    //weekday: "long",
  },

  numberOptions:
  {
    style: "currency",
    currency: "MXN",
  }
};

const account4 = {
  owner: 'Taylor Swift',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  locale: 'en-US',
  
  dateOptions:
  {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    //weekday: "long",
  },

  numberOptions:
  {
    style: "currency",
    currency: "MXN",
  }

};

const accounts = [account1, account2, account3, account4];
let currentAccount; 
let timeToLogOut;
let Countdown;
CreateUsernames(accounts);

//#endregion

//#region Query Variables

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//#endregion

//ALWAYS LOG IN
//currentAccount = account1;
//DisplayAccountInfo(currentAccount);
//containerApp.style.opacity = 100;

//#region Functions

function CreateUsernames(_accounts)
{
  _accounts.forEach(function(acc)
  {
    acc.username = acc.owner.toLowerCase()
                            .split(" ")
                            .map( word => word[0])
                            .join("");
  })
}

function DisplayAccountInfo(_account)
{
  DisplayMovements(_account);
  DisplayDate();
  DisplayBalance(_account);
  DisplaySummary(_account);
}

function DisplayBalance(_account)
{
  _account.balance = _account.movements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  labelBalance.textContent = FormatCurrency(_account.balance);
}

function FormatCurrency(amount)
{
  return Intl.NumberFormat(currentAccount.locale, currentAccount.numberOptions).format(amount);
}

function DisplayDate()
{
  const now = new Date(Date.now());
  
  labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, currentAccount.options).format(now);
}

function DisplayMovements(_accounts, sort = false)
{
  //Vaciar el contenido previo del contenedor
  containerMovements.innerHTML = "";
  const movs = sort ? _accounts.movements.slice().sort((a,b) => a - b) : _accounts.movements;

  //Insertar un nuevo template por cada movimiento que tenga la cuenta
  movs.forEach(function (movementAmount, index)
  {
    const CalculateDaysPassed = (date1, date2) => Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));
    const movementDate = new Date(_accounts.movementsDates[index]);
    const daysPassed = CalculateDaysPassed(movementDate, new Date());
    const movementTypeToDisplay = movementAmount > 0 ? "deposit" : "withdrawal";

    let dateToDisplay;
    switch (daysPassed) 
    {
      case 0:
        dateToDisplay = "Today";
        break;
      case 1:
        dateToDisplay = "Yesterday";
        break;
      default:
        dateToDisplay = new Intl.DateTimeFormat(currentAccount.locale, currentAccount.options).format(movementDate);
        break;
    }

    const movementAmountToDisplay = FormatCurrency(movementAmount);
    const html = 
    `
    <div class="movements__row">
      <div class="movements__type movements__type--${movementTypeToDisplay}">${index+1} ${movementTypeToDisplay}</div>
      <div class="movements__date">${dateToDisplay}</div>
      <div class="movements__value">${movementAmountToDisplay}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

function DisplaySummary(_account)
{
  const incomes = _account.movements.filter(mov => mov > 0)
                           .reduce((acc,mov) => acc + mov,0);
  labelSumIn.textContent = FormatCurrency(incomes.toFixed(2));

  const outcomes = _account.movements.filter(mov => mov < 0)
                            .reduce((acc,mov) => acc + mov,0);
  labelSumOut.textContent = FormatCurrency(outcomes.toFixed(2));

  const interest = _account.movements.filter(mov => mov > 0)
                            .map(deposit => deposit * _account.interestRate/100)
                            .filter((int, i, arr) => int >= 1)
                            .reduce((acc,int)=> acc + int, 0);
  labelSumInterest.textContent = FormatCurrency(interest.toFixed(2));
}

function CallLogOutTimer()
{
  function StartLogOutTimer()
  {
    const min = String(Math.trunc(timeToLogOut / 60)).padStart(2, "0");
    const sec = String(Math.trunc(timeToLogOut % 60)).padStart(2, "0");
    labelTimer.textContent = `${min}:${sec}`;
    
    if(timeToLogOut <= 0)
    {
      clearInterval(Countdown);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    timeToLogOut --;
  }
  timeToLogOut = 300;
  StartLogOutTimer();
  Countdown = setInterval(StartLogOutTimer, 1000);
}

function ResetLogOutTimer()
{
  if(Countdown)
    {
      clearInterval(Countdown)
    }
    CallLogOutTimer();
}

//#endregion

//#region Events

function OnClickLogin()
{
  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);
  if(currentAccount && currentAccount.pin === Number(inputLoginPin.value))
  {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();

    ResetLogOutTimer();
    DisplayAccountInfo(currentAccount);
  }
  else
  {
    alert("No account found.")
  }
}

function OnClickTransfer()
{
  //console.log("Transfer");

  const amountToTransfer = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(account => account.username === inputTransferTo.value);

  inputTransferAmount.value = "";
  inputTransferTo.value = "";

  if(   amountToTransfer > 0 
     && receiverAccount
     && currentAccount.balance >= amountToTransfer 
     && receiverAccount.username !== currentAccount.username
    )
  {
    //console.log("Transfer valid.");
    currentAccount.movements.push(-amountToTransfer);
    receiverAccount.movements.push(amountToTransfer);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());
    DisplayAccountInfo(currentAccount);

    ResetLogOutTimer();
  }
  else
  {
    alert("Cannot transfer to that account.")
  }
}

function OnClickCloseAccount()
{
  //console.log("close");
  const accountToDelete = accounts.find(account => account.username === inputCloseUsername.value);
  const pinToDelete = Number(inputClosePin.value);

  if(currentAccount.pin === pinToDelete &&
     currentAccount === accountToDelete)
     {
      //console.log("Eliminando cuenta.")

      const index = accounts.findIndex(account => account.username === currentAccount.username);
      //const index = accounts.indexOf(currentAccount);
      accounts.splice(index, 1);
      containerApp.style.opacity = 0;
     }
  else
  {
    alert("Incorrect info to close account.")
  }

    inputCloseUsername.value = "";
    inputClosePin.value = "";
}

function OnClickLoan()
{
  const loanAmount = Math.floor(Number(inputLoanAmount.value));

  if(loanAmount > 0 && currentAccount.movements.some(mov => mov >= loanAmount/10))
  {
    setTimeout( function Loan()
    {
      currentAccount.movements.push(loanAmount);
      currentAccount.movementsDates.push(new Date());
      DisplayAccountInfo(currentAccount);
    }, 3000);
  }
  else
  {
    alert("Cannot request a loan of that amount.")
  }
  inputLoanAmount.value = "";

  ResetLogOutTimer();
}

function OnClickSort()
{
  DisplayMovements(currentAccount, !sorted);
  sorted = !sorted;
}

//Event handler
btnLogin.addEventListener("click", function(event)
{
  event.preventDefault(); //Prevents form from submitting
  OnClickLogin();
});

btnTransfer.addEventListener("click", function(event)
{
  event.preventDefault(); //Prevents form from submitting
  OnClickTransfer();
});

btnClose.addEventListener("click", function(event)
{
  event.preventDefault(); //Prevents form from submitting
  OnClickCloseAccount();
});

btnLoan.addEventListener("click", function(event)
{
  event.preventDefault(); //Prevents form from submitting
  OnClickLoan();
});

let sorted = false;
btnSort.addEventListener("click", function(event)
{
  event.preventDefault(); //Prevents form from submitting
  OnClickSort();
});

//#endregion