
if (localStorage.getItem("filtered") === false || localStorage.getItem("filtered") === null) {
    localStorage.setItem("filtered", false);

    window.location.href = "humanFilter.html";
}

/* Funciones para la navbar */
var mobileMenuButton = document.getElementById("mobileMenuButton");
mobileMenuButton.onclick = function() {
    var navHeight = document.getElementById("mainNavBackground").clientHeight + 48
    console.log(navHeight);
    document.getElementById("mainMenuHideOnMobile").classList.toggle("-translate-y-full");
    document.getElementById("mainMenuHideOnMobile").classList.toggle("translate-y-["+navHeight+"px]");
    document.getElementById("mainMenuHideOnMobile").classList.toggle("mt-12");
    document.getElementById("mainMenuHideOnMobile").classList.toggle("shadow-xl");
    document.getElementById("mobileMenuButtonClose").classList.toggle("hidden");
    document.getElementById("mobileMenuButtonOpen").classList.toggle("hidden");
}
// Hide element when click outside nav
var theElementContainer = document.getElementsByTagName("nav")[0];
document.addEventListener('click', function(event) {
    if (!theElementContainer.contains(event.target)) {
        document.getElementById("mainMenuHideOnMobile").classList.add("-translate-y-full");
        document.getElementById("mainMenuHideOnMobile").classList.remove("mt-12");
        document.getElementById("mainMenuHideOnMobile").classList.remove("shadow-xl");
        document.getElementById("mobileMenuButtonOpen").classList.remove("hidden");
        document.getElementById("mobileMenuButtonClose").classList.add("hidden");
    }
});

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

    if (fuelType.value === "plasma") {
        // Calculate the result
        var result = (distance.value / fuelConsumption.value) * quantumFluxFactor.value * 0.618033 ;
        // Update the result input field
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

function resetHumanFilter() {
    localStorage.setItem("filtered", false);
    window.location.href = "humanFilter.html";
}