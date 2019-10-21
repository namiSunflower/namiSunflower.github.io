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

window.onload = function() {
    var dayOfWeek = new Date().getDay();
    if (dayOfWeek == 5){
        document.getElementById("pancake").style.display = "block";
    }
    else{
      document.getElementById("pancake").style.display = "none";
    }
/*Dynamic Weekly Weather*/ 
        //sunday-monday
        if (dayOfWeek == 0 || dayOfWeek == 1) {
        output="Currently: Sunny <br> High: 76℉ <br> Precipitation: 4% <br> Humidity: 69% <br> Wind Speed: 10 mph <br> "}
        //tuesday
        else if (dayOfWeek == 2) {
        output="Currently: Rainy <br> High: 71°F <br>Precipitation: 4% <br> Humidity: 59% <br> Wind Speed: 9 mph"}
        //wednesday
        else if (dayOfWeek == 3) {
        output="Currently: Windy <br> High: 70°F <br> Precipitation: 8% <br> Humidity: 60% <br> Wind Speed: 15 mph"}
        //thursday
        else if (dayOfWeek == 4) {
        output="Currently: Stormy <br> High: 68°F <br> Precipitation: 6%<br> Humidity: 51% <br> Wind Speed: 13 mph"}
        //friday-sat
        else{output="Currently: Sunny <br> High: 71°F <br> Precipitation: 5% <br> Humidity: 55% <br> Wind Speed: 10 mph"};
        
        //Output
        document.getElementById('dynamic-weather').innerHTML=output;
    }
  

  

