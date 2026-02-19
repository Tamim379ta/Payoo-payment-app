function getValueFromInput(id){

  const input = document.getElementById(id);
  const value = input.value;
  
  return value;

}

function getBalance(){

  const balanceNumber =  document.getElementById('balance');
  const balance = balanceNumber.innerText;

  return Number(balance);

}


function setBalance(value){
  const balanceElement =  document.getElementById("balance");
  balanceElement.innerText = value;
}


function showOnly(id){

  console.log("clicked")
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cash-out");
  const transfer = document.getElementById("transfer-money");
  const payBill = document.getElementById("pay-bill");
  const transaction = document.getElementById("history");
  const bonus = document.getElementById("get-bonus");

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  transfer.classList.add("hidden");
  payBill.classList.add("hidden");
  transaction.classList.add("hidden")
  bonus.classList.add("hidden")

  const select = document.getElementById(id);
  select.classList.remove("hidden");
}