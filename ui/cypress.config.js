const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1600,
  viewportHeight: 1200,
  userAgent: "Cypress-E2E",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `http://the-internet.herokuapp.com/`,

  },
});
