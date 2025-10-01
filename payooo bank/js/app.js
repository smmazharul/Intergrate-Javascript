

document.getElementById("login-btn").addEventListener("click", function(e){
    e.preventDefault();

    const accountNumber = document.getElementById("account-number").value;
    const pin = document.getElementById("pin").value;
    console.log(accountNumber, pin)
})