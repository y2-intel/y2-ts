# Reports

Types:

- <code><a href="./src/resources/reports.ts">AudioMetadata</a></code>
- <code><a href="./src/resources/reports.ts">ReportRetrieveResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportListResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportRetrieveAudioResponse</a></code>

Methods:

- <code title="get /reports/{reportId}">client.reports.<a href="./src/resources/reports.ts">retrieve</a>(reportID, { ...params }) -> ReportRetrieveResponse</code>
- <code title="get /reports">client.reports.<a href="./src/resources/reports.ts">list</a>({ ...params }) -> ReportListResponse</code>
- <code title="get /reports/{reportId}/audio">client.reports.<a href="./src/resources/reports.ts">retrieveAudio</a>(reportID, { ...params }) -> ReportRetrieveAudioResponse</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">ProfileCreateResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileUpdateResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileListResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfilePartialUpdateResponse</a></code>

Methods:

- <code title="post /profiles">client.profiles.<a href="./src/resources/profiles.ts">create</a>({ ...params }) -> ProfileCreateResponse</code>
- <code title="put /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">update</a>(profileID, { ...params }) -> ProfileUpdateResponse</code>
- <code title="get /profiles">client.profiles.<a href="./src/resources/profiles.ts">list</a>() -> ProfileListResponse</code>
- <code title="delete /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">delete</a>(profileID, { ...params }) -> void</code>
- <code title="patch /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">partialUpdate</a>(profileID, { ...params }) -> ProfilePartialUpdateResponse</code>

# News

Types:

- <code><a href="./src/resources/news.ts">TimeframeEnum</a></code>
- <code><a href="./src/resources/news.ts">TopicEnum</a></code>
- <code><a href="./src/resources/news.ts">NewsListResponse</a></code>
- <code><a href="./src/resources/news.ts">NewsGetRecapsResponse</a></code>
- <code><a href="./src/resources/news.ts">NewsListFeedsResponse</a></code>

Methods:

- <code title="get /news">client.news.<a href="./src/resources/news.ts">list</a>({ ...params }) -> NewsListResponse</code>
- <code title="get /news/recaps">client.news.<a href="./src/resources/news.ts">getRecaps</a>({ ...params }) -> NewsGetRecapsResponse</code>
- <code title="get /news/feeds">client.news.<a href="./src/resources/news.ts">listFeeds</a>() -> NewsListFeedsResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookTestResponse</a></code>

Methods:

- <code title="post /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="put /webhooks/{webhookId}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(webhookID, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /webhooks/{webhookId}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(webhookID, { ...params }) -> void</code>
- <code title="post /webhooks/{webhookId}/test">client.webhooks.<a href="./src/resources/webhooks.ts">test</a>(webhookID) -> WebhookTestResponse</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">SubscriptionUpdateDeliveryResponse</a></code>

Methods:

- <code title="patch /subscriptions/{subscriptionId}/delivery">client.subscriptions.<a href="./src/resources/subscriptions.ts">updateDelivery</a>(subscriptionID, { ...params }) -> SubscriptionUpdateDeliveryResponse</code>

# Osint

Types:

- <code><a href="./src/resources/osint/osint.ts">OsintGetConflictIndicatorsResponse</a></code>
- <code><a href="./src/resources/osint/osint.ts">OsintGetGpsJammingZonesResponse</a></code>
- <code><a href="./src/resources/osint/osint.ts">OsintGetMilitaryPostureResponse</a></code>
- <code><a href="./src/resources/osint/osint.ts">OsintListAircraftResponse</a></code>
- <code><a href="./src/resources/osint/osint.ts">OsintListEventsResponse</a></code>
- <code><a href="./src/resources/osint/osint.ts">OsintListVesselsResponse</a></code>
- <code><a href="./src/resources/osint/osint.ts">OsintMapEventsResponse</a></code>

Methods:

- <code title="get /osint/cii">client.osint.<a href="./src/resources/osint/osint.ts">getConflictIndicators</a>({ ...params }) -> OsintGetConflictIndicatorsResponse</code>
- <code title="get /osint/gps-jamming">client.osint.<a href="./src/resources/osint/osint.ts">getGpsJammingZones</a>({ ...params }) -> OsintGetGpsJammingZonesResponse</code>
- <code title="get /osint/military-posture">client.osint.<a href="./src/resources/osint/osint.ts">getMilitaryPosture</a>({ ...params }) -> OsintGetMilitaryPostureResponse</code>
- <code title="get /osint/aircraft">client.osint.<a href="./src/resources/osint/osint.ts">listAircraft</a>({ ...params }) -> OsintListAircraftResponse</code>
- <code title="get /osint/events">client.osint.<a href="./src/resources/osint/osint.ts">listEvents</a>({ ...params }) -> OsintListEventsResponse</code>
- <code title="get /osint/vessels">client.osint.<a href="./src/resources/osint/osint.ts">listVessels</a>({ ...params }) -> OsintListVesselsResponse</code>
- <code title="get /osint/map">client.osint.<a href="./src/resources/osint/osint.ts">mapEvents</a>({ ...params }) -> OsintMapEventsResponse</code>

## Countries

Types:

- <code><a href="./src/resources/osint/countries.ts">CountryGetCountryInstabilityIndexResponse</a></code>
- <code><a href="./src/resources/osint/countries.ts">CountryGetCountryNewsResponse</a></code>
- <code><a href="./src/resources/osint/countries.ts">CountryGetIntelligenceBriefResponse</a></code>
- <code><a href="./src/resources/osint/countries.ts">CountryGetPredictionMarketsResponse</a></code>
- <code><a href="./src/resources/osint/countries.ts">CountryGetStockMarketIndexResponse</a></code>

Methods:

- <code title="get /osint/countries/{countryCode}/cii">client.osint.countries.<a href="./src/resources/osint/countries.ts">getCountryInstabilityIndex</a>(countryCode) -> CountryGetCountryInstabilityIndexResponse</code>
- <code title="get /osint/countries/{countryCode}/news">client.osint.countries.<a href="./src/resources/osint/countries.ts">getCountryNews</a>(countryCode, { ...params }) -> CountryGetCountryNewsResponse</code>
- <code title="get /osint/countries/{countryCode}/brief">client.osint.countries.<a href="./src/resources/osint/countries.ts">getIntelligenceBrief</a>(countryCode) -> CountryGetIntelligenceBriefResponse</code>
- <code title="get /osint/countries/{countryCode}/predictions">client.osint.countries.<a href="./src/resources/osint/countries.ts">getPredictionMarkets</a>(countryCode, { ...params }) -> CountryGetPredictionMarketsResponse</code>
- <code title="get /osint/countries/{countryCode}/markets">client.osint.countries.<a href="./src/resources/osint/countries.ts">getStockMarketIndex</a>(countryCode) -> CountryGetStockMarketIndexResponse</code>

## Sources

Types:

- <code><a href="./src/resources/osint/sources.ts">SourceGetDataSourceHealthResponse</a></code>

Methods:

- <code title="get /osint/sources/status">client.osint.sources.<a href="./src/resources/osint/sources.ts">getDataSourceHealth</a>() -> SourceGetDataSourceHealthResponse</code>
