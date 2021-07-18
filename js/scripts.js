/* Start */
function load(){
   /* document.getElementById("checkbox-trad").checked = false;*/
}

/* Make Sound */

function beep() {
    var audio = document.getElementById("beep");
    audio.volume = 0.1;
    audio.play();
}

function traduct() {

    var url = window.location.href;
    var indexOf = url.length;
    var ubication = url.substring(url.length-10,url.length);
    alert(ubication);
    var audio = document.getElementById("switchSound");
    var x = document.getElementById("traduction-screen");
    //var traductVar = localStorage['traductOn'] || 'false';

    // Get the checkbox
    var checkBox = document.getElementById("checkbox-trad");
    audio.volume = 0.1;
    audio.play();

  // If the checkbox is checked
  if (checkBox.checked == true || ubication == 'index.html'){

    if (window.confirm("Esta a punto de traducir el sitio al español, para regresar a la web original presionar regresar en su navegador, desea continuar?")) { 
        
    let tID = setTimeout(function () {

    document.getElementById("test").innerHTML = "&nbsp;&nbsp;Traduciendo al Español...";
    x.className += "center-screen d-block";

    window.clearTimeout(tID);		// clear time out.
    
    x.className = "center-screen d-none";
    
    localStorage['traductOn'] = 'true'; // only strings

    // similar behavior as clicking on a link
    window.location.href = "https://translate.google.com/translate?sl=en&tl=es&u=https://jumanchuk.github.io/";

    }, 3000);	// call function after 3000 milliseconds or 3 seconds
    }
  } else{

    alert('Ya el sitio fue traducido, presione Regresar en su navegador para volver al idioma original.')
  }

  }

/* TOGGLE MENU */
  
  function navBarFn() {
    var x = document.getElementById("navBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function navHide() {
    var x = document.getElementById("navBar");
    if (x.className === "topnav responsive") {
        x.className = "topnav";
    } else {
        x.className = "topnav";
    }
}

/* Navigation Menu Function */
function navigateMenu(id){
    /* Pass the menu item / slide id number */
        var1 = "#slideItem" + id;
        var2 = "#indicator" + id;

        $('div.carousel-item').removeClass("active");
        $(var1).toggleClass("active");

        $('.indicator').removeClass("active");
        $(var2).toggleClass("active");
}

/* Carousel Pause */
function pauseCarousel(){
    $('.carousel').carousel('pause'); 
}
