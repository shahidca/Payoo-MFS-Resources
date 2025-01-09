
document.getElementById('longin-btn').addEventListener('click', function (e) {
    e.preventDefault()
      // current balance here
      const currentBalance = document.getElementById('current-balance').innerText;
      let currentBalanceNumber = Number(currentBalance)
    //   Add Money hidden function
     addMoneyButton= function(){
        document.getElementById('cash-out-container').getElementsByClassName.hidden;
     }
 

    // add money input
    const addMoneyAmount = document.getElementById('add-money').value;

    const addMoneyAmountNumber = Number(addMoneyAmount)

    // pin number
    const pinNumber = document.getElementById('pin-number').value;
   
    if (pinNumber == '3737') {
        let totalCurrentBalance = currentBalanceNumber + addMoneyAmountNumber;
         document.getElementById('current-balance').innerText=totalCurrentBalance;
        
    } else {
        alert('invalid pin number please try again')
    };
});