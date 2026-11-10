
function calculateBudget() {
    const budget = Number(document.getElementById("budget").value);

    const expense1 = Number(document.getElementById("expense1").value);
    const expense2 = Number(document.getElementById("expense2").value);
    const expense3 = Number(document.getElementById("expense3").value);

    const totalExpenses = expense1 + expense2 + expense3;
    const balance = budget - totalExpenses;

    const result = document.getElementById("result");

    if (budget <= 0) {
        result.innerHTML = "<p>Please enter a valid monthly budget.</p>";
        return;
    }

    result.innerHTML = `
        <h3>Budget Summary</h3>
        <p>Monthly Budget: KSh ${budget.toLocaleString()}</p>
        <p>Total Expenses: KSh ${totalExpenses.toLocaleString()}</p>
        ${
            balance >= 0
            ? `<p>Remaining Balance: KSh ${balance.toLocaleString()}</p>
               <p>Great job! You are within your budget.</p>`
            : `<p>Overspending: KSh ${Math.abs(balance).toLocaleString()}</p>
               <p>You have exceeded your budget.</p>`
        }
    `;
}
