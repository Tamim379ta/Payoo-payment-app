document.getElementById('withdraw-btn')
.addEventListener('click', function(){

  const cashOutInput = document.getElementById('cashout-number');
  const cashOutNumber = cashOutInput.value;
  if (cashOutNumber.length != 11){
    return alert("Invalid Number");
  }

  const amountInput = document.getElementById('amount-number');
  const amountNumber = amountInput.value;

  const balanceNumber =  document.getElementById('balance');
  const balance = balanceNumber.innerText;

  const newBalance = Number(balance) - Number(amountNumber)

  if( newBalance < 0) {
    return alert("Invalid Balance")
  }

  const cashoutPin = document.getElementById('cashout-pin');
  const pin = cashoutPin.value;

  if(pin === '1234'){

    balanceNumber.innerText = newBalance;

  }else{
    return alert("Invalid Pin")
  }






})