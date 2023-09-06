// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "HornyWorkshop.Server",
      // URL to the GraphQL API
      url: "http://localhost/graphql",
    },
    // Files processed by the extension
    includes: ["graphql/**/*.graphql"],
  },
};
