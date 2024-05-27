document.getElementById("button-handle").addEventListener("click" ,function(){
    const emailArea =document.getElementById("email-area")
    const emailAreaValue =emailArea.value
    
    const passArea =document.getElementById("pass-area")
    const passAreaValue = passArea.value
    //console.log(passAreaValue)

    if(emailAreaValue== "muhsina@gmail.com" && passAreaValue=='343434')
        window.location.href= 'bank.html'
    else{
      alert('invalid password')
    }
})