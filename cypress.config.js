const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.greggs.com",
    env: {
      menuUrl: "/menu",
      supportFile: false,
    },
  },
  defaultCommandTimeout: 3000,
});
