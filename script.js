function calculateBMI(height, weight) {
    var bmi = (weight * 10000 ) / (height * height);
    document.getElementById("result").innerHTML = "Console Log: " + bmi.toFixed(2);
}

function isoverweight(height, weight) {
    var bmi = (weight * 10000 ) / (height * height);
    if (bmi > 25) {
        document.getElementById("knowyou").innerHTML = "You are overweight";
    }
    else {
        document.getElementById("knowyou").innerHTML = "You are not overweight";
    }
}

var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (height == "" || weight == "") {
        alert("Please enter your height and weight");
    }
    else{
        event.preventDefault();
        calculateBMI(height, weight);
        isoverweight(height, weight);
    }
});