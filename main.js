import fetch from "node-fetch";
import dotenv from "dotenv";
import promptSync from "prompt-sync";
dotenv.config();
/**
 * Question 1:
 * Print on the console the list of all "Subway" routes including their long names.
 */

const getAllSubwayRoutesPromise = async () => {
  const response = fetch(`https://api-v3.mbta.com/routes?filter[type]=0,1`, {
    "x-api-key": process.env.API_KEY,
  });
  return (await response).json();
};

const printSubwayRoutes = async () => {
  console.log("\n--------- Question One -------------- \n");
  const routes = (await getAllSubwayRoutesPromise()).data;
  routes.forEach((route) => {
    console.log(
      "The long name of " + route.id + " is: " + route.attributes.long_name
    );
  });
  console.log("\n");
};

/**
 * Question 2:
 *  Print on console:
 *    1. the name of the subway route with the most stops as well as a count of its stops.
 *    2. The name of the subway route with the fewest stops as well as a count of its stops.
 *    3. A list of the stops that connect two or more subway routes along with the relevant route names for each of those stops.
 */

const getAllSubwayStopsPromise = async (routeName) => {
  const response = fetch(
    `https://api-v3.mbta.com/stops?filter[route]=${routeName}&include=route`,
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }
  );
  return (await response).json();
};

const printSubwayStops = async () => {
  const routes = (await getAllSubwayRoutesPromise()).data;
  const routesStopsPromises = routes.map((route) => {
    return getAllSubwayStopsPromise(route.id);
  });

  let routesStops = await Promise.all(routesStopsPromises);
  let allStop = routesStops.map((stop) => stop.data);

  let stopCounts = routesStops.map((stop) => stop.data.length);

  let maxCount = Math.max(...stopCounts);
  let maxIndex = stopCounts.indexOf(maxCount);

  let minCount = Math.min(...stopCounts);
  let minIndex = stopCounts.indexOf(minCount);

  const routeIds = routes.map((route) => route.id);

  console.log("--------- Question Two -------------- \n");

  console.log("1.");
  console.log(
    "The route with with the moststop is:",
    routeIds[maxIndex],
    "and the has",
    maxCount,
    "stops\n"
  );
  console.log("2.");
  console.log(
    "The route with with the least stop is:",
    routeIds[minIndex],
    "and the has",
    minCount,
    "stops\n"
  );

  // get stops occuring in multiple routes
  const mapping = {}; // key: stop, value: list of routes

  allStop
    .flatMap((x) => x) // same as using Map and flat after.
    .forEach((stop) => {
      if (Object.keys(mapping).includes(stop.id)) {
        //if we already have the stop-id then we push the route name.
        mapping[stop.id].push(stop.relationships.route.data.id);
      } else {
        //else we create a new object with stop id and route name.
        mapping[stop.id] = [stop.relationships.route.data.id];
      }
    });

  console.log("3.Stops connecting multiple subway routes:");
  Object.keys(mapping).forEach((stopId) => {
    if (mapping[stopId].length >= 2) {
      console.log(`${stopId}: ${mapping[stopId].join(",")}`);
    }
  });
  console.log("\n");

  /**
   * Question 3:
   *  Print on console a list a rail route you could travel to get from one stop to the other.
   */

  console.log("--------- Question Three -------------- \n");

  const prompt = promptSync({ sigint: true });
  const stop1 = prompt("Enter the first stop?");
  const stop2 = prompt("Enter the Second stop?");

  const intersection = [];
  mapping[stop1].forEach((currentRoute) => {
    if (mapping[stop2].includes(currentRoute)) {
      intersection.push(currentRoute);
    } else {
      return intersection;
    }
  });
  console.log("intersection", intersection);
};

printSubwayRoutes();

printSubwayStops();
