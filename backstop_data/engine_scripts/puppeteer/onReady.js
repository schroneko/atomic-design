module.exports = async function (page, scenario) {
  await require('./clickAndHoverHelper')(page, scenario);
};
