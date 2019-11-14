const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        
        let h2 = document.createElement('h2');
        
        /*set h2 to prophet's full name using template literals*/
        h2.textContent =  (`${prophets[i].name}  ${prophets[i].lastname}`);
        card.appendChild(h2);

        let birthdate = document.createElement('p');

        /*set p to prophet's prophet's birthdate*/
        birthdate.textContent = (`Date of Birth: ${prophets[i].birthdate}`);
        card.appendChild(birthdate);

        let birthplace = document.createElement('p');

        birthplace.textContent = (`Birthplace: ${prophets[i].birthplace}`);
        card.appendChild(birthplace);

        /*image*/
        let image= document.createElement('img');
        image.setAttribute('src', prophets[i].imageurl);
        card.appendChild(image); 
 
        /*alt*/
        image.setAttribute('alt', `${prophets[i].name}  ${prophets[i].lastname} - ${prophets[i].order}`);

        document.querySelector('div.cards').appendChild(card);
    }
});
 