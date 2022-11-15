class CartPage{
    //Locators
    get eleYourCartTitle(){
        return $("//span[text()='Your Cart']");
    }
    get eleProductName(){
        return $("//div[@class='inventory_item_name']");
    }
    get btnRemove(){
        return $("//div[@class='inventory_item_name']");
    }
    get btnCheckOut(){
        return $("#checkout");
    }
    get btnContShopping(){
        return $("#continue-shopping");
    }

    //Methods
    async verifyPageDisplayed(){
        await expect(this.eleYourCartTitle).waitForExist({ timeout: 3000 });
        await expect(this.eleYourCartTitle).toBeDisplayed();
    }

    async verifyCartProduct(productName){
        await expect(this.eleProductName).toHaveText(productName);
    }
    async clickCheckOut(){
        await this.btnCheckOut.click();        
    }
}

export default new CartPage();