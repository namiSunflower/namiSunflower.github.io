function calendar(){
    var now= new Date();
    var dayOfWeek = now.getDay();
    
    //sunday-monday
    if (dayOfWeek == 0 || dayOfWeek == 1) {
    output="Currently: Sunny <br> High: 76℉ <br> Precipitation: 4% <br> Humidity: 69% <br> Wind Speed: 10 mph <br> "}
    //tuesday
    else if (dayOfWeek == 2) {
    output="Currently: Rainy <br> High: 71℉ <br>Precipitation: 4% <br> Humidity: 59% <br> Wind Speed: 9 mph"}
    //wednesday
    else if (dayOfWeek == 3) {
    output="Currently: Windy <br> High: 70℉ <br> Precipitation: 8% <br> Humidity: 60% <br> Wind Speed: 15 mph"}
    //thursday
    else if (dayOfWeek == 4) {
    output="Currently: Stormy <br> High: 68℉ <br> Precipitation: 6%<br> Humidity: 51% <br> Wind Speed: 13 mph"}
    //friday-sat
    else{output="Currently: Sunny <br> High: 71℉ <br> Precipitation: 5% <br> Humidity: 55% <br> Wind Speed: 10 mph"};
    
    //Output
    document.getElementById('dynamic-weather').innerHTML=output;
}
