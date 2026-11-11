
function calculateBudget() {
    const budget = Number(document.getElementById("budget").value);
    const expense1 = Number(document.getElementById("expense1").value);
    const expense2 = Number(document.getElementById("expense2").value);
    const expense3 = Number(document.getElementById("expense3").value);

    const result = document.getElementById("result");

    if (!budget || budget <= 0) {
        result.innerHTML = "Please enter a valid budget.";
        return;
    }

    const totalExpenses = expense1 + expense2 + expense3;
    const balance = budget - totalExpenses;

    result.innerHTML = `
        <h3>Budget Summary</h3>
        <p>Monthly Budget: KSh ${budget.toLocaleString()}</p>
        <p>Total Expenses: KSh ${totalExpenses.toLocaleString()}</p>
        <h3>${balance >= 0 ? "Remaining Balance" : "Overspending"}: 
        KSh ${Math.abs(balance).toLocaleString()}</h3>
        <p>${balance >= 0 ? "Great job! You are within your budget!" : "You have exceeded your budget!"}</p>
    `;
}
