const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone X'];
const qs = require('querystring')

let url = 'https://www.aritaum.com';

(async () => {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();

  await page.emulate(iPhone);
  await page.setRequestInterception(true)
  page.on('request', interceptedRequest => {
    if (/www.google-analytics.com\/collect/.test(interceptedRequest.url())) {
      let ga_variables = qs.parse(interceptedRequest.url());
      console.log(ga_variables.t, ga_variables.cid, ' sent');
    }
    interceptedRequest.continue();
  })

  console.log('Visiting page ...');
  await page.goto(url);
  await page.waitForNavigation();
  await browser.close();
})();