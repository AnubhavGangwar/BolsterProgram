const { loginpage } = require("../../support/pages/LoginPages/loginPage")

describe('Background Steps For Each Test',()=>{
    let creds;
    before(()=>{
        cy.fixture('testData.json').then((data) => {
            creds = data;
          });
    })
    beforeEach(()=>{
        loginpage.navigatToLoginPage("practice-test-login/")        
    })

    it('1 - To Verify that User Is able To Navigate New Page After Sucessfull Login With Valid Credentials ',()=>{
        const credentials= creds.validLoginCredentials;
        const assertions = creds.assertionTextsForVerification;
        loginpage.loginPageLoadedSucessfully(assertions.lodedLoginPage)
        loginpage.enterUserName(credentials.username)
        loginpage.enterPassword(credentials.password)
        loginpage.clickonLoginBtn()
        loginpage.validatingTheSucessfullTextOnNewPage(assertions.successfullNewPageText)
        loginpage.validatingTheCongratulationTextOnNewPage(assertions.congratsNewPageText)
        loginpage.validatingLogoutButton()
    })

    it('2 - To Verify that User Gets Invalid Username Error Message While Loging in With invalid Username in Credentials ',()=>{
        const credentials= creds.invalidUsernameLoginCredentials;
        const assertions = creds.assertionTextsForVerification;
        loginpage.enterUserName(credentials.username)
        loginpage.enterPassword(credentials.password)
        loginpage.clickonLoginBtn()
        loginpage.validatingForErrorMessageForInvalidCredentials(assertions.invalidUserNameErrorMessage)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.successfullNewPageText)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.congratsNewPageText)
        loginpage.validatingLogoutButtonNotExist()
    })

    it('3 - To Verify that User Gets Invalid Password Error Message While Loging in With invalid Password in Credentials ',()=>{
        const credentials= creds.invalidPasswordCredentials;
        const assertions = creds.assertionTextsForVerification;
        loginpage.enterUserName(credentials.username)
        loginpage.enterPassword(credentials.password)
        loginpage.clickonLoginBtn()
        loginpage.validatingForErrorMessageForInvalidCredentials(assertions.InvalidPasswordErrorMessage)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.successfullNewPageText)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.congratsNewPageText)
        loginpage.validatingLogoutButtonNotExist()
    })

    it('4 - To Verify that User Gets Invalid User Error Message While Loging in With invalid Credentials ',()=>{
        const credentials= creds.invaliCredentialWithUsernameAndPassword;
        const assertions = creds.assertionTextsForVerification;
        loginpage.enterUserName(credentials.username)
        loginpage.enterPassword(credentials.password)
        loginpage.clickonLoginBtn()
        loginpage.validatingForErrorMessageForInvalidCredentials(assertions.invalidUserNameErrorMessage)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.successfullNewPageText)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.congratsNewPageText)
        loginpage.validatingLogoutButtonNotExist()
    })

    it('5 - To Verify that User Gets Invalid User Error Message When Uer click on Submit Button Without Entering And Credentials ',()=>{
        const assertions = creds.assertionTextsForVerification;
        loginpage.clickonLoginBtn()
        loginpage.validatingForErrorMessageForInvalidCredentials(assertions.invalidUserNameErrorMessage)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.successfullNewPageText)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.congratsNewPageText)
        loginpage.validatingLogoutButtonNotExist()
    })

    it('6 - To Verify that User Gets Logout From the New Page And Navigate Back To The Login Page ',()=>{
        const assertions = creds.assertionTextsForVerification;
        const credentials= creds.validLoginCredentials;
        loginpage.loginPageLoadedSucessfully(assertions.lodedLoginPage)
        loginpage.enterUserName(credentials.username)
        loginpage.enterPassword(credentials.password)
        loginpage.clickonLoginBtn()
        loginpage.validatingTheSucessfullTextOnNewPage(assertions.successfullNewPageText)
        loginpage.validatingTheCongratulationTextOnNewPage(assertions.congratsNewPageText)
        loginpage.validatingLogoutButton()
        loginpage.clickingOnTheLogoutButton()
        loginpage.loginPageLoadedSucessfully(assertions.lodedLoginPage)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.successfullNewPageText)
        loginpage.validatingTheSucessfullTextIsNotAppeared(assertions.congratsNewPageText)
        loginpage.validatingLogoutButtonNotExist()
    })

})