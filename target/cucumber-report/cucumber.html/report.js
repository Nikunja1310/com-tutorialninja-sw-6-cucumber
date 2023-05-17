$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Desktop.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop test",
  "description": "As a User I want ro test Desktop Page",
  "id": "desktop-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5540415000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to sort product in Alphabetical order",
  "description": "",
  "id": "desktop-test;user-should-be-able-to-sort-product-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Desktop",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Show AllDesktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I change currency to \"£Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sort by option \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that products arranged in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 50741900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverOnDesktop()"
});
formatter.result({
  "duration": 194757100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 12
    }
  ],
  "location": "TopMenuSteps.iClickOn(String)"
});
formatter.result({
  "duration": 902026400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 22
    }
  ],
  "location": "DesktopSteps.iChangeCurrencyTo(String)"
});
formatter.result({
  "duration": 1197987700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 25
    }
  ],
  "location": "DesktopSteps.iSelectSortByOption(String)"
});
formatter.result({
  "duration": 1513333500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.verifyThatProductsArrangedInDescendingOrder()"
});
formatter.result({
  "duration": 185537400,
  "status": "passed"
});
formatter.after({
  "duration": 580206100,
  "status": "passed"
});
formatter.uri("LaptopAndNotebook.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop and Notebook test",
  "description": "As a user I want to test Laptop and Notebook Test",
  "id": "laptop-and-notebook-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3510448100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to sort product price in High to Low",
  "description": "",
  "id": "laptop-and-notebook-test;user-should-be-able-to-sort-product-price-in-high-to-low",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Laptop and Notebook",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I change currency to \"£Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sort by option \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that products sorted in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 15900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverOnLaptopAndNotebook()"
});
formatter.result({
  "duration": 188365600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 12
    }
  ],
  "location": "TopMenuSteps.iClickOn(String)"
});
formatter.result({
  "duration": 634451900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 22
    }
  ],
  "location": "DesktopSteps.iChangeCurrencyTo(String)"
});
formatter.result({
  "duration": 1168212500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 25
    }
  ],
  "location": "DesktopSteps.iSelectSortByOption(String)"
});
formatter.result({
  "duration": 1447882600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookSteps.verifyThatProductsSortedInDescendingOrder()"
});
formatter.result({
  "duration": 159530200,
  "status": "passed"
});
formatter.after({
  "duration": 595827000,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a User I want to login and logout successfully",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3520186800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be navigated to login page successfully",
  "description": "",
  "id": "login-test;user-should-be-navigated-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on myAccountTab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify User is navigated to login page using \"Returning Customer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 13200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 77775300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "RegistrationSteps.iSelect(String)"
});
formatter.result({
  "duration": 389635300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 46
    }
  ],
  "location": "LoginSteps.verifyUserIsNavigatedToLoginPageUsing(String)"
});
formatter.result({
  "duration": 34930700,
  "status": "passed"
});
formatter.after({
  "duration": 620011300,
  "status": "passed"
});
formatter.uri("Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "As a User I want to register on website",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3468762400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigated on registration page successfully",
  "description": "",
  "id": "registration-test;user-should-navigated-on-registration-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on myAccountTab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify User is navigated to register page using \"Register Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 72184200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "RegistrationSteps.iSelect(String)"
});
formatter.result({
  "duration": 626412000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 49
    }
  ],
  "location": "RegistrationSteps.verifyUserIsNavigatedToRegisterPageUsing(String)"
});
formatter.result({
  "duration": 30513300,
  "status": "passed"
});
formatter.after({
  "duration": 593845400,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "TopMenu Test",
  "description": "As a user I want to test my top menu",
  "id": "topmenu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3459824500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be navigated to Desktop page",
  "description": "",
  "id": "topmenu-test;user-should-be-navigated-to-desktop-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Desktop",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Show AllDesktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify that User is navigated to Desktop page using \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverOnDesktop()"
});
formatter.result({
  "duration": 170909200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 12
    }
  ],
  "location": "TopMenuSteps.iClickOn(String)"
});
formatter.result({
  "duration": 863280600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 53
    }
  ],
  "location": "TopMenuSteps.verifyThatUserIsNavigatedToDesktopPageUsing(String)"
});
formatter.result({
  "duration": 28739400,
  "status": "passed"
});
formatter.after({
  "duration": 620956400,
  "status": "passed"
});
formatter.before({
  "duration": 3447703300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be navigated to Laptop and Notebook page",
  "description": "",
  "id": "topmenu-test;user-should-be-navigated-to-laptop-and-notebook-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on Laptop and Notebook",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that User is navigated to Laptop page using \"Laptops \u0026 Notebooks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverOnLaptopAndNotebook()"
});
formatter.result({
  "duration": 187916700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 12
    }
  ],
  "location": "TopMenuSteps.iClickOn(String)"
});
formatter.result({
  "duration": 606101600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops \u0026 Notebooks",
      "offset": 52
    }
  ],
  "location": "TopMenuSteps.verifyThatUserIsNavigatedToLaptopPageUsing(String)"
});
formatter.result({
  "duration": 27384900,
  "status": "passed"
});
formatter.after({
  "duration": 598799600,
  "status": "passed"
});
formatter.before({
  "duration": 3436195400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be navigated to Component page",
  "description": "",
  "id": "topmenu-test;user-should-be-navigated-to-component-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I mouse hover on Component",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on \"Show AllComponents\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify that User is navigated to Component page using \"Components\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverOnComponent()"
});
formatter.result({
  "duration": 173808100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllComponents",
      "offset": 12
    }
  ],
  "location": "TopMenuSteps.iClickOn(String)"
});
formatter.result({
  "duration": 598024700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Components",
      "offset": 55
    }
  ],
  "location": "TopMenuSteps.verifyThatUserIsNavigatedToComponentPageUsing(String)"
});
formatter.result({
  "duration": 22766300,
  "status": "passed"
});
formatter.after({
  "duration": 612475300,
  "status": "passed"
});
});iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 93268900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 24
    }
  ],
  "location": "LoginSteps.iEnterLoginPassword(String)"
});
formatter.result({
  "duration": 42797300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 779458600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 59903300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "RegistrationSteps.iSelect(String)"
});
formatter.result({
  "duration": 603747200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 17
    }
  ],
  "location": "DesktopSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 533404800,
  "status": "passed"
});
formatter.after({
  "duration": 642256800,
  "status": "passed"
});
formatter.uri("Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "As a User I want to register on website",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3466788300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User can login and logout successfully",
  "description": "",
  "id": "registration-test;user-can-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on myAccountTab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Enter First Name \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Enter Last Name \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Enter Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Enter Telephone \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Enter Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Enter Password Confirm \"\u003ccpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select Subscribe \"Yes\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Click on Privacy Policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the success message \"Your Account Has Been Created!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I Click on Continue",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on myAccountTab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the text \"Account Logout\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I Click on Continue",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 71305800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "RegistrationSteps.iSelect(String)"
});
formatter.result({
  "duration": 617241900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cfirstname\u003e",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 85552600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clastname\u003e",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 46445300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 15
    }
  ],
  "location": "RegistrationSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 67314400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cphone\u003e",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.iEnterTelephone(String)"
});
formatter.result({
  "duration": 54850500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword\u003e",
      "offset": 18
    }
  ],
  "location": "RegistrationSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 40316600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccpassword\u003e",
      "offset": 26
    }
  ],
  "location": "RegistrationSteps.iEnterPasswordConfirm(String)"
});
formatter.result({
  "duration": 40554000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.iSelectSubscribeRadioButton(String)"
});
formatter.result({
  "duration": 23191800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 38111500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 628617000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 28
    }
  ],
  "location": "RegistrationSteps.verifyTheSuccessMessage(String)"
});
formatter.result({
  "duration": 22084900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnContinue()"
});
formatter.result({
  "duration": 336684200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 45478400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "RegistrationSteps.iSelect(String)"
});
formatter.result({
  "duration": 579169600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 17
    }
  ],
  "location": "DesktopSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 535522500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnContinue()"
});
formatter.result({
  "duration": 370537400,
  "status": "passed"
});
formatter.after({
  "duration": 623368400,
  "status": "passed"
});
});