const config = {
  apiKey: process.env.API_KEY,
  mode: process.env.NODE_ENV,
  versionRoute: process.env.VERSION_ROUTE,
  port: process.env.PORT,
};

module.exports = config;
