document.getElementById('longin-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)

    if (pinNumber ==3737){
        // alert("Successfully you are long in")
        window.location.href='/longin.html';
    }
    else {
        alert('sorry you are wrong pin or phone number')
    }
})