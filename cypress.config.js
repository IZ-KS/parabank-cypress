const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // This tells Cypress NOT to look for a support file like
    // cypress/support/e2e.js before running your tests.
    supportFile: false, 
    // FIX: Update the specPattern to include the nested 'parabank-cypress' folder
    // This tells Cypress to look for files in 'parabank-cypress/e2e'
    specPattern: 'parabank-cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
