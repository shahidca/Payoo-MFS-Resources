
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    // current balance here
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber=parseFloat(currentBalance)

    // add money input
    const addMoneyAmount = document.getElementById('add-money').value;

    const addMoneyAmountNumber = Number(addMoneyAmount)

    // pin number
    const pinNumber = document.getElementById('pin-number').value;

    if (pinNumber == 3737) {
        let totalCurrentBalance = currentBalanceNumber + addMoneyAmountNumber;
        document.getElementById('current-balance').innerText = totalCurrentBalance;

    } else {
        alert('invalid pin number please try again')
    };
});
       //   Add Money hidden function
    document.getElementById('add-money-button').addEventListener('click', function(){
        console.log('add money button clicked')
        document.getElementById('cash-out-container').classList.add('hidden')
        document.getElementById('add-money-container').classList.remove('hidden')
    });
    