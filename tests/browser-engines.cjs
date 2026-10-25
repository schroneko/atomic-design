const puppeteer = require("puppeteer");
const assert = require("node:assert/strict");

async function main() {
  for (const protocol of ["cdp", "webDriverBiDi"]) {
    const browser = await puppeteer.launch({
      headless: true,
      protocol,
      ...(process.env.PUPPETEER_EXECUTABLE_PATH
        ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
        : {}),
    });
    try {
      const page = await browser.newPage();
      await page.setContent(
        '<html><body><button id="test">Offline engine check</button></body></html>'
      );
      assert.equal(
        await page.$eval("#test", element => element.textContent),
        "Offline engine check"
      );
      await page.click("#test");
      const png = await page.screenshot();
      assert(png.length > 100);
      console.log("PASS Puppeteer real browser engine", protocol);
    } finally {
      await browser.close();
    }
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
