document.getElementById('withdraw-btn')
.addEventListener('click', function(){

  const cashOutNumber = getValueFromInput('cashout-number');
  if (cashOutNumber.length != 11){
    return alert("Invalid Number");
  }

  const amountNumber = getValueFromInput('amount-number');

  const currBalance = getBalance();

  const newBalance = currBalance - Number(amountNumber)

  if( newBalance < 0) {
    return alert("Invalid Balance")
  }

  const cashoutPin = getValueFromInput('cashout-pin')

  if(cashoutPin === '1234'){

    alert(`Cash Out Success 
      Amount ${amountNumber}
      at ${Date()}`)
    setBalance(newBalance);

   const history = document.getElementById('history-container');
   const newHistory = document.createElement('div')
   newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    Cash Out Success
    Amount ${amountNumber}
    To ${cashOutNumber}
    at ${Date()}
    </div>
    `
    history.append(newHistory);

  }else{
    return alert("Invalid Pin")
  }

})