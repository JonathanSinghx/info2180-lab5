"use strict"
document.addEventListener("DOMContentLoaded", function(){
    const countryLbutton = document.getElementById("countrylook");
    const cityLbutton = document.getElementById("citylook");
    const httpRequest = new XMLHttpRequest();

    countryLbutton.addEventListener("click", function(e){
        e.preventDefault;
        const searchRequest = document.getElementById("country").value;

        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState == 4 && httpRequest.status == 200){
             document.getElementById('result').innerHTML = httpRequest.responseText;
            }
        }

        httpRequest.open('get',"http://localhost/info2180-lab5/world.php?country="+searchRequest, true);
        httpRequest.send();
    });

    cityLbutton.addEventListener("click", function(e){
        e.preventDefault;
        const searchRequest = document.getElementById("country").value;
        var url = "http://localhost/info2180-lab5/world.php?country="+searchRequest+"&context=cities";
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState == 4 && httpRequest.status == 200){
                document.getElementById('result').innerHTML = httpRequest.responseText;
            }
        }

        httpRequest.open('get',url , true);
        httpRequest.send();
    });

});