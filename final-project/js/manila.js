/*MANILA WEATHER & TEMPLE*/
const temples = '/final-project/js/temples.json'

fetch(temples)
.then(function(response) {
    return response.json();
  })
  .then(function (jsonObject) {

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

    /*first accordion for contact details*/
    let ac1 = document.createElement('div');
    ac1.classList="ac1";
    info_div.appendChild(ac1);

    let input = document.createElement('input');
    input.setAttribute('id', "ac-1");
    input.setAttribute('name', "accordion");
    input.setAttribute('type', "radio");

    let label_for = document.createElement('label');
    label_for.setAttribute('for', "ac-1");
    label_for.innerHTML ='Contact Details';

    let article = document.createElement('div');
    article.classList="article1";

    ac1.appendChild(input);
    ac1.appendChild(label_for);
    ac1.appendChild(article);

    let address= document.createElement('p');
    address.innerHTML= "Address:" +  " " + temple[i].address;
    
    let telephone = document.createElement('p');
    telephone.innerHTML= "Telephone:" +  " " + temple[i].telephone;
    
    let email = document.createElement('p');
    email.innerHTML = "Email:" +  " " + temple[i].email;

    article.appendChild(address);
    article.appendChild(telephone);
    article.appendChild(email);

    document.getElementById('cards1').appendChild(pic_div); 
    document.getElementById('cards1').appendChild(info_div);

  /*second accordion for schedule and services*/
    let ac2 = document.createElement('div');
    ac2.classList="ac2";
    info_div.appendChild(ac2);

    let input2 = document.createElement('input');
    input2.setAttribute('id', "ac-2");
    input2.setAttribute('name', "accordion");
    input2.setAttribute('type', "radio");

    let label_for2 = document.createElement('label');
    label_for2.setAttribute('for', "ac-2");
    label_for2.innerHTML ='Schedule and Services';

    let article2 = document.createElement('div');
    article2.classList="article2";

    ac2.appendChild(input2);
    ac2.appendChild(label_for2);
    ac2.appendChild(article2);

    let schedule= document.createElement('p');
    schedule.innerHTML= "Schedule:" +  " " + temple[i].schedule;
    
    /*services*/
    let services = document.createElement('p');
    services.innerHTML= "Services:";
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');

    li1.innerHTML=temple[i].services[0];
    li2.innerHTML=temple[i].services[1];
    li3.innerHTML=temple[i].services[2];
    li4.innerHTML=temple[i].services[3];

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);


    article2.appendChild(schedule);
    article2.appendChild(services);
    article2.appendChild(ul);

    /*third accordion for closure*/
    let ac3 = document.createElement('div');
    ac3.classList="ac3";
    info_div.appendChild(ac3);

    let input3 = document.createElement('input');
    input3.setAttribute('id', "ac-3");
    input3.setAttribute('name', "accordion");
    input3.setAttribute('type', "radio");

    let label_for3 = document.createElement('label');
    label_for3.setAttribute('for', "ac-3");
    label_for3.innerHTML ="Temple Closures";

    let article3 = document.createElement('div');
    article3.classList="article3";

    ac3.appendChild(input3);
    ac3.appendChild(label_for3);
    ac3.appendChild(article3);

    /*Closures*/
    let cl1 = document.createElement('p');
    let cl2 = document.createElement('p');
    let cl3 = document.createElement('p');
    let cl4 = document.createElement('p');
    let cl5 = document.createElement('p');
    let cl6 = document.createElement('p');
    let cl7 = document.createElement('p');
    let cl8 = document.createElement('p');

    cl1.innerHTML=temple[i].closure[0];
    cl2.innerHTML=temple[i].closure[1];
    cl3.innerHTML=temple[i].closure[2];
    cl4.innerHTML=temple[i].closure[3];
    cl5.innerHTML=temple[i].closure[4];
    cl6.innerHTML=temple[i].closure[5];
    cl7.innerHTML=temple[i].closure[6];
    cl8.innerHTML=temple[i].closure[7];


    article3.appendChild(cl1);
    article3.appendChild(cl2);
    article3.appendChild(cl3);
    article3.appendChild(cl4);
    article3.appendChild(cl5);
    article3.appendChild(cl6);
    article3.appendChild(cl7);
    article3.appendChild(cl8);


    /*fourth accordion for milestones*/
    let ac4 = document.createElement('div');
    ac4.classList="ac4";
    info_div.appendChild(ac4);

    let input4 = document.createElement('input');
    input4.setAttribute('id', "ac-4");
    input4.setAttribute('name', "accordion");
    input4.setAttribute('type', "radio");

    let label_for4 = document.createElement('label');
    label_for4.setAttribute('for', "ac-4");
    label_for4.innerHTML ="Temple Milestones and History";

    let article4 = document.createElement('div');
    article4.classList="article4";

    ac4.appendChild(input4);
    ac4.appendChild(label_for4);
    ac4.appendChild(article4);

    /*Milestones*/
    let ml1 = document.createElement('p');
    let ml2 = document.createElement('p');
    let ml3 = document.createElement('p');
  

    ml1.innerHTML=temple[i].milestone[0];
    ml2.innerHTML=temple[i].milestone[1];
    ml3.innerHTML=temple[i].milestone[2];

    article4.appendChild(ml1);
    article4.appendChild(ml2);
    article4.appendChild(ml3);

    const weatherlist = ('https://api.openweathermap.org/data/2.5/weather?&id=1701668&units=imperial&APPID=43aef26214d4d9b9e621da13bc15ec15')
    fetch(weatherlist)
        .then((response) => response.json())
        .then((jsObject) => {

        const weatherobj = jsonObject['weatherlist'];
    
           /*final accordion for weather*/
           let ac5 = document.createElement('div');
           ac5.classList="ac5";
           info_div.appendChild(ac5);
       
           let input5 = document.createElement('input');
           input5.setAttribute('id', "ac-5");
           input5.setAttribute('name', "accordion");
           input5.setAttribute('type', "radio");
       
           let label_for5 = document.createElement('label');
           label_for5.setAttribute('for', "ac-5");
           label_for5.innerHTML ="Today's Weather";
       
           let article5 = document.createElement('div');
           article5.classList="article5";
       
           ac5.appendChild(input5);
           ac5.appendChild(label_for5);
           ac5.appendChild(article5);
       
           /*WEATHER CONDITION*/
           let weather =document.createElement('p');
           weather.innerHTML = "Weather:" +  " " + jsObject.weather[0].description;  
           
           /*TEMP*/
           let temperature= document.createElement('p');
           temperature.innerHTML ="Temperature:" +  " " + Math.round(jsObject.main.temp) + "°F";

           /*WIND SPEED*/
           let speed= document.createElement('p');
           speed.innerHTML ="Wind Speed:" +  " " + jsObject.wind.speed + " " + "mph";

           /*WIND CHILL*/
           let chill= document.createElement('p');
           let formula = 35.74 + (0.6215*temperature) - (35.75*(Math.pow(speed,0.16))) + (0.4275*temperature*(Math.pow(speed,0.16)));

           if (temperature <= 50 && speed > 3){
           chill.innerHTML = "Wind Chill" +  " "  + Math.round(formula) + "°F";}
         else{
           chill.innerHTML= "Wind Chill:" +  " " + "N/A";
         }
           article5.appendChild(weather);
           article5.appendChild(temperature);
           article5.appendChild(speed);
           article5.appendChild(chill);
        });       
} 
}});

  
