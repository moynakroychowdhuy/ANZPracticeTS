Feature: Purchase Product

Scenario : TC001 - Login to Application
	Given Application is launched
	When logged in with valid user credential
	Then list of products will be displayed

Scenario : TC002 - Adding Product To Cart
	Given the user is on Product Page
	When product is added to Cart
	Then same product will be added to Shopping Cart Page

Scenario : TC003 - Checking Out the added Products
	Given user is on Shopping Cart Page
	When CheckOut Button is clicked And CheckOut: Your Information Page has been entered And Continue
	Then Checkout:Overview page will be displayed

Scenario : TC004 - Checkout Completion
	Given the user is on Checkout : Overview Page
	When Finish button is clicked
	Then Thanks message will be Displayed

Scenario : TC005 - LogOut from Application
	Given the user is on Checkout Complete Page
	When Back Home button is clicked And LogOut Button is clicked from Menu
	Then user will be logged out from the Application