let city = 'Guiyang, Guizhou, China.'

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=ba6669b2e9860c78f6ea23deb0365565", function(data){
 console.log(data);
 let temp = Math.round(data.main.temp);
 let weather = data.weather[0].main;

 let icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

$('.icon').attr('src', icon);
$('.temp').append(temp);
$('.weather').append(weather);
})

//If you want to change degrees from Celsius to Fahrenheit you should write: 
//&units=imperial ---instead of--- &units=metric 
//Check out the documentation for better understanding: 

//https://openweathermap.force.com/s/article/switching-between-temperature-units-2019-10-24-21-47-24