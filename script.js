$("#submit").click(function(e) {
    var zip = $("#zip-code").val();
    if (zip.length != 5 || isNaN(zip)){
        alert("You didn't enter a valid zip code.");
    }
    
    getWeather(zip);
    e.preventDefault();
});

function getWeather(getZip) {
    var urlf = "http://api.wunderground.com/api/fd1358c429691325/forecast/q/" + getZip + ".json";
    var resultForecast;

    //Put tasks to be done using the received weather data within these functions.
    $.getJSON(urlf, function(jd) { 
        $('#result').html(jd); 
        resultForecast = jd;

        updateTextFore(resultForecast);
    });

    var urlc = "http://api.wunderground.com/api/fd1358c429691325/conditions/q/" + getZip + ".json";
    var resultConditions;

    //Put tasks to be done using the received weather data within these functions.
    $.getJSON(urlc, function(jd) { 
        $('#result').html(jd); 
        resultConditions = jd;

        //For some reason, the variables assigned within this function are not defined outside of it
        updateTextCond(resultConditions)
    });
}


function updateTextFore(resultForecast){
    var shortFore = resultForecast.forecast.simpleforecast

    //Date
    $("#Day1").text(shortFore.forecastday[0].date.weekday + " - " + shortFore.forecastday[0].date.month + "/" + shortFore.forecastday[0].date.day + "/" + shortFore.forecastday[0].date.year);
    $("#Day2").text(shortFore.forecastday[1].date.weekday + " - " + shortFore.forecastday[1].date.month + "/" + shortFore.forecastday[1].date.day + "/" + shortFore.forecastday[1].date.year);
    $("#Day3").text(shortFore.forecastday[2].date.weekday + " - " + shortFore.forecastday[2].date.month + "/" + shortFore.forecastday[2].date.day + "/" + shortFore.forecastday[2].date.year);
    $("#Day4").text(shortFore.forecastday[3].date.weekday + " - " + shortFore.forecastday[3].date.month + "/" + shortFore.forecastday[3].date.day + "/" + shortFore.forecastday[3].date.year);

    //Conditions
    $("#Day1Cond").text(shortFore.forecastday[0].conditions);
    $("#Day2Cond").text(shortFore.forecastday[1].conditions);
    $("#Day3Cond").text(shortFore.forecastday[2].conditions);
    $("#Day4Cond").text(shortFore.forecastday[3].conditions);

    //Icon
    $("#Day1Icon").attr('src', shortFore.forecastday[0].icon_url);
    $("#Day2Icon").attr('src', shortFore.forecastday[1].icon_url);
    $("#Day3Icon").attr('src', shortFore.forecastday[2].icon_url);
    $("#Day4Icon").attr('src', shortFore.forecastday[3].icon_url);


    //High-Low
    $("#Day1HighLow").text("High: " + shortFore.forecastday[0].high.fahrenheit + "°F Low: " + shortFore.forecastday[0].low.fahrenheit + "°F");
    $("#Day2HighLow").text("High: " + shortFore.forecastday[1].high.fahrenheit + "°F Low: " + shortFore.forecastday[1].low.fahrenheit + "°F");
    $("#Day3HighLow").text("High: " + shortFore.forecastday[2].high.fahrenheit + "°F Low: " + shortFore.forecastday[2].low.fahrenheit + "°F");
    $("#Day4HighLow").text("High: " + shortFore.forecastday[3].high.fahrenheit + "°F Low: " + shortFore.forecastday[3].low.fahrenheit + "°F");

    //Estimated Precipitation
    $("#EstPrecip1").text("Estimated Precipitation: " + shortFore.forecastday[0].qpf_allday.in + '"');
    $("#EstPrecip2").text("Estimated Precipitation: " + shortFore.forecastday[1].qpf_allday.in + '"');
    $("#EstPrecip3").text("Estimated Precipitation: " + shortFore.forecastday[2].qpf_allday.in + '"');
    $("#EstPrecip4").text("Estimated Precipitation: " + shortFore.forecastday[3].qpf_allday.in + '"');

}
function updateTextCond(resultConditions){
    $("#title").text("Weather for " + resultConditions.current_observation.display_location.full);
}
