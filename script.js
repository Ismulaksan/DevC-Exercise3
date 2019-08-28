var requestData = new XMLHttpRequest();
requestData.open('GET', 'https://swapi.co/api/planets');
requestData.onload = function() {
    var dataPlanet = JSON.parse(requestData.responseText);
    console.log(dataPlanet[0]);
};
requestData.send();