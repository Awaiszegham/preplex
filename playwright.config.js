// playwright.config.js
module.exports = {
  use: {
    headless: process.env.HEADLESS !== 'false',
    storageState: process.env.STORAGE_FILE || 'state.json',
  },
};