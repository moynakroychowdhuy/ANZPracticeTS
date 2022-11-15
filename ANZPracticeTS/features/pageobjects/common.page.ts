import browser from "webdriverio/build/commands/browser";

class commonPage{
    async openLoginPage(){
       await browser.url("https://www.saucedemo.com/");
    }
}

export default new commonPage();