const puppeteer = require('puppeteer');

(async () => {
    //Open browser by setting its viewport
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport:{width:1200,height:1200,},
    });

    //Opening a page
    const page = await browser.newPage();
    
    //Navigate to the page
    await page.goto('https://google.com');
    
    //Identify the input field
    const elementHandle = await page.$(`[name=q]`);
    
    //Type "puppeteer" into the text box
    await elementHandle.type('puppeteer');

    //Press the "Enter" key
    await elementHandle.press('Enter');
    
    //Take a screenshot and save it in the path with the given filename
    await page.screenshot({path: 'screenshot.png'});
    
    await browser.close(); //Close browser
})();