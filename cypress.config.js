const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter', //For HTML Reports

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //Automatically Capture Screenshot on Failure on execution execution using CLI
      screenshotOnRunFailure=true;
      
      //Automatically Video on Failure on execution execution using CLI
      video=true;
      this.videoCompression=true;



      require('cypress-mochawesome-reporter/plugin')(on); //For HTML Reports
    },
  },
});
