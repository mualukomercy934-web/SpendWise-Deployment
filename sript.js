
// 1. Store budgeting information
let budget = 0;
let expense1 = 0;
let expense2 = 0;
let expense3 = 0;


// 2. Collect user input
budget = Number(prompt("Enter your monthly budget (KSh):"));

expense1 = Number(prompt("Enter your first expense (KSh):"));
expense2 = Number(prompt("Enter your second expense (KSh):"));
expense3 = Number(prompt("Enter your third expense (KSh):"));

// 3. Function to calculate total expenses
function calculateTotalExpenses() {
    return expense1 + expense2 + expense3;
}

// 4. Function to calculate remaining balance
function calculateBalance() {
    return budget - calculateTotalExpenses();
}

// 5. Display results in the console
console.log("===== SPENDWISE BUDGET REPORT =====");
console.log("Monthly Budget: KSh " + budget);
console.log("Total Expenses: KSh " + calculateTotalExpenses());
console.log("Remaining Balance: KSh " + calculateBalance());
