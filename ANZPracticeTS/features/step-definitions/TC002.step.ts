import { Given, When, Then } from "@cucumber/cucumber";
import ProductPage from "../pageobjects/product.page";

Given(/^ the user is on Product Page $/, async ()=> {
  await ProductPage.verifyProductDisplayed();
});

When(/^ product is added to Cart $/, async ()=> {
    await ProductPage.addToCart("Sauce Labs Backpack");
});

Then(/^ same product will be added to Shopping Cart Page $/, async ()=> {
    await ProductPage.verifyRemove("Sauce Labs Backpack");
});

