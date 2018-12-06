const puppeteer = require('puppeteer');

let url = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=';
let keyword = '아리따움';

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  console.log('Visiting page ...')
  await page.goto(`${url}${keyword}`);
  await page.setViewport({width:1000, height:1000})

  console.log('Capturing image...');
  await page.screenshot({
    path: `${keyword}.jpeg`,
    clip: {
      x: 500,
      y: 201,
      height: 384,
      width: 400,
    }
  });

  // console.log('Making pdf...');
  // await page.pdf({
  //   path: keyword + '.pdf'
  // })

  await browser.close();
})();