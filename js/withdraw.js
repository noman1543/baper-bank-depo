document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawFieldString = withdrawField.value;
    // const newWithdrawField = newWithdrawFieldString;

    const newWithdraw = parseFloat(newWithdrawFieldString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdraw = previousWithdrawTotal + newWithdraw;
    withdrawTotalElement.innerText = currentWithdraw;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);
    const newBalanceTotal = previousBalanceTotal - newWithdraw;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value = '';
})