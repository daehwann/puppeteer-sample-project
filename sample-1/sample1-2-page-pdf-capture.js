const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://launch.gitbook.io/docs/');
  await page.pdf({
    path: `page-pdf-${new Date().toISOString()}.pdf`
  })
  
  await browser.close()
})