document.getElementById("button-deposit").addEventListener('click',function(){
    const textDepo = document.getElementById("text-depo")
    const newtextDepoValue =textDepo.value
    const newtextDepoValueFloat =parseFloat(newtextDepoValue)
    const depositArea =document.getElementById('deposit-area')
    const predepositTotal =depositArea.innerText
    const predepositTotalFloat =parseFloat(predepositTotal)

    const updateTotal =predepositTotalFloat + newtextDepoValueFloat
    depositArea.innerText = updateTotal

    //for balance
    const balanceArea =document.getElementById("balance-area")
    const preBalanceTotal =balanceArea.innerText
    const preBalanceTotalFloat =parseFloat(preBalanceTotal)
  //calculate new depo with balance
    const updateBalance=preBalanceTotalFloat + newtextDepoValueFloat
    balanceArea.innerHTML =updateBalance

    textDepo.value=''
    
})


document.getElementById("button-withdraw").addEventListener('click',function(){
    const textWith =document.getElementById('text-with')
    const newtextWithValue =textWith.value
    // for float number
    const newtextWithValueFloat =parseFloat(newtextWithValue)

    const withdrawArea =document.getElementById("withdraw-area")
    const prewithdrawTotal =withdrawArea.innerText
    //for float
    const prewithdrawTotalFloat =parseFloat(prewithdrawTotal)
    const updateWithdraw =prewithdrawTotalFloat+newtextWithValueFloat
    withdrawArea.innerText =updateWithdraw



    //for balance
    const balanceArea =document.getElementById("balance-area")
    const preBalanceTotal =balanceArea.innerText
    const preBalanceTotalFloat =parseFloat(preBalanceTotal)
  //calculate new depo with balance
    const updateBalance=preBalanceTotalFloat - newtextWithValueFloat
    balanceArea.innerHTML =updateBalance

    textWith.value =''

})

