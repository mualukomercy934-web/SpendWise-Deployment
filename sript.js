
function calculateBudget() {
    let budget = Number(document.getElementById("budget").value);

    let expense1 = Number(document.getElementById("expense1").value);
    let expense2 = Number(document.getElementById("expense2").value);
    let expense3 = Number(document.getElementById("expense3").value);

    let totalExpenses = expense1 + expense2 + expense3;

    let balance = budget - totalExpenses;

    let result = document.getElementById("result");

    if (budget <= 0) {
        result.innerHTML = "Please enter a valid budget.";
    } else if (balance >= 0) {
        result.innerHTML =
            "<h3>Budget Summary</h3>" +
            "<p>Monthly Budget: KSh " + budget + "</p>" +
            "<p>Total Expenses: KSh " + totalExpenses + "</p>" +
            "<p>Remaining Balance: KSh " + balance + "</p>" +
            "<p>Great job! You are within your budget.</p>";
    } else {
        result.innerHTML =
            "<h3>Budget Summary</h3>" +
            "<p>Monthly Budget: KSh " + budget + "</p>" +
            "<p>Total Expenses: KSh " + totalExpenses + "</p>" +
            "<p>Overspending: KSh " + Math.abs(balance) + "</p>" +
            "<p>You have exceeded your budget.</p>";
    }
}
