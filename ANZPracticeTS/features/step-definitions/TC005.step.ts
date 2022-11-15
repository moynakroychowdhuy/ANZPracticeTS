import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pageobjects/login.page";

Given(/^ Given the user is on Checkout Complete Page $/, async ()=> {
  
});

When(/^ When Menu button is clicked And LogOut Button is clicked from Menu $/, async ()=> {
    await LoginPage.logoutApplication();
});

Then(/^ user will be logged out from the Application $/, async ()=> {
    await LoginPage.verifyLoginPage();
});

