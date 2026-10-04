const fs = require('fs');
module.exports = async function (page, scenario) {
  if (!scenario.cookiePath || !fs.existsSync(scenario.cookiePath)) return;
  const cookies = JSON.parse(fs.readFileSync(scenario.cookiePath, 'utf8'));
  if (cookies.length) await page.browserContext().setCookie(...cookies);
};
