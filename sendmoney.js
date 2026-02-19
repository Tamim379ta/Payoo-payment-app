document.getElementById('send-btn')
.addEventListener('click', function(){

  const userNumber = getValueFromInput('send-number');
  if(userNumber.length !== 11){
    alert('Invalid Number')
    return;
  }

  const sendAmount = getValueFromInput('send-amount-number');
  const currentBalance = Number(getBalance());

  const newBalance = currentBalance - Number(sendAmount);

  const pin = getValueFromInput('send-pin');
  if(pin === "1234"){
    alert(`Send money success to${userNumber}
       at ${Date()} `)
    setBalance(newBalance);

       const history = document.getElementById('history-container');
       const newHistory = document.createElement('div')
       newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Send Amount Success
        Amount ${sendAmount}
        To ${userNumber} 
        at ${Date()}
        </div>
      ` 
      history.append(newHistory);
  }else{
    alert("Invalid Pin")
    return;
  }

})