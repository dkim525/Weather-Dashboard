window.addEventListener("load", function(){ 

    var cityHistory;
    // conditional statement for city hsitory on the left side
    // if nothing searched, return empty array, else return the items searched
    if(!JSON.parse(localStorage.getItem('history'))) {
        cityHistory = [];
    } else {
        cityHistory = JSON.parse(localStorage.getItem('history'))
    }

    var cityItems = []

    function getGeneralAPI(valueSearched) {
        var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${valueSearched}&appid=93f514e8f983b4bf076fc4dbe07f7793&units=imperial';
        fetch(requestUrl)
        .then(function(response){
            return response.json()
        }) 
        .then(function(data)) {
            // make sure we start hsitory method
            if (!cityHistory.includes(valueSearched)) {
                cityItems(valueSearched)
            }
            // clear old content somehow (perhaps preventdefault or we can set textContetnt to an empyt string)
        preventdefault()
// Create some dyanmic html and format in the JSON that's specific to our API

var titleEl = document.createElement('h3')
titleEl.classList.add('card-title');
titleEl.textContent = `${data.name}`

var tempEl = document.createElement('p');
tempEl.classList.add('temp');
tempEl.textContent = `${data.temp}`

var humidityEl = document.createElement('p');
humidityEl.classList.add('humidity');
humidityEl.textContent = `${data.humidity}`

var windEl = document.createElement('p');
windEl.classList.add('wind');
windEl.textContent = `${data.wind.speed}`


var cardEl =document.createElement('div')

// then we use appendChild TO RELATEa the elements that we have dynamically created
titleEl.appendChild(titleEl);
tempEl.appendChild(tempEl);
humidityEl.appendChild(humidityEL);
windEl.appendChild(windEl);




        }
    }
    
    
    function getFiveDayApi(valueSearched) {
        var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${valueSearched}&appid=93f514e8f983b4bf076fc4dbe07f7793&units=imperial';
        fetch(requestUrl)
    
        var humid = 'Humidity: + ${data.main.humidity} %';
    }
    
    
    
    
    function getUvIndex() {
    
    }
     




} )
 