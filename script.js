const urlBase= `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = 'a18eb930a62f6df13f1baca45ec2e141'
const diffKelvin = 273.15


function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))

}


function showWeatherData(data){
    const divResponseData = document.getElementById('responseData')
    divResponseData.innerHTML = ''

    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.temp
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`
 

    const tempInfo = document.createElement('p')
    tempInfo.texttent = `Temperatura: ${Math.floor(temp - diffKelvin)}°c`
    
    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `Humedad: ${humidity}%`


    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`


    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `Descripcion Meteorologica: ${description}`


    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(descriptionInfo)
    divResponseData.appendChild(iconInfo)

}

document.getElementById('searchButton').addEventListener("click", () => {


    const city = document.getElementById('cityInput').value
    if (city) {
        fetchWeather(city)
    }else {
        alert('No fue posible no encontrar la ciudad')
}

}) 


