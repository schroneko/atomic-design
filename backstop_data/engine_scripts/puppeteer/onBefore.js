module.exports = async function (page, scenario) {
  await require('./loadCookies')(page, scenario);
};
