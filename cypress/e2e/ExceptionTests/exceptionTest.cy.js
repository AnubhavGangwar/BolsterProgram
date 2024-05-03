const { exceptionPage } = require("../../support/pages/ExceptionPages/exceptionPage")

describe('Test Suite For Exception Handling',()=>{
    let creds;
    before(()=>{
        cy.fixture('testData.json').then((data) => {
            creds = data;
          });
    })
    beforeEach(()=>{
        exceptionPage.ExceptionsPageLoad()
    })
    it('Test case 1: NoSuchElementException handling',()=>{
        const Inputtexts = creds.api;
        exceptionPage.addNewRowAndVerifyTwoInput(Inputtexts.newName) //aded proper wait in base class
    })
    it('Test case 2: ElementNotInteractableException handling',()=>{ //used indexing so that only the valid save button will be clicked
        const Inputtexts = creds.api;
        exceptionPage.addNewRowAndVerifyTwoInput(Inputtexts.newName) //aded proper wait in base class
        exceptionPage.addDataInRow2(Inputtexts.newJob)
        exceptionPage.verifySaveSuccess('Row 2 was saved')
    })
    it('Test case 3 : Verify By default input field is disabled',()=>{
        exceptionPage.verifyInputDisabledbyDefault()
    })
    // Test case 4: StaleElementReferenceException
    it('Test case 4: StaleElementReferenceException handling',()=>{
        exceptionPage.clickAddButton()
        exceptionPage.verifySaveSuccess('Row 2 was added')
        exceptionPage.verifyAddButtonNotvisible()
    })
    it('Test case 5: TimeoutException handling',()=>{
        exceptionPage.clickAddAndVerifyTwoInputRows()
    })
})