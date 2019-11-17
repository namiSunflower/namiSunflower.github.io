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
    /*console.table(jsonObject);  temporary checking for validation and data parsing*/

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

      if (towns[i].name == "Preston"  || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {       
        /*box or main container for the towns*/
        let box = document.createElement('div');     
        box.className = 'town-container';

        /*div for town text*/
        let towninfo = document.createElement('div');
        towninfo.classList = 'town-info';
        box.appendChild(towninfo);

        /*h3 text for town titles*/
        let h3 = document.createElement('h3');
        h3.classList = 'town-heading';
        h3.textContent =  (`${towns[i].name}`); 
        towninfo.appendChild(h3);

        /*motto with h4 size for subheading*/
        let motto = document.createElement('h4');
        motto.classList = 'town-subheading';
        motto.textContent = (`${towns[i].motto}`);
        towninfo.appendChild(motto);
        
        /*div for p text in town info*/
        let townparagraph = document.createElement('div');
        townparagraph.classList ="town-paragraph";
        towninfo.appendChild(townparagraph);


        /*year founded with p tag*/
        let yearFounded = document.createElement('p');
        yearFounded.textContent = (`Year Founded: ${towns[i].yearFounded}`);
        townparagraph.appendChild(yearFounded);

        /*current population of town*/
        let currentPopulation = document.createElement('p');
        currentPopulation.textContent = (`Population: ${towns[i].currentPopulation}`);
        townparagraph.appendChild(currentPopulation);

        /*average annual rainfall*/
        let averageRainfall = document.createElement('p');
        averageRainfall.textContent = (`Annual Rainfall: ${towns[i].averageRainfall}`);
        townparagraph.appendChild(averageRainfall);

        /*photo and alt text*/
        let photo = document.createElement('img');
        photo.setAttribute('src', "images/" + towns[i].photo);
        photo.setAttribute('alt', `image of ${towns[i].name}`);
        box.appendChild(photo); 

        /*output*/
        document.getElementById('cards').appendChild(box);
      }
    }
});
var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("banner-div");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 8 seconds
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

