document.getElementById('longin-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    document.getElementById('phone-number').value=''
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)
    document.getElementById('pin-number').value=''
    if (phoneNumber === "01779393737" && pinNumber === '3737'){
        // alert("Successfully you are long in")
        window.location.href='/longin.html';
    }
    else {
        alert('sorry you are wrong pin or phone number')
    }
})