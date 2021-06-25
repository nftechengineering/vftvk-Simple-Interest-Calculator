function compute()

{
    
    var principal = document.getElementById("principal").value;
    if (principal == "" || principal <= 0){ //validate if data entered is valid
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var gains = parseInt(interest);

    document.getElementById("result1").innerHTML="If you deposit " + "<span class='highlight'>"+ principal+"</span>" + ",";
    document.getElementById("result2").innerHTML="at an interest rate of " + "<span class='highlight'>"+rate+"%"+"</span>"; 
    document.getElementById("result3").innerHTML="You will receive and amount of ";
    document.getElementById("gains").innerHTML="<span class='highlight'>"+ gains+ "</span>";
    document.getElementById("result4").innerHTML="in the year " + "<span class='highlight'>"+year+"</span>"; 

    //display data on console for counter checking
    console.log(principal);
    console.log(rate);
    console.log(interest);
    console.log(gains);
    console.log(typeof gains);
    console.log(typeof principal);
    console.log(typeof interest);


}

function updateRate() 
{
    var rateval = document.getElementById("rate").value; 
    document.getElementById("rate_val").innerText=rateval; //update display on slider value
}