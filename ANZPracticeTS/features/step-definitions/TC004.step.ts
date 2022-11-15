import { Given, When, Then } from "@cucumber/cucumber";
import CheckoutPage from "../pageobjects/checkout.page"

Given(/^ the user is on Checkout : Overview Page $/, async ()=> {
  await CheckoutPage.verifyCheckOutOverviewDisplayed();

});

When(/^ Finish button is clicked $/, async ()=> {
    await CheckoutPage.performCheckOutFinish("Sauce Labs Backpack");
});

Then(/^ Thanks message will be Displayed $/, async ()=> {
    await CheckoutPage.verifyCheckOutCompletePageDisplayed();
});

