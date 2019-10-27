let tempF=parseFloat(document.getElementById('temp').innerHTML);
let speed=parseFloat(document.getElementById('wind-speed').innerHTML);
let formula= 35.74 + (0.6215*tempF) - (35.75*(Math.pow(speed,0.16))) + (0.4275*tempF*(Math.pow(speed,0.16)));
let windchill=document.getElementById('wind-chill');


if (tempF <= 50 && speed > 3){
    windchill.innerHTML=Math.round(formula); }
else{
    windchill.innerHTML="N/A";
} 

