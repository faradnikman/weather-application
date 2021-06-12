# Weather Application 🌤

A weather forecast project for vuejs and nuxtjs showcase 

## Table Of Content 
  - [Project Setup](#project-setup)
    - [Initial step](#initial-step)
    - [Setting up dev environment](#setting-up-dev-environment)
    - [Deployment](#deployment)
  - [Openweathermap API](#openweathermap-api)
    - [current weather data](#current-weather-data)
    - [5 days forecast](#5-days-forecast)
  - [Libraries](#libraries)
  - [Credits](#credits)
    - [photo courtesy](#photo-courtesy)


## Project Setup

### Initial step
1. before running this project, make sure you have openweathermap api [key](https://home.openweathermap.org/api_keys).
2. include the generated key in `.env` file located in your **Root folder**

example in your `.env` file
```dotenv
OPEN_WEATHER_MAP_API_KEY="your_api_key_goes_here"
```

### Setting up dev environment
```shell
npm run dev
```

### Deployment
> ensure that you include `OPEN_WEATHER_MAP_API_KEY` as part of your deployment `env`

This app  deployed using [vercel](https://vercel.com/), I find that by registering using github account yields a smooth deployment experience. 
To deploy in staging environment, create a PR to the `main` branch, _vercel.bot_ trigger a _preview_ build, 
in order to make it to _production_, you can either **promote** the _preview_ build to _production_ or **merge** PR into _main_ branch.


## Openweathermap API

> this project implement server-middleware, this approach is to protect `appid` which is passed in the query in order to  use the API provided by _openweathermap.org_, sequence diagram to the rescue!
 
[![](https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5jbGllbnQtPj5zZXJ2ZXItbWlkZGxld2FyZTogcmVxdWVzdCB3ZWF0aGVyIGRhdGFcbnNlcnZlci1taWRkbGV3YXJlLT4-b3BlbndlYXRoZXJtYXAgQVBJOiByZXF1ZXN0XG5vcGVud2VhdGhlcm1hcCBBUEktLT4-c2VydmVyLW1pZGRsZXdhcmU6cmVzcG9uc2VcbnNlcnZlci1taWRkbGV3YXJlLS0-PmNsaWVudDpyZXNwb25zZSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit##eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5jbGllbnQtPj5zZXJ2ZXItbWlkZGxld2FyZTogcmVxdWVzdCB3ZWF0aGVyIGRhdGFcbnNlcnZlci1taWRkbGV3YXJlLT4-b3BlbndlYXRoZXJtYXAgQVBJOiByZXF1ZXNcbm9wZW53ZWF0aGVybWFwIEFQSS0tPj5zZXJ2ZXItbWlkZGxld2FyZTpyZXNwb25zZVxuc2VydmVyLW1pZGRsZXdhcmUtLT4-Y2xpZW50OnJlc3BvbnNlIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

### Current Weather Data
[🔗 link](https://openweathermap.org/current)

this API returns current weather data based on
- city
- longitude and latitude

server-middleware route, `/api/weather` 
  
### 5 Days Forecast
[🔗 link](https://openweathermap.org/forecast5)

this API returns 5 days weather forecast data based on
- city

server-middleware route, `/api/forecast` 

## Libraries
- [vue](https://github.com/vuejs/vue)
- [nuxtjs](https://github.com/nuxt/nuxt.js)
- [vue-wait](https://github.com/f/vue-wait)
- [vuex-persist](https://github.com/championswimmer/vuex-persist)
- [vue-browser-geolocation](https://github.com/scaccogatto/vue-geolocation)
- [axios](https://github.com/axios/axios)
- [dayjs](https://github.com/iamkun/dayjs/)
- [ openweathermap API ](https://openweathermap.org/api)

## Credits
### photo courtesy
- ian dooley [@sadswim - unsplash.com](https://unsplash.com/@sadswim)




