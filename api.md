# Reports

Types:

- <code><a href="./src/resources/reports.ts">AudioMetadata</a></code>
- <code><a href="./src/resources/reports.ts">ReportRetrieveResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportListResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportRetrieveAudioResponse</a></code>

Methods:

- <code title="get /reports/{reportId}">client.reports.<a href="./src/resources/reports.ts">retrieve</a>(reportID) -> ReportRetrieveResponse</code>
- <code title="get /reports">client.reports.<a href="./src/resources/reports.ts">list</a>({ ...params }) -> ReportListResponse</code>
- <code title="get /reports/{reportId}/audio">client.reports.<a href="./src/resources/reports.ts">retrieveAudio</a>(reportID, { ...params }) -> ReportRetrieveAudioResponse</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">ProfileListResponse</a></code>

Methods:

- <code title="get /profiles">client.profiles.<a href="./src/resources/profiles.ts">list</a>() -> ProfileListResponse</code>

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
