const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;


function init ()
{

    /* Funciones para la animación */
    setTimeout(() => {
        enter()
    }, 1000);
    function enter() {

        const floor = document.getElementsByClassName('floor')[0];
        floor.style.animation = 'piso 2.5s forwards';

        const doors = document.getElementsByClassName('doors')[0];
        doors.style.animation = 'acercarse 4s forwards';
        
        const left = document.getElementsByClassName('left')[0];
        left.style.animation = 'open-doors 2s forwards';
        left.style.animationDelay = " 1s";
        
        const right = document.getElementsByClassName('right')[0];
        right.style.animation = 'open-doors 2s forwards';
        right.style.animationDelay = " 1s";
        
        const espacio = document.getElementsByClassName('espacio')[0];
        espacio.style.animation = 'espacio 2s forwards';
        espacio.style.animationDelay = " 1s";
        
        setTimeout(() => {
            const animationContainer = document.getElementsByClassName('animation')[0]; 
            animationContainer.style.display = 'none';
        }, 4000);
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
    
  

}
