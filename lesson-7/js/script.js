/*Nav-bar*/
function toggleMenu(){
    document.getElementById("hamburger").classList.toggle("change");
    document.getElementById("nav-links").classList.toggle("change");
}
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
/*LAZY LOADING */
window.onscroll=function(ev){
  lazyload();
};
function lazyload(){
   const lazyImage = document.getElementsByClassName('lazy');
   for (var i=0;i<lazyImage.length;i++){
       if(elementInViewport(lazyImage[i])){
           lazyImage[i].setAttribute('src', lazyImage[i].getAttribute('data-src'));
}}}

function elementInViewport(el){
   const rect = el.getBoundingClientRect();
   return(
       rect.top >=0 &&
       rect.left >=0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
}
