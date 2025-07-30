/* eslint-disable prefer-template */
import safeJsonParse from '../util/safeJsonParser';
import { BIKEAVL_WITHMAX } from '../util/vehicleRentalUtils';
import realtime from './realtimeUtils';

const KIJS_KEY = process.env.KIJS_KEY || '';
const CONFIG = process.env.CONFIG || 'default';
const APP_PATH = process.env.APP_CONTEXT || '';

const minLat = 55.665193;
const maxLat = 58.188080;
const minLon = 20.665283;
const maxLon = 28.432617;

const {
  // AXE,
  NODE_ENV,
  RUN_ENV,
} = process.env;

const PORT = process.env.PORT || 8080;
const APP_DESCRIPTION = 'Pieturas';
const OTP_TIMEOUT = process.env.OTP_TIMEOUT || 12000;
const YEAR = 1900 + new Date().getYear();

const REALTIME_PATCH = safeJsonParse(process.env.REALTIME_PATCH) || {};

export default {
  PORT,
  // AXE,
  CONFIG,
  NODE_ENV,
  OTPTimeout: OTP_TIMEOUT,
  URL: {
    ASSET_URL: process.env.ASSET_URL,
    OTP: `https://gsvalbe.id.lv/pieturas/otp/`,
    MAP: {
      default: `https://wms.kartes.lv/${KIJS_KEY}/wgs/15bw/`,
    },
    REALTIME_STOP_MAP: {
      default: `https://gsvalbe.id.lv/pieturas/otp/routers/default/vectorTiles/stops/`,
    },
    STOP_MAP: {
      default: `https://gsvalbe.id.lv/pieturas/otp/routers/default/vectorTiles/stops/`,
    },

    FONT: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700',
    PELIAS: 'https://gsvalbe.id.lv/pieturas/config/digitransit/geocoder.php',
    PELIAS_PLACE: 'https://gsvalbe.id.lv/pieturas/config/digitransit/geocoder.php',
    PELIAS_REVERSE_GEOCODER: 'https://gsvalbe.id.lv/pieturas/config/digitransit/rev_geocoder.php',
  },

  RUN_ENV,

  searchSources: ['default'],

  vehicleRental: {
    // Config for map features. NOTE: availability for routing is controlled by
    // transportModes.citybike.availableForSelection
    showFullInfo: false,
    cityBikeMinZoom: 14,
    cityBikeSmallIconZoom: 14,
    // When should bikeshare availability be rendered in orange rather than green
    fewAvailableCount: 3,
    networks: {},
    capacity: BIKEAVL_WITHMAX,
    buyInstructions: {},
    maxNearbyRentalVehicleAmount: 5,
    maxDistanceToRentalVehiclesInMeters: 100,
    maxMinutesToRentalJourneyStart: 60,
    maxMinutesToRentalJourneyEnd: 720,
    allowDirectScooterJourneys: false,
  },

  hasAPISubscriptionQueryParameter: false,

  hasAPISubscriptionHeader: false,

  APP_PATH: `${APP_PATH}`,
  indexPath: '',
  title: 'Pieturas',

  textLogo: false,
  // Navbar logo
  logo: 'pieturas/pieturas-logo.png',

  searchParams: {},
  feedIds: ['1'],

  realTime: realtime,
  realTimePatch: REALTIME_PATCH,

  search: {
    suggestions: {
      useTransportIcons: false,
    },
    usePeliasStops: false,
    mapPeliasModality: false,
    peliasMapping: {},
    peliasLayer: null,
    peliasLocalization: null,
    minimalRegexp: /.{2,}/,
  },

  nearbyRoutes: {
    radius: 10000,
    bucketSize: 1000,
  },

  omitNonPickups: true,
  maxNearbyStopAmount: 5,
  maxNearbyStopRefetches: 5,
  maxNearbyStopDistance: {
    favorite: 20000,
    bus: 50000,
    trolleybus: 50000,
    tram: 20000,
    subway: 20000,
    rail: 50000,
    ferry: 50000,
    citybike: 20000,
    airplane: 100000,
  },

  defaultSettings: {
    accessibilityOption: false,
    optimize: 'GREENWAYS',
    bikeSpeed: 5.55,
    ticketTypes: 'none',
    walkBoardCost: 120,
    walkReluctance: 1.8,
    walkSpeed: 1.2,
    transferPenalty: 0,
    minTransferTime: 90,
    includeBikeSuggestions: true,
    includeParkAndRideSuggestions: false,
    includeCarSuggestions: false,
    showBikeAndParkItineraries: false,
    includeTaxiSuggestions: false,
  },

  /**
   * These are used for dropdown selection of values to override the default
   * settings. This means that values ought to be relative to the current default.
   * If not, the selection may not make any sense.
   */
  defaultOptions: {
    walkReluctance: {
      least: 5,
      less: 3,
      more: 1,
      most: 0.2,
    },
    walkSpeed: [0.69, 0.97, 1.2, 1.67, 2.22],
    bikeSpeed: [2.77, 4.15, 5.55, 6.94, 8.33],
  },

  transferPenaltyHigh: 1600,

  suggestWalkMaxDistance: 10000,
  suggestBikeMaxDistance: 30000,
  // if you enable car suggestions but the linear distance between all points is less than this, then a car route will
  // not be computed
  suggestCarMinDistance: 2000,
  availableLanguages: [
    'lv', 'en', // TODO: fix selector
  ],
  defaultLanguage: 'lv',
  timeZone: 'Europe/Riga',
  allowLogin: false,
  allowFavouritesFromLocalstorage: true,
  useExtendedRouteTypes: false,
  mainMenu: {
    // Whether to show the left menu toggle button at all
    show: true,
    showDisruptions: true,
    showLoginCreateAccount: false,
    showOffCanvasList: true,
    showFrontPageLink: true,
    stopMonitor: {
      show: false,
    },
    showEmbeddedSearch: false,
  },

  itinerary: {
    // Wait time to show "wait leg"? e.g. 180 means over 3 minutes are shown as wait time.
    // Measured in seconds.
    waitThreshold: 180,
    // Number of days to include to the service time range from the future
    serviceTimeRange: 60,
  },

  map: {
    useRetinaTiles: true,
    tileSize: 256,
    zoomOffset: 0,
    minZoom: 9,
    maxZoom: 18,
    controls: {
      zoom: {
        // available controls positions: 'topleft', 'topright', 'bottomleft, 'bottomright'
        position: 'bottomright',
      },
      scale: {
        position: 'bottomright',
      },
    },
    genericMarker: {
      // Do not render name markers at zoom levels below this value
      nameMarkerMinZoom: 18,

      popup: {
        offset: [106, 16],
        maxWidth: 250,
        minWidth: 250,
      },
    },

    line: {
      halo: {
        weight: 7,
        thinWeight: 2,
      },

      leg: {
        weight: 6,
        thinWeight: 2,
      },

      passiveColor: '#758993',
    },

    showZoomControl: true,
    showLayerSelector: true,
    showStopMarkerPopupOnMobile: true,
    showScaleBar: true,
    attribution:
      '<a tabIndex="-1" href="https://balticmaps.eu" target="_blank">© Jāņa sēta</a>',

    useModeIconsInNonTileLayer: false,
    // areBounds is for keeping map and user inside given area
    // Finland + Stockholm
    areaBounds: {
      corner1: [minLat, minLon],
      corner2: [maxLat, maxLon],
    },
  },

  stopCard: {
    header: {
      showDescription: true,
      showStopCode: true,
      showDistance: true,
    },
  },

  autoSuggest: {
    // Let Pelias suggest based on current user location
    locationAware: true,
  },

  // Lowest level for stops and terminals are rendered
  stopsMinZoom: 13,
  // Highest level when stops and terminals are still rendered as small markers
  stopsSmallMaxZoom: 14,
  // Highest level when terminals are still rendered instead of individual stops
  terminalStopsMaxZoom: 18,
  terminalStopsMinZoom: 12,
  // lowest zoom level when to draw rail platforms
  railPlatformsMinZoom: 15,
  terminalNamesZoom: 16,
  stopsIconSize: {
    small: 8,
    selected: 28,
    default: 18,
  },

  appBarStyle: 'default',

  appBarLink: {},

  colors: {
    topBarColor: '#001f5f',
    primary: '#001f5f',
    backgroundInfo: '#ebf6fd',
    accessiblePrimary: '#0074be',
    hover: '#0062a1',
    iconColors: {
      'mode-airplane': '#0046ad',
      'mode-bus': '#0088ce',
      'mode-trolleybus': '#c04000',
      'mode-tram': '#6a8925',
      'mode-metro': '#ed8c00',
      'mode-rail': '#af8dbc',
      'mode-ferry': '#247C7B',
      'mode-citybike': '#f2b62d',
      'mode-scooter': '#C5CAD2',
      'mode-taxi': '#647693',
      'mode-replacement-bus': '#DC0451',
    },
  },
  iconModeSet: 'default',
  fontWeights: {
    medium: 700,
  },

  sprites: 'assets/svg-sprite.default.svg',

  disruption: {
    showInfoButton: true,
  },

  agency: {
    show: true,
  },

  meta: {
    description: APP_DESCRIPTION,
    keywords: 'digitransit',
  },

  hideExternalOperator: () => false,
  useTicketIcons: false,

  // Control what transport modes that should be possible to select in the UI
  // and whether the transport mode is used in trip planning by default.
  transportModes: {
    bus: {
      availableForSelection: true,
      defaultValue: true,
    },

    trolleybus: {
      availableForSelection: true,
      defaultValue: true,
    },

    tram: {
      availableForSelection: true,
      defaultValue: true,
    },

    rail: {
      availableForSelection: true,
      defaultValue: true,
    },

    subway: {
      availableForSelection: false,
      defaultValue: false,
    },

    airplane: {
      availableForSelection: false,
      defaultValue: false,
    },

    ferry: {
      availableForSelection: false,
      defaultValue: false,
    },

    funicular: {
      availableForSelection: false,
      defaultValue: false,
    },

    citybike: {
      availableForSelection: false,
      defaultValue: false, // always false
    },

    scooter: {
      availableForSelection: false,
      defaultValue: false, // always false
    },

    taxi: {
      availableForSelection: false,
      defaultValue: false, // always false
    },
  },

  areaPolygon: [
    [minLon, minLat],
    [minLon, maxLat],
    [maxLon, maxLat],
    [maxLon, minLat],
  ],

  // Minimun distance between from and to locations in meters. User is noticed
  // if distance is less than this.
  minDistanceBetweenFromAndTo: 20,

  // If certain mode(s) only exist in limited number of areas, listing the areas as a list of polygons for
  // selected mode key will remove the mode(s) from queries if no coordinates in the query are within the polygon(s).
  // This reduces complexity in finding routes for the query.
  modePolygons: {},

  menu: {
    copyright: { label: `© Gustavs Švalbe ${YEAR}` },
    content: [
      {
        name: 'digitransit-platform',
        href: 'https://digitransit.fi/en/',
      },
      {
        name: 'datasources',
        href: 'https://gsvalbe.id.lv/pieturas/avoti.html',
      },
      {
        name: 'menu-old-map',
        href: 'https://gsvalbe.id.lv/pieturas/karte.html',
      },
      {
        name: 'app',
        href: 'https://play.google.com/store/apps/details?id=lv.swallowdev.pieturas',
      },
    ],
  },

  // Default origin endpoint to use when user is outside of area
  defaultEndpoint: {
    address: 'Rīgas centrālā stacija',
    lat: 56.947116,
    lon: 24.120473,
  },

  socialMedia: {
    title: 'Pieturas',
    description: APP_DESCRIPTION,
    locale: 'en_US',

    image: {
      url: '/img/default-social-share.png',
      width: 2400,
      height: 1260,
    },

    twitter: {
      card: 'summary_large_image',
      site: '@SchwalbeGustavs',
    },
  },

  defaultMapZoom: 12,

  showTenWeeksOnRouteSchedule: true,

  useRealtimeTravellerCapacities: false,

  aboutThisService: {},

  staticMessages: [],

  staticIEMessage: [
    {
      id: '3',
      priority: -1,
      content: {
        en: [
          {
            type: 'text',
            content:
              'The service does not support the browser you are using. Update your browser or download a new browser using the links below.\n',
          },
          {
            type: 'a',
            content: 'Google Chrome',
            href: 'https://www.google.com/chrome/',
          },
          {
            type: 'a',
            content: 'Firefox',
            href: 'https://www.mozilla.org/fi/firefox/new/',
          },
          {
            type: 'a',
            content: 'Microsoft Edge',
            href: 'https://www.microsoft.com/en-us/windows/microsoft-edge',
          },
        ],
      },
    },
  ],

  /* Do not change order of theme map lines */
  /* key: name of theme, value: regex matching part of host name */
  themeMap: {
    hsl: '(reittiopas|next-dev.digitransit)',
    turku: '(turku|foli)',
    lappeenranta: 'lappeenranta',
    joensuu: 'joensuu',
    oulu: '(oulu|osl)',
    hameenlinna: 'hameenlinna',
    matka: '(matka|^dev.digitransit)',
    vaasa: 'vaasa',
    walttiOpas: 'waltti',
    rovaniemi: 'rovaniemi',
    kouvola: 'kouvola',
    tampere: 'tampere',
    mikkeli: 'mikkeli',
    kotka: 'kotka',
    jyvaskyla: 'jyvaskyla',
    lahti: 'lahti',
    kuopio: 'kuopio',
    varely: '(seutuplus|varely)',
    kela: 'kelareitit',
    pori: 'pori',
    raasepori: '(raasepori|bosse)',
  },

  minutesToDepartureLimit: 9,

  routeCancelationAlertValidity: {
    before: 3600, // 1 hour
    after: 900, // 15 minutes
  },

  imperialEnabled: false,
  // this flag when true enables imperial measurements  'feet/miles system'

  vehicles: true, // TODO
  showVehiclesOnStopPage: true,
  showVehiclesOnItineraryPage: true,
  trafficNowLink: '',

  stopsIconSize: {
    small: 8,
    selected: 28,
    default: 18,
  },

  timetables: {},

  showWeatherInformation: false,
  showBikeAndParkItineraries: true,

  includeBikeSuggestions: true,
  includeCarSuggestions: false,
  includeParkAndRideSuggestions: false,
  // Park and ride and car suggestions separated
  separatedParkAndRideSwitch: false,

  showNearYouButtons: true,
  nearYouModes: [
    'favorite',
    'bus',
    'trolleybus',
    'tram',
    'rail',
  ],
  narrowNearYouButtons: true,

  /* Option to disable the "next" column of the Route panel as it can be confusing sometimes: https://github.com/mfdz/digitransit-ui/issues/167 */
  displayNextDeparture: true,

  messageBarAlerts: false,

  availableTickets: {},
  zones: {
    stops: false,
    itinerary: false,
  },

  viaPointsEnabled: true,

  // Toggling this off shows the alert bodytext instead of the header
  showAlertHeader: true,

  showSimilarRoutesOnRouteDropDown: false,

  prioritizedStopsNearYou: {},

  constantOperationStops: {},
  constantOperationRoutes: {},

  embeddedSearch: {
    title: {
      en: 'Route search element',
    },
    infoText: {
      en: 'Create a route search element and add it to your own service. The Find route button in the search component will transfer you to the journey planner.',
    },
  },

  showAlternativeLegs: true,
  // Notice! Turning on this setting forces the search for car routes (for the CO2 comparison only).
  showCO2InItinerarySummary: false,
  geoJsonSvgSize: 20,
  routeNotifications: [
    {
      showForBikeWithPublic: true,

      id: 'externalCostWithBike',

      content: {
        en: [
          'There is a possibility to transport a bicycle in the vehicle. ',
          'Check the possible cost of transporting a bicycle from the operator.',
        ],
      },
    },
    {
      showForCarWithPublic: true,

      id: 'externalCostWithCar',

      content: {
        en: [
          'You can take your car on board. ',
          'Check with the transport operator if an additional fee will be charged for the transportation of cars.',
        ],
      },
    },
  ],
  navigation: false,
  sendAnalyticsCustomEventGoals: false,
  shortenLongTextThreshold: 10, // for route number in itinerary summary
  allowFlexJourneys: false,
  allowDirectFlexJourneys: false,
  allowedFlexRouteTypes: [1501],
  showRouteDescNotification: false,
};
