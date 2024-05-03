import { utils } from "../../utils"

const landingPageText ='.main-container h2'
const inputArea ='.input-field'
const editButton ='[name="Edit"]'
const addButton ='[name="Add"]'
const loading ='#loading'
const save ='[name="Save"]'
const SuccessSave='#confirmation'


export class ExceptionPage {
    ExceptionsPageLoad(){
        utils.navigateToLogInPageUsingUrl('practice-test-exceptions/')
    }
    verifyExceptionPage(text){
        utils.verifyContainsText(landingPageText,text)
    }
    verifyInputDisabledbyDefault(){
        utils.shouldBeDisabled(inputArea)
    }
    addNewRowAndVerifyTwoInput(text){
        utils.click(editButton)
        utils.enterText(inputArea,text)
        utils.click(addButton)
        cy.wait(2000)
        cy.get(inputArea).should('have.length', 2);

    }
    clickAddAndVerifyTwoInputRows(){
        utils.click(addButton)
        cy.wait(2000)
        cy.get(inputArea).should('have.length', 2);

    }
   
    addDataInRow2(text){
        utils.typeIndex(inputArea,1,text)
        utils.clickWithIndex(save,1)
    }
    verifySaveSuccess(text){
        utils.verifyTextPresent(SuccessSave,text)
    }
    clickAddButton(){
        utils.click(addButton)
    }
    verifyAddButtonNotvisible(){
        utils.verifyElementNotBeVisible(addButton)
    }


}export const exceptionPage = new ExceptionPage()