<p align="center">
  <h1>TourMate-bp</h1>
  <a href="https://github.com/zoomi-raja/tour-booking-bp">
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg" alt="contributions" />
  </a>
</p>

## Introduction
A javascript based project. was thinking of what to do in pendemic lockdown. recetly like on start of 2020 i gave interview to a Austria base company tourradar so this project is base of following online resources
- [TourRadar](https://www.tourradar.com/)
- [Natours](https://www.natours.dev/)

so this project is basicly a pointer to js related tips which is can be easily skipped as time passes. Any Noob Developer who wanted to explore world of JS and how things can be done in JS way can go through the project and get the insights. I never worked opensource before in my life. and that could be because of self-conscious about sharing my code it has to start some day. so putting its as my 2020 reveleation since feburary 2020 and this one is first repo. Have to start from somewhere....!

**project URL**
https://travelmate.herokuapp.com/

**postman setting to save auto token**
```
pm.environment.set("JWT", pm.response.json().token);

```
## Technologies (Fancy Names)
- **Node (Express)**
- **React**
- **Redux**
- **sass**
- **Mongo**
- **Docker**

## travelMate Functionality
As of now very limited data is present in the app. all locations belongs to UAE so if user is in dubai then it will show accurated location around user otherwise i populated it with dummy data
<img src="https://github.com/zoomi-raja/tour-booking-bp/blob/master/travelmatescreenshot.png" alt="travelMate" />

## technical Aspects
marking importent aspects for new developers to understand the basics how things can be done.
**Frontend**
1. [Carousel](https://github.com/zoomi-raja/tour-booking-bp/tree/master/frontend/src/containers/CarouselContainer) as vanilla js scrollLeft by default dont have smoth scroll its just jumps
2. [Redux Config](https://github.com/zoomi-raja/tour-booking-bp/blob/master/frontend/src/App.jsx#L14) its important to note that if __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ is not agvailable on env app will not work so during dev if you want to check on phone it wont work and through error
3. [Lazy Loaded Map](https://github.com/zoomi-raja/tour-booking-bp/tree/master/frontend/src/components/Map) The whole component it self is lazy loaded on detail of tour is clicked + until session is not returned from api Stripe payment gateway is not loaded so that is lazy loaded too
4. [If image Not available](https://github.com/zoomi-raja/tour-booking-bp/blob/master/frontend/src/components/Tour/Tour.jsx#L27) small trick which works like a charm actually i was very happy first time when i came to know about this.
5. [Auth Header](https://github.com/zoomi-raja/tour-booking-bp/blob/master/frontend/src/utils/Axios.js) nothing just if else if user is logged in attach header to request interceptor and on response interceptor if token is not valid anymore just remove localstorage so one place to handle all the fuss.
6. [Mixins](https://github.com/zoomi-raja/tour-booking-bp/blob/master/frontend/src/utility.scss) its very handy if ones want to write media quries i guess its best place to use. here is the [usage](https://github.com/zoomi-raja/tour-booking-bp/blob/master/frontend/src/components/Header/Showcase/Showcase.module.scss)
7. [close element when clicking outside component](https://github.com/zoomi-raja/tour-booking-bp/blob/master/frontend/src/containers/Search/Search.js#L64) belive me there is way of refrence but you can use reference somewhere else but this is not a place to use its better to make one [backdrop](https://github.com/zoomi-raja/tour-booking-bp/blob/master/frontend/src/containers/Navbar/Navbar.js#L24) and listen when clicked on it and close or clear whatever you want.

**backend**
1. [CatchAsync](https://github.com/zoomi-raja/tour-booking-bp/blob/master/utils/catchAsync.js) a decent way to handle error resolved by promise
2. [Mongo GeoJson](https://github.com/zoomi-raja/tour-booking-bp/blob/master/models/tourModel.js#L113) field should be marked as **2dsphere** [coordinates](https://github.com/zoomi-raja/tour-booking-bp/blob/master/models/tourModel.js#L82) are in lnglat sequence to get [$geoWithin](https://github.com/zoomi-raja/tour-booking-bp/blob/master/controllers/tourController.js#L219)
