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