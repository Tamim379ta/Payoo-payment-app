document.getElementById('pay-btn')
.addEventListener('click', function(){
  const selectPay = getValueFromInput('select-pay');
  if (selectPay === 'Select pay'){
    alert('Select A Pay Option')
    return;
  }

  const billerAccount = getValueFromInput('pay-bill-number');
  if (billerAccount.length !== 11){
    alert('Invalid Account Number')
    return;
  }

  const payAmount = getValueFromInput('pay-amount-number');
  const currentBalance = Number(getBalance());

  const newBalance = currentBalance - Number(payAmount);

  const pin = getValueFromInput('pay-pin');
  if(pin === '1234'){
    alert(`Pay Bill Success To ${selectPay}
       at ${Date()}`);
       setBalance(newBalance);

       const history = document.getElementById('history-container');
       const newHistory = document.createElement('div')
       newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Pay Bill Success
        Amount ${payAmount}
        To ${selectPay}
        at ${Date()}
        </div>
      ` 
      history.append(newHistory);
  }else{
    alert("Invalid Pin")
    return;
  }
})