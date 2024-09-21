function Calculate(){
    const your = document.getElementById("your").value.trim();
    const partner = document.getElementById("partner").value.trim();
    if(your==="" || partner===""){
        alert("Please Fill both boxes");
    }
    else{
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");
        result.innerHTML = `${your} and ${partner}'s Love Percentage: ${lovePercentage}`;
        
        if(lovePercentage<30){
            result.innerHTML += "<br> Not a GOOD MATCH.";
        }
        else if(lovePercentage>=30 && lovePercentage<70){
            result.innerHTML += "<br> There is a POTENTIAL. & Best Friends";
        }
        else{
            result.innerHTML += "<br> Great Match!";
        }
    }
}