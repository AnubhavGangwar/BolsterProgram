
export class Utils {

    navigateToLogInPageUsingUrl(path) { 
        const url = `/${path}`
        cy.visit(url)
      }

    verifyElementVisibility(loacator) {
        cy.get(loacator)
          .should('be.visible')
    }

    verifyElementNotBeVisible(locator){
        cy.get(locator).should('not.be.visible');
    }

    verifyElementNotVisible(locator){
        cy.get(locator).should('not.exist')
    }

    verifyText(loacator, expectedValue) {
        cy.get(loacator).invoke('text').then(text => {
            expect(text).to.equal(expectedValue)
        })
    }

    click(locator) {
        cy.get(locator).then(locator => {
            cy.wrap(locator).click({ force: true })
        })
        return cy.wrap(locator)
    }

    enterText(locator, desiredText) {
        cy.get(locator).then(locator => {
            cy.wrap(locator).clear({ force: true }).type(desiredText)
        })
    }

    verifyContainsText(loacator, expectedValue) {
        cy.get(loacator).invoke('text').then(text => {
            expect(text).contains(expectedValue)
        })
    }

    explicitWait(value) {
        cy.wait(value)
    }

    shouldBeDisabled(locator){
        cy.get(locator).should('be.disabled');
    }

    typeIndex(locator,index,text){
    cy.get(locator).eq(index).type(text)
    }

    clickWithIndex(locator,index){
        cy.get(locator).eq(index).click()
    }

    verifyTextPresent(locator,PassRequiredText){
        cy.get(locator).invoke('text').then((text)=>{
          expect(text).to.equal(PassRequiredText)
        })
    }


}
export const utils = new Utils()