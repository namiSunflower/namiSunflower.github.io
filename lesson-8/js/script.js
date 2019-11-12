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
function validate_form() {
  let full_name, phone_number, zip;
  full_name = document.getElementById('fullname');
  phone_number = document.getElementById('phone_number');
  zip = document.getElementById('zip');


  if (full_name.checkValidity() && phone_number.checkValidity() && zip.checkValidity()) {
      let win = window.open('thanks.html', '_blank');
      win.focus();
  }
}