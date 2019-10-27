function toggleMenu(){
    document.getElementById("hamburger").classList.toggle("change");
    document.getElementById("nav-links").classList.toggle("change");
}
var possibilities={
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
};
document.getElementById('output').innerHTML = new Date().toLocaleDateString('en-US', possibilities);
document.getElementById('copyright').textContent = new Date(document.lastModified).getFullYear();
  

//saturday pancake banner
var dayOfWeek = new Date().getDay();
   window.onload = function pancake() {
    if (dayOfWeek == 5){
        document.getElementById("pancake").style.display = "block";
    }
    else{
      document.getElementById("pancake").style.display = "none";
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {
      window.onload = function() {
        if (oldonload) {
          oldonload();
        }
        func();
      }
    }
  }
  
 /*Dynamic Weather*/ 
function weather(){
    if(dayOfWeek == 2){
        document.getElementById('weather').innerHTML="Rainy";
    }
    else if(dayOfWeek == 3){
        document.getElementById('weather').innerHTML="Windy";
    }
    else if(dayOfWeek == 4){
        document.getElementById('weather').innerHTML="Stormy";
    }
    else{
        document.getElementById('weather').innerHTML="Sunny";
    }
}

addLoadEvent(weather);
addLoadEvent(function(){
});
