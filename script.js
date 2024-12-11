document.getElementById("CalculateBtn").addEventListener("click", calculateLoan);

function calculateLoan() {
    const loanAmt = parseFloat(document.getElementById("loanAmt").value);
    const intrestrate = parseFloat(document.getElementById("intrestrate").value);
    const loanTerm = parseFloat(document.getElementById("loanterm").value);

    if (isNaN(loanAmt) || isNaN(intrestrate) || isNaN(loanTerm)) {
        alert("Please enter a valid number for all the fields!");
        return;
    }

    const monthlyIntrest = intrestrate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayments = (loanAmt * monthlyIntrest) / 
                            (1 - Math.pow(1 + monthlyIntrest, -totalPayments));
    const totalintrest = (monthlyPayments * totalPayments) - loanAmt;

    displayResult(monthlyPayments, totalintrest);
}

function displayResult(monthlyPayments, totalintrest) {
    const resultdiv = document.getElementById("result");

    resultdiv.innerHTML =
        `<p><strong>Monthly Payment: ${monthlyPayments.toFixed(2)}</strong></p>` +
        `<p><strong>Total Interest: ${totalintrest.toFixed(2)}</strong></p>`;
}
