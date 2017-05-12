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
    $.getJSON(urlf, function(jd) { 
        $('#result').html(jd); 
        resultForecast = jd;
        alert("test");
    //alert("result" + resultForecast.forecast.txt_forecast.date);
    });
    
    var urlc = "http://api.wunderground.com/api/fd1358c429691325/conditions/q/" + getZip + ".json";
    var resultConditions;
    $.getJSON(urlc, function(jd) { 
        $('#result').html(jd); 
        resultConditions = jd;
    alert(resultConditions.forecast.txt_forecast.date);
    });
    
    updateText(resultConditions);
}

//function updateText(resultConditions){
//    city = resultConditions.display_location.city;
//    alert(city);
//}