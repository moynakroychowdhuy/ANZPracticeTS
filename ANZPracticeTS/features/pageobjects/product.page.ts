class ProductPage{
    
    // Locators
    get eleProductsTitle(){
        return $("//span[text()='Products']");
    }
    get lnkShoppingCartIcon(){
        return $("#shopping_cart_container");
    }
    get btnAddToCart(){
        return $$("//button[@class='btn btn_primary btn_small btn_inventory']");
    }
    get eleProductName(){
        return $$("//div[@class='inventory_item_name']");
    }

    //Methods
    async verifyProductDisplayed(){
        await expect(this.eleProductsTitle).waitForExist({ timeout: 3000 });
        await expect(this.eleProductsTitle).toBeDisplayed();
    }

    async addToCart(prodName) {
        for(let i=0; i<this.eleProductName.length(); i++){
            if(this.eleProductName[i].getText().isequal(prodName)){
                await this.btnAddToCart[i].click();
                break;
            }
        }
    }

    async verifyRemove(prodName){
        for(let i=0; i<this.eleProductName.length(); i++){
            if(this.eleProductName[i].getText().isequal(prodName)){                
                await expect(this.btnAddToCart[i]).toHaveText("Remove");
                break;
            }
        }
    }

    async navigateShoppingCartIcon(){
        await this.lnkShoppingCartIcon.click();
    }
}

export default new ProductPage();