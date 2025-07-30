/* eslint-disable prefer-template */
function defaultRouteSelector(routePageProps) {
  const route = routePageProps.route.gtfsId.split(':');
  return route[1];
}

function defaulVehicleNumberParser(vehicleNumber) {
  return vehicleNumber;
}

function pieturasVehicleNumberParser(vehicleNumber) {
  return vehicleNumber.split('_')[1];
}

function vehicleNumberPartParser(vehicleNumber) {
  return vehicleNumber.indexOf(' ') !== -1
    ? vehicleNumber.split(' ')[1]
    : vehicleNumber;
}

function walttiTopicResolver(
  route,
  direction,
  tripStartTime,
  headsign,
  feedId,
  tripId,
  geoHash,
) {
  return (
    '/gtfsrt/vp/' +
    feedId +
    '/+/+/+/' +
    route +
    '/' +
    '+' + // direction
    '/' +
    headsign +
    '/' +
    tripId +
    '/+/' +
    tripStartTime +
    '/+/' +
    geoHash[0] +
    '/' +
    geoHash[1] +
    '/' +
    geoHash[2] +
    '/' +
    geoHash[3] +
    '/#'
  );
}

function elyTopicResolver(
  route,
  direction,
  tripStartTime,
  headsign,
  feedId,
  tripId,
  geoHash,
) {
  return (
    '/gtfsrt/vp/' +
    feedId +
    '/+/+/+/' +
    route +
    '/+/+/' +
    tripId +
    '/+/' +
    tripStartTime +
    '/+/' +
    geoHash[0] +
    '/' +
    geoHash[1] +
    '/' +
    geoHash[2] +
    '/' +
    geoHash[3] +
    '/#'
  );
}

function noHeadsignTopicResolver(
  route,
  direction,
  tripStartTime,
  headsign,
  feedId,
  tripId,
  geoHash,
) {
  return (
    '/gtfsrt/vp/' +
    feedId +
    '/+/+/+/' +
    route +
    '/' +
    direction +
    '/+/' +
    tripId +
    '/+/' +
    tripStartTime +
    '/+/' +
    geoHash[0] +
    '/' +
    geoHash[1] +
    '/' +
    geoHash[2] +
    '/' +
    geoHash[3] +
    '/#'
  );
}

function tripRouteTopicResolver(
  route,
  direction,
  tripStartTime,
  headsign,
  feedId,
  tripId,
  geoHash,
) {
  return (
    '/gtfsrt/vp/' +
    feedId +
    '/+/+/+/' +
    route +
    '/+/+/' +
    tripId +
    '/+/+/+/' +
    geoHash[0] +
    '/' +
    geoHash[1] +
    '/' +
    geoHash[2] +
    '/' +
    geoHash[3] +
    '/#'
  );
}

function routeTopicResolver(
  route,
  direction,
  tripStartTime,
  headsign,
  feedId,
  tripId,
  geoHash,
) {
  return (
    '/gtfsrt/vp/' +
    feedId +
    '/+/+/+/' +
    route +
    '/+/+/+/+/+/+/+/' +
    geoHash[0] +
    '/' +
    geoHash[1] +
    '/' +
    geoHash[2] +
    '/' +
    geoHash[3] +
    '/#'
  );
}

function hslTopicResolver(
  route,
  hslDirection,
  tripStartTime,
  headsign, // eslint-disable-line no-unused-vars
  feedId, // eslint-disable-line no-unused-vars
  tripId, // eslint-disable-line no-unused-vars
  geoHash, // eslint-disable-line no-unused-vars
) {
  let direction = hslDirection;
  if (Number.isInteger(direction)) {
    direction += 1;
  }
  return (
    '/hfp/v2/journey/ongoing/+/+/+/+/' +
    route +
    '/' +
    direction +
    '/+/' +
    tripStartTime +
    '/#'
  );
}

const mqttAddress = 'mqtt://gsvalbe.id.lv';

const baseMqtt = {
  mqtt: mqttAddress,
  routeSelector: defaultRouteSelector,
  active: true,
  vehicleNumberParser: defaulVehicleNumberParser,
};

const walttiMqtt = {
  ...baseMqtt,
  gtfsrt: true,
  mqttTopicResolver: walttiTopicResolver
};

const pieturasMqtt = {
  mqtt: mqttAddress,
  routeSelector: defaultRouteSelector,
  active: true,
  gtfsrt: true,
  mqttTopicResolver: walttiTopicResolver
}

function elyMqtt(ignoreHeadsign) {
  return {
    ...walttiMqtt,
    mqttTopicResolver: elyTopicResolver,
    ignoreHeadsign,
  };
}

export default {
  1: pieturasMqtt,
};
