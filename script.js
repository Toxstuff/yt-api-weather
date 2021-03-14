//variable to get own city name
var city = "Bischofshofen"

    //get every information from JSON file
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=faceaf9d4b6036348fa5abfb26fb6565&lang=de", function(data)
    {
    //logs information form the JSON(link)
    console.log(data);

    //get icon from the JSON ([] because its stored in a array)
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 

    //get the Temperatur from the JSON (inside data.main.temp), Math.floor = whole numbers
    var temp = Math.floor(data.main.temp);

    //get the Weather(rain, sun, ...) from the JSON again with a array
    var weather = data.weather[0].main;

    //add the Cityname inside the city class from html
    $('.city').append(city);

    //add the icon inside the icon class from html
    $('.icon').attr('src', icon);

   //add the temperatur inside the temp class from html
    $('.temp').append(temp);

    //add the weather conditon to the weather class from the html
    $('.weather').append(weather);
}
);