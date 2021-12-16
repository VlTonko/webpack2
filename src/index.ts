import './style.css';

let descriptionEl = document.getElementById('description') as HTMLFormElement;
descriptionEl.innerHTML = '111';

/*
const key = '58ea1c7c6bf73a7d85d0518902d70864';

async function weatherBallon(cityID:number) {
	const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)  
	const data = resp.json();
	await drawWeather(data);
}

type TMain = {
  feels_like: number,
  temp: number
}

type TWind = {
  feels_like: number,
  speed:number
}

type TWeather = {
  feels_like: string,
  description: string
}

interface Object {
  main: TMain,
  wind:TWind,
  weather:TWeather,
  name:string,
}

//function drawWeather( d: { main:{temp: number;}, weather:{description: string}, name: string} ):void {
function drawWeather( data:Object ):void {
  let celcius = Math.round(parseFloat(String(data.main.temp))-273.15);
  let description = data.weather[0].description; 

  let descriptionEl = document.getElementById ('description') as HTMLFormElement;
	let celciusEl = document.getElementById('temp') as HTMLFormElement;
	let nameEl = document.getElementById('location') as HTMLFormElement;
  let windEl = document.getElementById('wind') as HTMLFormElement;
	
	descriptionEl.innerHTML = description;
	celciusEl.innerHTML = celcius + '&deg;';
	nameEl.innerHTML = data.name;
  windEl.innerHTML = 'Wind speed is' + data.wind.speed + 'm / s';

  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}

window.onload = function():void {
	weatherBallon( 709930)
}
*/
