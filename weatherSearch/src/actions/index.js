import axios from 'axios';

const APR_KEY = "095282ec5247e3a752f73880674e9484";
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${APR_KEY}`;
//action allways, allways return a type


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROUTE_URL}&q=${city},us`;
  const request = axios.get(url); //ajax request, return promise

  console.log("Request: " : request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
