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
//sticky navbar

var stickyEl = document.querySelector('.sticky')
var stickyPosition = stickyEl.getBoundingClientRect().top;
var offset = -20
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= stickyPosition + offset) {
        stickyEl.style.position = 'fixed';
        stickyEl.style.top = '0px';
        stickyEl.style.width = '100%';
    } else {
        stickyEl.style.position = 'static';
        stickyEl.style.top = '';
    }
});
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

    /*first accordion for contact details*/
    let ac1 = document.createElement('div');
    ac1.classList="ac1";
    info_div.appendChild(ac1);

    let input = document.createElement('input');
    input.setAttribute('id', "ac-1");
    input.setAttribute('name', "accordion");
    input.setAttribute('type', "radio");
    /*here*/input.checked="true";

    let label_for = document.createElement('label');
    label_for.setAttribute('for', "ac-1");
    label_for.innerHTML ='Contact Details';

    let article = document.createElement('div');
    article.classList="article";

    ac1.appendChild(input);
    ac1.appendChild(label_for);
    ac1.appendChild(article);

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
    schedule.innerHTML= "Schedule:" + temple[i].schedule;
    
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

    ac3.appendChild(input2);
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
    let cl9 = document.createElement('p');

    cl1.innerHTML=temple[i].closure[0];
    cl2.innerHTML=temple[i].closure[1];
    cl3.innerHTML=temple[i].closure[2];
    cl4.innerHTML=temple[i].closure[3];
    cl5.innerHTML=temple[i].closure[4];
    cl6.innerHTML=temple[i].closure[5];
    cl7.innerHTML=temple[i].closure[6];
    cl8.innerHTML=temple[i].closure[7];
    cl9.innerHTML=temple[i].closure[8];

    article3.appendChild(cl1);
    article3.appendChild(cl2);
    article3.appendChild(cl3);
    article3.appendChild(cl4);
    article3.appendChild(cl5);
    article3.appendChild(cl6);
    article3.appendChild(cl7);
    article3.appendChild(cl8);
    article3.appendChild(cl9);

    /*fourth and final accordion for milestones
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

    /*Milestones
    let milestone= document.createElement('p');
    milestone.innerHTML= ":";
    let ul2 = document.createElement('ul2');
    let cl1 = document.createElement('li');
    let cl2 = document.createElement('li');
    let cl3 = document.createElement('li');
    let cl4 = document.createElement('li');
    let cl5 = document.createElement('li');
    let cl6 = document.createElement('li');
    let cl7 = document.createElement('li');
    let cl8 = document.createElement('li');
    let cl9 = document.createElement('li');

    cl1.innerHTML=temple[i].closure[0];
    cl2.innerHTML=temple[i].closure[1];
    cl3.innerHTML=temple[i].closure[2];
    cl4.innerHTML=temple[i].closure[3];
    cl5.innerHTML=temple[i].closure[4];
    cl6.innerHTML=temple[i].closure[5];
    cl7.innerHTML=temple[i].closure[6];
    cl8.innerHTML=temple[i].closure[7];
    cl9.innerHTML=temple[i].closure[8];

    ul2.appendChild(cl1);
    ul2.appendChild(cl2);
    ul2.appendChild(cl3);
    ul2.appendChild(cl4);
    ul2.appendChild(cl5);
    ul2.appendChild(cl6);
    ul2.appendChild(cl7);
    ul2.appendChild(cl8);
    ul2.appendChild(cl9);


    article3.appendChild(closure);
    article3.appendChild(ul2);
    */

    } 
}});



/* 
<section class="ac-container">
  <div>
    <input id="ac-1" name="accordion-1" type="radio" checked>
    <label for="ac-1">About us</label>
    <article>
      <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.</p>
    </article>
  </div>
  <div>
    <input id="ac-2" name="accordion-1" type="radio">
    <label for="ac-2">How we work</label>
    <article>
      <p>Like you, I used to think the world was this great place where everybody lived by the same standards I did, then some kid with a nail showed me I was living in his world, a world where chaos rules not order, a world where righteousness is not rewarded. That's Cesar's world, and if you're not willing to play by his rules, then you're gonna have to pay the price. </p>
    </article>
  </div>
  <div>
    <input id="ac-3" name="accordion-1" type="radio">
    <label for="ac-3">References</label>
    <article>
      <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now.</p>
    </article>
  </div>
  <div>
    <input id="ac-4" name="accordion-1" type="radio">
    <label for="ac-4">Contact us</label>
    <article>
      <p>You see? It's curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means we never told anyone.</p>
    </article>
  </div>
            </section>
        */




