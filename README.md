# cypressTemplate
cypress framework template

### Cypress Test Syntax
describe("Suite Name", ()=>{

    it("Test Case 1", ()=>
    {
        cy.visit("url")
        cy.get("css locator ").click()
    })
    
})

## Cypress RUN Test Commands

Open Cypress UI and Select Tests in UI to Execute

**npx cypress open**

Run a specific Test which is called as "spec" and in view it using "headed"

**npx cypress run --spec cypress\e2e\Tests\LoginTest.cy.js --headed**

Run on a specific browser , a specific Test which is called as "spec" and in view it using "headed"

**npx cypress run --spec cypress\e2e\Tests\LoginTest.cy.js --headed --browser chrome**

## Cypress xPath
## Using Plugin - cypress-xpath - currently deprecated
### https://www.npmjs.com/package/cypress-xpath

## Cypress Assertions
## Using Chai Framework
### https://docs.cypress.io/guides/references/assertions#Chai

## Assertions Two Type - 
## Implicit - Built In Assertions - should , and
## Explicit - Need To Write Explicitly - expect  (BDD Type) , assert (TDD Type)

## Cypress Reports - 
### Using cypress-mochawesome-reporter 
### https://www.npmjs.com/package/cypress-mochawesome-reporter