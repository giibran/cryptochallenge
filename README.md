# How to run
- Clone the project and open the folder container
1. Install node dependencies: ``` npm install ```

2. Open cypress,json file and setup the email, password and pin variables
3. Run cypress command:  ``` npm run test ```
4. Wait until cypress open the integration tests

# Things to know
- First excecute the signup test, at the end of test you need to add the verification code manually  (i'm not proud of this :_( )
- If you run several times the test it will ask you to authorise your device, it can't possible with cypress cause the context of browser, you need to change the signup email.
- Tip for change of email, if you are using a gmail you can add the plus sign "+" before @, this allow you to have multiples accounts with the same email.
- For Add beneficiaries test you need to add the pin manually and add in the cypress.json file
- If you are running cypress and update something of cypress.json file i recommed you kill cypress and run again to avoid that variables don't refresh the value correctly.