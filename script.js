
var styleSheetNumber;
document.addEventListener("DOMContentLoaded", () => {
    var styles = document.styleSheets;

    for (var i=0; i<styles.length; i++) {
        var href = styles[i].href;

        if ( href == null ){
            continue;
        }
        if (href.includes("style.css")) {
            styleSheetNumber = i;
        }
    }

});



function toggleHiddenDescription(evt) {
    var news = document.getElementById(evt);
    if (news.classList.contains("hidden")) {
        document.scrollingElement.scrollTop = 0;
        document.styleSheets[styleSheetNumber].cssRules[3].style.filter = 'blur(10px)' 
    } else {
        document.styleSheets[styleSheetNumber].cssRules[3].style.filter = "none" 
    }
    news.classList.toggle("hidden");
}


function fuelCalculator() {
    // Get elements by name
    var fuelType = document.getElementsByName("fuelType")[0]; 
    var quantumFluxFactor = document.getElementsByName("quantumFluxFactor")[0]; 
    var fuelConsumption = document.getElementsByName("fuelConsumption")[0]; 
    var distance = document.getElementsByName("distance")[0]; 

    // Check if fuel type is "gasolina" (assuming it's a dropdown with "gasolina" as one of the options)
    if (fuelType.value === "plasma") {
        // Calculate the result
        var result = (distance.value / fuelConsumption.value) * quantumFluxFactor.value * 0.618033 ;
        // Update the result input field
        document.getElementsByName("fuelResult")[0].value = result;
    } else if (fuelType.value === "antimatter") {
        var result = (distance.value / fuelConsumption.value) * quantumFluxFactor.value * 0.718281;
    } else {
        var result = (distance.value / fuelConsumption.value) * quantumFluxFactor.value * 42;
    }

    
    document.getElementsByName("fuelResult")[0].value = Math.round(result,3); ;
}

function ageCalculator() {
    // Get values from input fields
    const originalAge = parseFloat(document.getElementById("originalAge").value);
    const originalFactor = parseFloat(document.getElementById("originalFactor").value);
    const actualFactor = parseFloat(document.getElementById("actualFactor").value);

   
    const actualAge = (originalAge / originalFactor) * actualFactor;

   
    // Display the result in the "Actual Age" input field
    document.getElementById("actualAge").value = actualAge.toFixed(2);
}
