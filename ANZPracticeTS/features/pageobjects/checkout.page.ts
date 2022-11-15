class CheckoutPage{
    //Locators
    get eleCheckOutTitle(){
        return $("//span[text()='Checkout: Your Information']");
    }
    get inpFirstName(){
        return $("#first-name");
    }
    get inpLastName(){
        return $("#last-name");
    }
    get inpPostalCode(){
        return $("#postal-code");
    }
    get btnContinue(){
        return $("#continue");
    }
    get btnCancel(){
        return $("#cancel");
    }
    get eleCheckOutOverviewTitle(){
        return $("//span[text()='Checkout: Overview']");
    }
    get btnFinish(){
        return $("#finish");
    }
    get eleProductOverview(){
        return $("//div[@class='inventory_item_name']");
    }
    get eleCheckOutCompleteTitle(){
        return $("//span[text()='Checkout: Complete!']");
    }

    //Methods
    async verifyCheckOutYouInfoDisplayed(){
        await expect(this.eleCheckOutTitle).waitForExist({ timeout: 3000 });
        await expect(this.eleCheckOutTitle).toBeDisplayed();
    }
    
    async performCheckOut(userName, pwd, postalcode){
        await this.inpFirstName.setValue(userName);
        await this.inpLastName.setValue(pwd);
        await this.inpPostalCode.setValue(postalcode);
        await this.btnContinue.click();        
    }

    async verifyCheckOutOverviewDisplayed(){
        await expect(this.eleCheckOutOverviewTitle).toBeDisplayed();
    }
    
    async performCheckOutFinish(productName){
        await expect(this.eleProductOverview).toHaveText(productName);
        await this.btnFinish.click(); 
    }

    async verifyCheckOutCompletePageDisplayed(){
        await expect(this.eleCheckOutCompleteTitle).toBeDisplayed();
    }
}

export default new CheckoutPage();