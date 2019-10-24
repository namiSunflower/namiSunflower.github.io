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
window.onload = function() {
    var dayOfWeek = new Date().getDay();
    if (dayOfWeek == 6){
        document.getElementById("pancake").style.display = "block";
    }
    else{
      document.getElementById("pancake").style.display = "none";
    }
}

  

  

