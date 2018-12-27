const puppeteer = require('puppeteer');

const ua_IOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.setUserAgent(ua_IOS)
  await page.goto('http://www.naver.com');
  // await page.waitForNavigation({waitUntil: 'networkidle0'})
  await page.screenshot({
    path: `mobile-page-screen-${new Date().toISOString().substr(0,10)}.jpeg`
  })

  // await page.pdf({
  //   path: `page-screen-${new Date().toISOString()}.pdf`
  // })
  
  await browser.close()
}).catch(error => {
  console.log(error)
})