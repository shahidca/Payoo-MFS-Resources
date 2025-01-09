
document.getElementById('longin-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('long in button chick now')

    // add money input
    const addMoneyAmount=document.getElementById('add-money').value;
    console.log(addMoneyAmount)

    // pin number
    const pinNumber=document.getElementById('pin-number').value;
    console.log(pinNumber)
})