function estimateEmi() {
    var amount = document.getElementById("loanAmount").value;
    var words = estimateAmountToEmi(amount);
    document.getElementById("amountInWords").innerHTML = words;
}

function estimateAmountToEmi(amount) {
   
    let p = amount;
    let mon = 180;
    let rate = 8.5/12/100;

    let emi = p*rate*(1+rate)*mon/((1+rate)*mon-1);
    return `EMI Cost: ${Math.round(emi)}`;
}