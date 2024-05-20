// --------------- 
// Enable hidden nav bar
// --------------- 
{
const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

var mediaQuery = window.matchMedia("(min-width: 600px)");

function handleScroll() {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
    // If scrolling down the page
  } else {
    nav.classList.remove("nav--hidden");
  }
  // If scrolling up the page

  lastScrollY = window.scrollY;
}

function handleMediaQueryChange(e) {
  if (e.matches) {
    // If the media query matches (i.e., viewport is 600px or less)
    window.addEventListener("scroll", handleScroll);
  } else {
    // If the media query does not match
    window.removeEventListener("scroll", handleScroll);
  }
}
}

// Initial check
handleMediaQueryChange(mediaQuery);

// Add a listener for changes to the media query
mediaQuery.addListener(handleMediaQueryChange);


// --------------- 
// Skjul af Navigations bar til mobil
// --------------- 

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}


function menuIcon(x) {
  x.classList.toggle("fa-xmark");
}



// ---------------
// Pilen på Artist siderne forsvinder når Footer bliver ramt
// --------------- 

var socialFloat = document.querySelector('#pilenPåSiderne');
var footer = document.querySelector('#footer');

function checkOffset() {
  function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
  }
  
  if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
    socialFloat.style.position = 'absolute';
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
    socialFloat.style.position = 'fixed'; // Påkaldes igen når man scroller up
  
  socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
}

document.addEventListener("scroll", function(){
  checkOffset();
});


// --------------- 
// Google map interaktion
// --------------- 

let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();


// --------------- 
// Tilbage knap til forrige side
// --------------- 

function goBack() {
  window.history.back()
}


