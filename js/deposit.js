document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositAmountString);
    const depositBalance = document.getElementById('deposit-amount');
    const depositPreviousTotalString = depositBalance.innerText;
    const depositPreviousTotal = parseFloat(depositPreviousTotalString);
    const currentDeposit = depositPreviousTotal + NewDepositAmount;
    depositBalance.innerText = currentDeposit;

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    const currentBalanceTotal = currentDeposit + previousBalance;
    balanceElement.innerText = currentBalanceTotal;

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);
    depositField.value = '';

})