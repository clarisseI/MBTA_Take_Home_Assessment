# MBTA-TAKE-HOME-ASSESSMENT

In this project, we will be interacting with the Boston transportation system APIs. The goal is to print the following information to the console: 1. Long names for subway routes 2. The subway with the most and fewest stops, as well as the number of stops. 3. A list of the stops that connect two or more subway routes with their route names. 4. List a rail route you could travel to get from one stop to the other

# Dependencies

     - Node-fetch
     - dotenv
     -prompt-sync

# API used

MBTA API

# Tools Required

To run the program , you will only need Node.js and npm or Yarn installed on your environement.

# Running the project

    To run the code:

1. create a file called .env in your main directory
   add this line API_KEY="Enter your MBTA CLIENT KEY" which can be found at https://api-v3.mbta.com/register

2. install node modules
   npm install
3. run the app
   node main.js

### Test Case:

1. place-gover to place-kencl: [Green-B, Green-C and Green-D]
2. place-davis to place-knncl:[ Red route]
3. place-kencl to place-knncl : []

## References

Node-fetch:
https://www.npmjs.com/package/node-fetch

dotenv:
https://www.npmjs.com/package/dotenv

prompt-sync:
https://www.npmjs.com/package/prompt-sync

Fetch:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Async:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

ForEach:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Map:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

Promise all:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

FlatMap:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

Object.key:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

include:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

push:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push


