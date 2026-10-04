module.exports = async function (page, scenario) {
  if (scenario.hoverSelector) {
    await page.waitForSelector(scenario.hoverSelector);
    await page.hover(scenario.hoverSelector);
  }
  if (scenario.clickSelector) {
    await page.waitForSelector(scenario.clickSelector);
    await page.click(scenario.clickSelector);
  }
  if (typeof scenario.postInteractionWait === 'number') {
    await new Promise(resolve => setTimeout(resolve, scenario.postInteractionWait));
  } else if (scenario.postInteractionWait) {
    await page.waitForSelector(scenario.postInteractionWait);
  }
};
