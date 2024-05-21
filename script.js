// --------------- 
// Skjul navigationslinje på scrolling op og ned
// Taget hjælp og inspiration fra dette link https://www.youtube.com/watch?v=Q_XZk5Vnujw
// --------------- 

{
// Finder klassen .nav og bruges som kaldenavnet nav
const nav = document.querySelector(".nav");
// Hjælper med at finde hvor brugeren er på siden
let lastScrollY = window.scrollY;


// Sætter mediaQuery til at være width 600px op opefter
var mediaQuery = window.matchMedia("(min-width: 600px)");

function handleScroll() {
  if (lastScrollY < window.scrollY) {
    // Tilføjer nav--hidden til nav, hvis 
    nav.classList.add("nav--hidden");
  } else {
    // Fjerner nav--hidden fra nav
    nav.classList.remove("nav--hidden");
  }

  //Tjekker hvor på siden man er hele tiden. Om man scroller op eller ned
  lastScrollY = window.scrollY;
}

function handleMediaQueryChange(e) {
  if (e.matches) {
    // Sørger for ikke at blive fjerne handleScroll, når skærmen er 600px eller mindre
    window.addEventListener("scroll", handleScroll);
    
  } else {
    // Sørger for at blive tilføje handleScroll, når skærmen er 600px eller mindre
    window.removeEventListener("scroll", handleScroll);
    
  }
}
}

// Tjekker mediaQuery på brugeren
handleMediaQueryChange(mediaQuery);

// Tilføj en Listener til ændringer i mediaQuery
mediaQuery.addListener(handleMediaQueryChange);


// --------------- 
// Skjul af Navigations links til mobil
// Brugt W3Schools til hjælp af dette https://www.w3schools.com/howto/howto_js_topnav_responsive.asp 
// --------------- 

function myFunction() {
  // Hent elementet med id 'navbar' og gem det i variablen x
  var x = document.getElementById("navbar");
  
  // Tjek om klassens navn for elementet er præcis "nav"
  if (x.className === "nav") {
    // Hvis klassens navn er "nav", tilføj " responsive" til klassens navn
    x.className += " responsive"; // Resultatet bliver ".nav .responsive"
  } else {
    // Hvis klassens navn ikke er "nav", sæt klassens navn tilbage til "nav"
    x.className = "nav";
  }
}


// --------------- 
// Burgermenu icon. Brugt til at trykke fra og til
// Brugt W3Schools til hjælp af dette https://www.w3schools.com/howto/howto_css_menu_icon.asp
// --------------- 

function menuIcon(x) {
  // Ændrer burgermenuens icon fra burger til kryds
  x.classList.toggle("fa-xmark");
  
}


// ---------------
// Pilen på Artist siderne forsvinder når Footer bliver ramt
// https://codepen.io/lionelpaulus/pen/YGXwxM
// Brugt dette eksempel fra CodePen
// --------------- 


// Vælg elementet med id 'pilenPåSiderne' og gem det i variablen socialFloat
var socialFloat = document.querySelector('#pilenPåSiderne');
// Vælg elementet med id 'footer' og gem det i variablen footer
var footer = document.querySelector('#footer');



function checkOffset() {
  // Funktion til at få den øverste position af et element relativt til viewport
  function getRectTop(el){
    
    var rect = el.getBoundingClientRect();
    return rect.top;
  }
  // Hvis bunden af socialFloat er tæt på toppen af footer (med 10 pixels margin)
  if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
  
  // Sæt positionen af socialFloat til 'absolute' (fast position i dokumentet)
    socialFloat.style.position = 'absolute';
    
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))

    // Hvis bunden af viewporten er over toppen af footer
    // Sæt positionen af socialFloat til 'fixed' (fast position i viewporten)
    socialFloat.style.position = 'fixed';
  
    // Opdater socialFloat's indhold med nuværende scroll position og vinduets højde
  socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
  
}

// Tilføj en event listener til 'scroll' begivenheden, der kalder checkOffset-funktionen
document.addEventListener("scroll", function(){
  checkOffset();
});


// --------------- 
// Google map interaktion
// Brugt Googles eget embed kode til JavaScript
// https://www.google.com/maps/place/Libra+Classic/@56.1582478,10.209031,16z/data=!3m1!4b1!4m6!3m5!1s0x464c3feecb988517:0xd1970621bf11704c!8m2!3d56.1582478!4d10.2116059!16s%2Fg%2F11mvrnxsgp?entry=ttu
// --------------- 

let map;

async function initMap() {
  // Placeringen af Uluru (latitude og longitude)
  const position = { lat: -25.344, lng: 131.031 };

  // Anmod om de nødvendige biblioteker fra Google Maps API.
  // @ts-ignore bruges til at ignorere TypeScript advarsler om ukendte egenskaber
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Opret et nyt kort centreret ved Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,               // Zoom niveauet for kortet
    center: position,      // Kortets center position
    mapId: "DEMO_MAP_ID",  // ID for det specifikke kortlayout (kan være et demo eller brugerdefineret kort)
  });

  // Opret en ny markør placeret ved Uluru
  const marker = new AdvancedMarkerElement({
    map: map,           // Kortet som markøren skal placeres på
    position: position, // Positionen af markøren
    title: "Uluru",     // Titel på markøren (vises som en tooltip)
  });
}

// Initialiser kortet ved at kalde initMap-funktionen
initMap();



// --------------- 
// Tilbage knap til forrige side
// https://www.w3schools.com/jsref/met_his_back.asp
// Brugt W3Schools til at lave tilbage funktionen til artist siderne.
// --------------- 

function goBack() {
  // Brug browserens historik til at gå tilbage til den forrige side
  window.history.back()
}


