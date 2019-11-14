//nav-bar
function toggleMenu(){
    document.getElementById("hamburger").classList.toggle("change");
    document.getElementById("nav-links").classList.toggle("change");
}
//footer js
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
//rating
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
//homepage
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

      if (towns[i].name == "Preston"  || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
        let box = document.createElement('section');       
        let h2 = document.createElement('h3');
        
        /*set h2 to town name using template literals*/
        h2.textContent =  (`${towns[i].name}`);
        box.appendChild(h2);

        let motto = document.createElement('h4');

        /*set p to prophet's prophet's birthdate*/
        motto.textContent = (`${towns[i].motto}`);
        box.appendChild(motto);

        let yearFounded = document.createElement('p');

        yearFounded.textContent = (`Year Founded: ${towns[i].yearFounded}`);
        box.appendChild(yearFounded);


        let currentPopulation = document.createElement('p');

        currentPopulation.textContent = (`Population: ${towns[i].currentPopulation}`);
        box.appendChild(currentPopulation);

        let averageRainfall = document.createElement('p');

        averageRainfall.textContent = (`Annual Rainfall: ${towns[i].averageRainfall}`);
        box.appendChild(averageRainfall);

        let photo = document.createElement('img');
        photo.setAttribute('src', "/lesson-9/images" + towns[i].photo);
             
  
        document.querySelector('div.test').appendChild(box);
      }
    }
});
 
