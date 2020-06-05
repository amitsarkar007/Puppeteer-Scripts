const puppeteer = require('puppeteer');

(async () => {
    //Launching browser by setting its viewport
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport:{width:1200,height:1200,},
    });
    //Opening a page
    const page = await browser.newPage();
    
    //Navigating to google search page
    await page.goto('https://google.com');
    
    //Identifying the input field
    const elementHandle = await page.$(`[name=q]`);
    
    //Typing puppeteer in the input field
    await elementHandle.type('puppeteer');

    //Pressing Enter key
    await elementHandle.press('Enter');
    
    //Taking screenshot and saving it in the path with the given filename
    await page.screenshot({path: 'screenshot.png'});
    
    //Closing browser
    await browser.close();
})();