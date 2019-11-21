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
//weather API
const weatherlist = ('https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=43aef26214d4d9b9e621da13bc15ec15')
fetch(weatherlist)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject); 
        
        /*WEATHER CONDITION*/
        let weather = jsObject.weather[0].main;
        document.getElementById('weather').textContent = weather;

        /*TEMP*/
        let temp = jsObject.main.temp;
        document.getElementById('temp').textContent = temp;

        /*HUMIDITY*/
        let humidity = jsObject.main.humidity;
        document.getElementById('humidity').textContent = humidity;

         /*WIND SPEED*/
        let wind_speed = jsObject.wind.speed
        document.getElementById('wind-speed').textContent = wind_speed;

        /*WIND CHILL*/
        let wind_chill = 35.74 + (0.6215*temp) - (35.75*(Math.pow(wind_speed,0.16))) + (0.4275*temp*(Math.pow(wind_speed,0.16)));
        if (temp <= 50 && wind_speed > 3){
          document.getElementById('wind-chill').textContent=Math.round(wind_chill) + "°F"; }
      else{
        document.getElementById('wind-chill').textContent="N/A";
      } 
    });
      /*5 DAY FORECAST*/
      const forecastlist = ('https://api.openweathermap.org/data/2.5/forecast?&id=5604473&units=imperial&APPID=43aef26214d4d9b9e621da13bc15ec15')
      fetch(forecastlist)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject); 
      let forecast_list = jsObject.list;
      let num = 1;
      let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let i = 0; i < (forecast_list.length); i++) {
      let text = forecast_list[i].dt_txt.split(" ");
      if (text[1] == '18:00:00'){ 
        let imagesrc = '//openweathermap.org/img/w/' + forecast_list[i].weather[0].icon + '.png';
        let imagealt = '//openweathermap.org/img/w/' + forecast_list[i].weather[0].description;

        const date = new Date(forecast_list[i].dt_txt);
        const day = weekdays[date.getDay()];

        document.getElementById("weekday" + num).textContent = day;
        document.getElementById("icon" + num).setAttribute('src', imagesrc);
        document.getElementById("icon" + num).setAttribute('alt', imagealt);
        document.getElementById("forecast" + num).textContent = forecast_list[i].main.temp + "°F";
        
              
      num += 1;   
      }
    }
  })
      
