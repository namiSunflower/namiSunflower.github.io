function toggle(){
    /*document.getElementById("hamburger").classList.toggle("change");*/
    document.getElementById("nav-links").classList.toggle("change");
    document.getElementById("icon-burger").classList.toggle("change");
    document.getElementById("x").classList.toggle("change");
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
function check(){
    let date1 = new Date(document.getElementById('checkin').value);
    let date2 = new Date(document.getElementById('checkout').value);
    let diff = Math.abs(date2.getTime() - date1.getTime());
    let noofdays = Math.ceil(diff / (1000 * 3600 * 24));  
    if(date1  > date2){ 
      alert("Check-out date must be after check-in date!");
      return false;
    }
    else {
      return true;
    }
  }