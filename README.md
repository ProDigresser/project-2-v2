# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

### General Assembly Software Engineering Immersive

# Project 2 - V 2.0 - Mount A Simple Node/Express Backend -  JustEat App
### By [Laurence 🍕](https://github.com/ProDigresser)

## The Overview 
This is version 2.0 of the JustEat app and a personal project. For a more comprehensive detailing of the front end build, it's challenges and further documentation please find it [HERE](https://github.com/ProDigresser/project-2).

In order to run APIs to our front-end for Project 2, we needed to adhere to HTTP standards of Cross-Origin Resource Sharing (CORS). It is common for an API to be configured in a way to deny direct browser requests (in the from of ‘Access-Control-Allow-Origin: originType’), this is where a backend and middleware become useful.

In order to subvert the CORS protocol our requests were routed though the [CORS-Anywhere Heroku App](https://cors-anywhere.herokuapp.com/). This was satisfactory for development and short-term use, unfortunately this caused other quality of life issues - 30 second load times, another point of failure, exposed API keys, and the potential for total failure if the CORS-Anywhere App changed or became unavailable.

### Implementation

Implementation was relatively simple - installing Express and initializing a back-end. Any requests that where being made on the front-end were routed to the back-end using the "/api" prefix. Simple controllers were set to send and respond for the APIs in use (in this case- [postcodes.io](https://postcodes.io/), [JustEatAPI](https://developers.just-eat.com/) and [StaticGoogleMaps](https://developers.google.com/maps/documentation/maps-static/overview)). Finally the front-end requests were re-configured to expect data in a new way - specifically the postcode API request ran to expect response codes.

Find it Here! --> [Just Eat App V2 🍕](https://prodigresser-project-2-v2.herokuapp.com/)

![just_eat](READMEdocuments/project-2-screenshot.png)
