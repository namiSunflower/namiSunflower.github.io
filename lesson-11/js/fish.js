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
//weather API
const weatherlist = ('https://api.openweathermap.org/data/2.5/weather?lat=42.05&lon=-111.4633&units=imperial&APPID=43aef26214d4d9b9e621da13bc15ec15')
fetch(weatherlist)
    .then((response) => response.json())
    .then((jsObject) => {
        /*console.log(jsObject);  for verification purposes
        
        /*WEATHER CONDITION*/
        let weather = jsObject.weather[0].description;
        document.getElementById('weather').textContent = weather;

        /*TEMP*/
        let temp = jsObject.main.temp;
        document.getElementById('temp').textContent = Math.round(temp);

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
      const forecastlist = ('https://api.openweathermap.org/data/2.5/forecast?lat=42.05&lon=-111.4633&units=imperial&APPID=43aef26214d4d9b9e621da13bc15ec15')
      fetch(forecastlist)
    .then((response) => response.json())
    .then((jsObject) => {
       // console.log(jsObject);  for  verification purposes
      let forecast_list = jsObject.list;
      let num = 1;
      let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let i = 0; i < (forecast_list.length); i++) {
      let text = forecast_list[i].dt_txt.split(" ");
      if (text[1] == '18:00:00'){ 
        const date = new Date(forecast_list[i].dt_txt);
        const day = weekdays[date.getDay()];

        let imagesrc = 'https://openweathermap.org/img/w/' + forecast_list[i].weather[0].icon + '.png';
        let imagealt = 'https://openweathermap.org/img/w/' + forecast_list[i].weather[0].description;

        document.getElementById("weekday" + num).textContent = day;
        document.getElementById("icon" + num).setAttribute('src', imagesrc);
        document.getElementById("icon" + num).setAttribute('alt', imagealt);
        document.getElementById("forecast" + num).textContent = Math.round(forecast_list[i].main.temp) + "°F";    

        num += 1;   
      }
    }
  })
  /*EVENTS*/
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    /*console.table(jsonObject);  temporary checking for validation and data parsing*/

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

      if (towns[i].name == "Fish Haven") {       
        /*box or main container for the towns*/
        let box = document.createElement('div');     
        box.className = 'town-container';
        
        /*event text div*/
        let event_text=document.createElement('div');
        event_text.classList="event-text";
        let h3=document.createElement('h3');
        h3.classList="event-heading";
        h3.textContent="Upcoming Events"
        let hr=document.createElement('hr');
        let paragraph1=document.createElement('p')
        let paragraph2=document.createElement('p')
        let paragraph3=document.createElement('p')
        paragraph1.classList="event-paragraph";
        paragraph2.classList="event-paragraph";
        paragraph3.classList="event-paragraph";
        paragraph1.textContent=towns[i].events[0];
        paragraph2.textContent=towns[i].events[1];
        paragraph3.textContent=towns[i].events[2];
        box.appendChild(event_text);
        event_text.appendChild(h3);
        event_text.appendChild(hr);
        event_text.appendChild(paragraph1);
        event_text.appendChild(paragraph2);
        event_text.appendChild(paragraph3);

         /*event pic*/
         let small_photo = document.createElement('img');
         small_photo.setAttribute('src', "images/runS.jpg");
         small_photo.setAttribute('alt', `image of woman running in Bear Lake Blunder Run`);
         small_photo.classList="small-photo";
         let big_photo = document.createElement('img');
         big_photo.setAttribute('src', "images/runL.jpg");
         big_photo.setAttribute('alt', `image of woman running in Bear Lake Blunder Run`);
         big_photo.classList="big-photo";
         box.appendChild(small_photo); 
         box.appendChild(big_photo); 

        /*output*/
        document.getElementById('events').appendChild(box);
      }
    }
});
