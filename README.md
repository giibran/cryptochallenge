# How to install and run
- Clone the project and open the folder container
1. Install node dependencies: ``` npm install ```
2. Open cypress,json file and setup the email, password and pin variables
3. Run cypress command:  ``` npm run test ```
4. Wait until cypress open the integration tests

# How to run the flow
1. Choose a folder to run the tests (Mexico or Argentina)
2. In folder chosen run the signup test, at the end of test you need to add the validation code that you will receive in your mail
3. After validate the email run the login or AddBeneficiares test in the order you want
*Once you run the login test it will crash if run again, if you want run again you need comment the lines number 34 and 35 in the 'cypress/support/commands.js' file

# Things to know
- If you run several times the test it will ask you to authorise your device, it can't possible with cypress cause the context of browser, you need update the email in 'cypress.json' file and run from signup test
- For Add beneficiaries test you need to add the pin manually and add in the cypress.json file
-  If you are running cypress and update something from the 'cypress.json' file I recommend you kill the cypress process and run again to avoid that variables don't refresh the value correctly.