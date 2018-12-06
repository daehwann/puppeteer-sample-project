const puppeteer = require('puppeteer');

let domain = 'www.aritaum.com';

(async () => {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();

  console.log('Visiting page ...')
  await page.goto(`http://${domain}`, {
    waitUntil: "networkidle2"
  });
  await page.setViewport({width:1920, height:1080})

  console.log('Waiting Main Visual Slide...')
  await page.waitForSelector('.swiper-slide')

  console.log('Capturing image...');
  await page.screenshot({
    path: `${domain}.jpeg`,
    quality: 50,
    fullPage: true,
  });

  console.log('Making pdf...');
  await page.pdf({
    path: domain + '.pdf',
    printBackground: true,
    headerTemplate: `
      <p><small class="date"></small><small class="title"></small></p>
    `
  })

  await browser.close();
})();