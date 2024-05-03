import { utils } from "../../utils"

const loginPageLoaded = "#login h2"
const userNamefield = 'input#username'
const passwordfield = 'input#password'
const loginBtn = 'button#submit'
const sucessfullLoginText = ".post-title"
const congratulationText = ".post-content p strong"
const logoutButton = ".wp-block-button__link"
const errorMessage = "div#error"

export class LoginPage {

    navigatToLoginPage(url){
        utils.navigateToLogInPageUsingUrl(url)
    }

    loginPageLoadedSucessfully(loginPageText){
        utils.verifyText(loginPageLoaded, loginPageText)
    }

    enterUserName(userName){
        utils.enterText(userNamefield, userName)
    }

    enterPassword(password){
        utils.enterText(passwordfield, password)
    }

    clickonLoginBtn(){
        utils.click(loginBtn)
    }

    validatingTheSucessfullTextOnNewPage(sucessfullText){
        utils.verifyText(sucessfullLoginText, sucessfullText)
    }

    validatingTheSucessfullTextIsNotAppeared(){
        utils.verifyElementNotVisible(sucessfullLoginText)
    }

    validatingTheCongratulationTextOnNewPage(congratsText){
        utils.verifyText(congratulationText, congratsText)
    }

    validatingLogoutButton(){
        utils.verifyElementVisibility(logoutButton)
    }

    clickingOnTheLogoutButton(){
        utils.click(logoutButton)
    }

    validatingLogoutButtonNotExist(){
        utils.verifyElementNotVisible(logoutButton)
    }

    validatingForErrorMessageForInvalidCredentials(errorMsg){
        utils.verifyText(errorMessage, errorMsg)
    }

}

export const loginpage = new LoginPage()