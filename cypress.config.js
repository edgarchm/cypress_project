const { defineConfig } = require("cypress");
const { createCustomer } = require("./cypress/datasetup/account_tasks");
const fs = require('fs-extra');
const path = require('path');
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify.js");
const merge = require('deepmerge')

async function setupNodeEvents(on, config) {

  const file = config.env.configFile || "";
  const pathToConfigFile = path.resolve("cypress/config", `${file}.json`);

  console.log(file);
  console.log(pathToConfigFile)
  let dynamicConfig = {};
    if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found");
  } else {
    dynamicConfig = await (fs.readJson(pathToConfigFile));
    config = merge(config, dynamicConfig)
  }

  on("task", {
    createCustomer,
  });

  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  allureWriter(on, config);
 
  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false, // needed to access cross-origin iframe for checkout
  defaultCommandTimeout: 30000,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "./cqa",
    overwrite: false,
    html: false,
    json: true,
  },

  screenshotOnRunFailure: true,
  screenshotsFolder: "./cypress/downloads/screenshots",

  video: true,
  videosFolder: "./cypress/downloads/video",

  trashAssetsBeforeRuns: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  e2e: {
    setupNodeEvents,
    specPattern: ["**/*.feature"],
    experimentalStudio: true,
    baseUrl: "https://test.com",
    env: {
          sally_home:"https://test.com/s/SA/",
      allure: true,
      allureReuseAfterSpec: true,
      //  siteID:"SC",
       siteID:"SA"
    },
    hideXHRInCommandLog: true,
  },

  blockHosts: ["api.breinify.com", "onetrust.com", "cdn.cookielaw.org"],
});
