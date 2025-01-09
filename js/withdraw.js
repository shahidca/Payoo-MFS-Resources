// withdraw button find here
document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault()
    // console.log('withdraw button clicked')
    // cash out money
    const cashOutMoney=document.getElementById('cash-out').value;
    console.log(cashOutMoney)
    const cashOutMoneyNumber=parseFloat(cashOutMoney)
    // pin number
    const withdrawPinNumber=document.getElementById('withdraw-pin-number').value;
    console.log(withdrawPinNumber)
    // current balance here
    const availableBalance=document.getElementById('current-balance').innerText;
    console.log(availableBalance);
    const availableBalanceNumber=parseFloat(availableBalance);
    // withdraw condition here
    if(withdrawPinNumber==3737 && cashOutMoneyNumber < availableBalanceNumber ){
        console.log('successfully amount withdraw')
        const newCurrentBalance=availableBalanceNumber - cashOutMoneyNumber;
        document.getElementById('current-balance').innerText=newCurrentBalance;
        console.log(newCurrentBalance);

    }else{
        alert('sorry invalid pin or password please try again')
    }

}) 