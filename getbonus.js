document.getElementById('get-bonus-btn')
.addEventListener('click',function(){
  const getBonus = getValueFromInput('coupon')

  if(getBonus === "GET"){
    const newBalance = Number(getBalance()) + 2000 ;

    setBalance(newBalance);
  }else{
    alert("Invalid Coupon")
    return;
  }

})