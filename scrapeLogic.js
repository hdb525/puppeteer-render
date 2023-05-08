const puppeteer = require("puppeteer")
require("dotenv").config();

const scrapeLogic = async (res) => {
    const browser = await puppeteer.launch({
        args: [
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--single-process",
          "--no-zygote",
        ],
        executablePath:
          process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),
      });
  try{
    const { Cluster } = require('puppeteer-cluster');
    const fs = require('fs').promises;
    //infinite-money-glitch1
    
    
    (async () => {
      const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_CONTEXT,
        maxConcurrency: 1,
        puppeteerOptions: {
          headless: false,
          defaultViewport: false,
          userDataDir: "./tmp"
      }
      });
      
     
      let falseArray = []
      for(i=0; i<=10000; i++) {
        falseArray.push("roll")
      }
    
      /*let random = 0
        for(i=0; i<=10000; i++) {
        random = Math.floor(Math.random()*2)
        if(lose>=15){
          res.send("przegrana ezzz")
          lose = 0
        } else {
        
        if(random==0){
          //res.send("lose")
          lose=lose +1
        } else {
          //res.send("won")
          lose = 0
        }}
      } 
      
     let orginMoney=350
      let money = 350
      let bet = 0
      for(i=0; i<=103680; i++) {
        random = Math.floor(Math.random()*2)
        if(money<bet) {
          res.send("its over")
          res.send(`${bet}bet`)
          break
        }else {
        if(lose>=13){
          res.send("przegrana fest")
          lose = 0
        } else {
        
        if(random==0){
          res.send("00000000000000000000000000000000000000000000000000000000000000000000000000000000000")
          lose=lose +1
          money = money - bet
          res.send(`${bet}bet`)
          bet = 0.01 * Math.pow(2, lose)
          res.send(`${money.toFixed(2)} money`)
        } else {
          res.send("1111111111111111111111111111111111111111111111111111111111111111111111111111111111")
          lose = 0
          money = money + bet
          res.send(`${bet}bet`)
          res.send(`${money.toFixed(2)} money`)
          bet = 0.01
    
        }}}
      } 
      res.send("the enddddddddddddddddddddddddddddddddddddddddddddd")
      res.send(money-orginMoney)
      */
      
      let money = 20.40
      let originalMoney = 20.40
      let bet = 0.01
      let lose = 0
    
    
    
      await cluster.task(async ({ page, data: url }) => {
    
        
    
        await page.goto(url);
    
        
    res.send()
        const selector2 = 'body > cw-root > mat-sidenav-container > mat-sidenav-content > div > cw-roulette > div > div.controls > div.roulette-options-container > cw-next-roll > div ';
        const elementHandle2 = await page.$(selector2);
        const elementClass2 = await page.evaluate(element => element.innerHTML, elementHandle2);
        const startIndex = 158;
        const endIndex = 162;
        const substring = elementClass2.substring(startIndex, endIndex); // Extract the substring
        const number = Number(substring); // Convert the substring to a number
    
        const selector = 'body > cw-root > mat-sidenav-container > mat-sidenav-content > div > cw-roulette > div > header > cw-roulette-game-rolls > section > div > a:nth-child(1)';
        const elementHandle = await page.$(selector);
        const elementClass = await page.evaluate(element => element.className, elementHandle);
        res.send(elementClass);
    
        /*if(elementClass=="ng-tns-c563-8 roll rounded-circle ng-trigger ng-trigger-appear bg-red ng-star-inserted" || elementClass=="ng-tns-c563-10 roll rounded-circle ng-trigger ng-trigger-appear bg-red ng-star-inserted" || elementClass=="ng-tns-c476-8 roll rounded-circle ng-trigger ng-trigger-appear bg-red ng-star-inserted"){
          res.send("siadlo")
      } else {
         res.send( "nie siadloxD")
      }*/
    
    
      res.send(number); 
    
        if (number > 7.5 && number < 15) {
    
          
          if(money>25) {
            
            res.send("its money time")
            const cockiesStrin = await fs.readFile("./cookies.json")
            const coockies = JSON.parse(cockiesStrin)
            await page.setCookie(...coockies)
            await new Promise(resolve => {money = originalMoney; resolve();});
            
           
    
            await page.goto("https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fmessages%2Ft%2F100024965232020%2F");
            await new Promise(resolve => setTimeout(resolve, 3000));
    
            const textareaSelector = '.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw.x1iyjqo2.x1gh3ibb.xisnujt.xeuugli.x1odjw0f.notranslate';
            const textToType = `MORZESZ ODEBRAC HAJS ${money}`
    
            const textareaElement = await page.$(textareaSelector);
            await textareaElement.type(textToType);
            await page.keyboard.press('Enter');
           
    
            
            
           
    
          }else{
    
            if(money<bet) {
              res.send("its over")
            const cockiesStrin = await fs.readFile("./cookies.json")
            const coockies = JSON.parse(cockiesStrin)
            await page.setCookie(...coockies)
            await new Promise(resolve => {money = originalMoney; resolve();});
            
           
    
            await page.goto("https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fmessages%2Ft%2F100024965232020%2F");
            await new Promise(resolve => setTimeout(resolve, 3000));
    
            const textareaSelector = '.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw.x1iyjqo2.x1gh3ibb.xisnujt.xeuugli.x1odjw0f.notranslate';
            const textToType = `Przejebales HAJS ${money}`
    
            const textareaElement = await page.$(textareaSelector);
            await textareaElement.type(textToType);
            await page.keyboard.press('Enter');
           
              
            }else {
            if(lose>=10){
              res.send("przegrana fest")
              lose = 0
            } else {
            
            if(elementClass=="ng-tns-c563-8 roll rounded-circle ng-trigger ng-trigger-appear bg-red ng-star-inserted" || elementClass=="ng-tns-c563-10 roll rounded-circle ng-trigger ng-trigger-appear bg-red ng-star-inserted" || elementClass=="ng-tns-c476-8 roll rounded-circle ng-trigger ng-trigger-appear bg-red ng-star-inserted" || elementClass=="ng-tns-c532-8 roll rounded-circle ng-trigger ng-trigger-appear bg-red ng-star-inserted"){
              res.send("Wygrana")
              lose = 0
              money = money + bet
              res.send(`${bet}bet`)
              res.send(`${money.toFixed(2)} money`)
              bet = 0.01
            } else {
              res.send("Przegrana")
              lose=lose +1
              money = money - bet
              res.send(`${bet}bet`)
              bet = 0.01 * Math.pow(2, lose+2)
              res.send(`${money.toFixed(2)} money`)
        
            }}}
          
         
    
          const betClearButton = await page.$('button[data-test="clear"]');
          if (betClearButton) {
            await betClearButton.click();
            const betInput = await page.$('input[matinput][type="number"][id="mat-input-0"]');
            if (betInput) {
              //the line below is not executing
              await betInput.type(bet.toString());
              await new Promise(resolve => setTimeout(resolve, 16500));
    
            } else {
              res.send('Could not find bet input element');
            }
          } else {
            res.send('Could not find bet clear button');
          }
        }} else {
          res.send("not ready")
          await new Promise(resolve => setTimeout(resolve, 1000));
    
        }
        
    
        
        
        
        //await new Promise(resolve => setTimeout(resolve, 10000));
    
        
      });
    
      const urls = falseArray.map(Element => `https://www.csgoroll.com/en/${Element}`)
    
     for (const url of urls){ 
       await cluster.queue(url);
     }
     
      // many more pages
    
      await cluster.idle();
      await cluster.close();
    })();
    /*
  const page = await browser.newPage();
  await page.goto('https://developer.chrome.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector.evaluate(el => el.textContent);

  // Print the full title
  const logStatement = `The title of this blog post is ${fullTitle}`
  res.send(logStatement);
  res.send(logStatement)*/
  } catch(e) {
    console.log(e)
    res.send(`Something went wrong; the ${e}`)
  } finally{
    await browser.close();

  }
}

module.exports= {scrapeLogic}