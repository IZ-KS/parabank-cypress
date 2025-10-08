const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // This tells Cypress NOT to look for a support file like
    // cypress/support/e2e.js before running your tests.
    supportFile: false, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
