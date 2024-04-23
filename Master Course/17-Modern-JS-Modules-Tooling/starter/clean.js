"strict mode";

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const GetLimit = (limits, user) => limits[user] ? limits[user] : 0;

const CheckExpenses = (state, limits) => state
  .map(entry => entry.value < -GetLimit(limits, entry.user) ? {...entry, flag: "limit"}: entry);

const AddExpense = (state, limits, value, description, user = "jonas") => 
  value <= GetLimit(limits, user.toLowerCase()) ? [...state, {value: -value, description, user: user.toLowerCase()}] : state;

const LogBigExpenses = (state, bigLimit) => 
{
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(" / ");
  console.log(bigExpenses);
}

const newBudget1 = AddExpense(budget, spendingLimits, 100, 'Pizza 🍕');
const newBudget2 = AddExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = AddExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
const finalBudget = CheckExpenses(newBudget3, spendingLimits);

CheckExpenses(newBudget3, spendingLimits);
LogBigExpenses(finalBudget, 500);