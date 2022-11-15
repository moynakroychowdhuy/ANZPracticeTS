import { Given, When, Then } from "@cucumber/cucumber";
import ProductPage from "../pageobjects/product.page";
import CartPage from "../pageobjects/cart.page"
import CheckoutPage from "../pageobjects/checkout.page";

Given(/^ user is on Shopping Cart Page $/, async ()=> {
    await ProductPage.navigateShoppingCartIcon();
    await CartPage.verifyPageDisplayed();
    await CartPage.verifyCartProduct("Sauce Labs Backpack");
});

When(/^ CheckOut Button is clicked And CheckOut: Your Information Page has been entered And Continue $/, async ()=> {
    await CartPage.clickCheckOut();
    await CheckoutPage.verifyCheckOutYouInfoDisplayed();
    await CheckoutPage.performCheckOut("standard_user", "secret_sauce","700028");
    await CheckoutPage.performCheckOutFinish("Sauce Labs Backpack");
});

Then(/^ Checkout:Overview page will be displayed $/, async ()=> {
    await CheckoutPage.verifyCheckOutOverviewDisplayed();
});

