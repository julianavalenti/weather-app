let weatherData, userInput;

const $weatherFor = $('#town');
const $temperature = $('#temperature');
const $fellsLike = $('#fellsLike');
const $weather = $('#weather')
const $input = $('input[type="text"]')


$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
$.ajax({ 
    url:'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=6dbedcc4b363914772a6727e910eff53'
}).then(
  (data) => {
   weatherData = data;
   render();
  },
  (error) => {
   console.log('bad request: ', error);
  }
);
}

function render() {
    $weatherFor.text(weatherData.name);
    $temperature.text(weatherData.main.temp)
    $fellsLike.text(weatherData.main.feels_like)
    $weather.text(weatherData.weather[0].main)
  }


