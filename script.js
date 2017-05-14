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
    });

    var urlc = "http://api.wunderground.com/api/fd1358c429691325/conditions/q/" + getZip + ".json";
    var resultConditions;

    //Put tasks to be done using the received weather data within these functions.
    $.getJSON(urlc, function(jd) { 
        $('#result').html(jd); 
        resultConditions = jd;

        //For some reason, the variables assigned within this function are not defined outside of it
        updateText(resultConditions)
    });
}

function updateText(resultConditions){
    var city = resultConditions.current_observation.display_location.city;
    $("#title").text("Weather for " + city);
}
