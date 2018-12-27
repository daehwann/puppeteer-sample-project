const puppeteer = require('puppeteer');

puppeteer.launch({headless:false}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('http://www.naver.com');
  // await page.waitForNavigation({waitUntil: 'networkidle0'})

  await page.addStyleTag({
    content: '#search {border: 1em solid red;}'
  })
  await page.screenshot({
    fullPage:true,
    path: `page-screen-${new Date().toISOString()}.jpeg`
  })

  // await page.pdf({
  //   path: `page-screen-${new Date().toISOString()}.pdf`
  // })
  
  await browser.close()
}).catch(error => {
  console.log(error)
})