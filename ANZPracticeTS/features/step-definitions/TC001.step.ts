import { Given, When, Then } from "@cucumber/cucumber";
import commonPage from "../pageobjects/common.page";
import LoginPage from "../pageobjects/login.page";
import ProductPage from "../pageobjects/product.page";

Given(/^Application is launched$/, async () => {
    await commonPage.openLoginPage();
    await expect(LoginPage.btnLogin).toBeDisplayed();
});

When(/^logged in with valid user credential$/, async () => {
    await LoginPage.loginApplication("standard_user", "secret_sauce");
});

Then(/^list of products will be displayed$/, async () => {
    await ProductPage.verifyProductDisplayed();
});
