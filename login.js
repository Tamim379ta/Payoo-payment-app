document.getElementById('login-btn')
.addEventListener('click', function(){
  const inputNumber = document.getElementById('input-number');
  const number = inputNumber.value;

  const inputPin = document.getElementById('input-pin');
  const pin = inputPin.value;

  if(number === "11111111111" && pin === "1234"){
    alert('Login Success');

    window.location.assign('/home.html')
  }
  else{
    alert('Login Failed')
  }
})