document.getElementById('add-btn')
.addEventListener('click', function(){

  const selectBank = getValueFromInput('select-bank')
  if(selectBank === "Select Bank"){
    alert('Select A Bank')
    return;
  }

  const accountNumber = getValueFromInput('account-number');
  if(accountNumber.length !== 11){
    alert("Invalid Account Number")
    return;
  }

  const addAmount = getValueFromInput('add-amount-number');
  const currentBalance =  Number(getBalance());
  const newBalance = currentBalance + Number(addAmount);

  const pin = getValueFromInput('add-money-pin');
  if(pin === "1234"){
    alert(`Add Money Success From ${selectBank} 
      at ${Date()}`)
    setBalance(newBalance);

   const history = document.getElementById('history-container');
   const newHistory = document.createElement('div')
   newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    Add Money Success
    Amount ${addAmount}
    In ${accountNumber}
    at ${Date()}
    </div>
    `
    history.append(newHistory);
  }else{
    alert("Invalid Pin")
    return;
  }
 
})