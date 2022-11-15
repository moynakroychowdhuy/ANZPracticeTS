//import browser from "webdriverio/build/commands/browser";

class LoginPage{
    
    // Locators
    get inpUserName(){
        return $("#user-name");
    }
    get inpPwd(){
        return $("#password");
    }
    get btnLogin(){
        return $("#login-button");
    }
    get btnMenu(){
        return $("#react-burger-menu-btn");
    }
    get btnLogOut(){
        return $("#logout_sidebar_link");
    }

    //Methods
    async verifyLoginPage(){
        await expect(this.btnLogin).toBeDisplayed();
    }

    async loginApplication(userName, pwd) {
        await this.inpUserName.setValue(userName);
        await this.inpPwd.setValue(pwd);
        await this.btnLogin.click();
    }
    
    async logoutApplication() {
        if(this.btnMenu.isClickable()){
            await this.btnMenu.click();
            await this.btnLogOut.waitForClickable({ timeout: 3000 });
            await this.btnLogOut.click();
        }        
    }

}

export default new LoginPage();