const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  env: { 
    ...process.env,
  NODE_ENV : 'a' },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  pageLoadTimeout: 120000 // Increase the timeout value
})