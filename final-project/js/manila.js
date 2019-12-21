/*MANILA WEATHER & TEMPLE*/
const temples = '/final-project/js/temples.json'

fetch(temples)
.then(function(response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  

const temple = jsonObject['temples'];

for (let i = 0; i < temple.length; i++ ) {
    if (temple[i].name == "Manila Philippines Temple"){
     /*pic*/  
    let pic_div = document.createElement('div');
    pic_div.classList="pic-div";
    let img1 = document.createElement('img');
    img1.setAttribute('src', temple[i].image)
    pic_div.appendChild(img1);
    img1.setAttribute('alt', `image of ${temple[i].name}`);

    /*info*/
    let info_div = document.createElement('div');
    info_div.classList="info-div";

    /*second accordion for schedules*/
    let ac2 = document.createElement('div');
    let input2 = document.createElement('input');
    input2.setAttribute('id', "ac-2");
    input2.setAttribute('name', "accordion");
    input2.setAttribute('type', "radio");
    /*here*/input.checked="true";

    let label_for2 = document.createElement('label');
    label_for2.setAttribute('for', "ac-1");
    label_for2.innerHTML ='Contact Details';

    let article2 = document.createElement('div');

    info_div2.appendChild(input);
    info_div2.appendChild(label_for);
    info_div2.appendChild(article);

    let address2= document.createElement('p');
    address2.innerHTML= "Address:" + temple[i].address;
    
    let telephone = document.createElement('p');
    telephone.innerHTML= "Telephone:" + temple[i].telephone;
    
    let email = document.createElement('p');
    email.innerHTML = "Email:" + temple[i].email;

    article.appendChild(address);
    article.appendChild(telephone);
    article.appendChild(email);
  
    document.getElementById('cards1').appendChild(pic_div); 
    document.getElementById('cards1').appendChild(info_div);

     /*first accordion for contact details*/
     let ac1 = document.createElement('div');
     let input = document.createElement('input');
     input.setAttribute('id', "ac-1");
     input.setAttribute('name', "accordion");
     input.setAttribute('type', "radio");
     /*here*/input.checked="true";
 
     let label_for = document.createElement('label');
     label_for.setAttribute('for', "ac-1");
     label_for.innerHTML ='Contact Details';
 
     let article = document.createElement('div');
 
     info_div.appendChild(input);
     info_div.appendChild(label_for);
     info_div.appendChild(article);
 
     let address= document.createElement('p');
     address.innerHTML= "Address:" + temple[i].address;
     
     let telephone = document.createElement('p');
     telephone.innerHTML= "Telephone:" + temple[i].telephone;
     
     let email = document.createElement('p');
     email.innerHTML = "Email:" + temple[i].email;
 
     article.appendChild(address);
     article.appendChild(telephone);
     article.appendChild(email);
   
     document.getElementById('cards1').appendChild(pic_div); 
     document.getElementById('cards1').appendChild(info_div);
   
} 
}});