/** Variable names
 * response: a return promise of fetch url
 * routes: data for each subway routes
 * routesStopsPromises :  an array of promises for all subway routes' stops  fetched by function getAllSubwayStopsPromise
 * RouteName: route id  for subway routes
 * routesStops: a single array of all subway route stops  promise from routesStopsPromises
 * allStop: array of each subway route stops data.
 * stopCounts : an array of each subway route stops data length which is the count of stops for each subway route
 * maxCount : highest number in stopcount array.
 * maxIndex: index of maxCount in Stopcounts
 * minCount : lowest number in stopcount array.
 * minIndex: index of minCount in Stopcounts
 * routeIds: an array of subway routes Id's
 * mapping:an object whose  key is the stop id and the value is a  list of routes
 * stop1: name of the first stop entered by user
 * stop 2: name of the second stop entered by use
 *intersection: an array that stores intersection routes between two stops entered by user
 *
 */

/**  Functions
 * getAllSubwayRoutesPromise : Fetch the  subway routes data from the routes API
 * printSubwayRoutes: return to console the long name of all subway routes
 * getAllSubwayStopsPromise: Fetch the subway stops data from the stops API
 * PrintSubwaystops: return to console the  subway route with most stops,least stops, stops that connect more than one  subway routes, and the routes that a use can take having two spots.
 *
 *
 */
