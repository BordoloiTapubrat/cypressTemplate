# cypressTemplate
cypress framework and snippets

![Cypress POM](https://github.com/BordoloiTapubrat/cypressTemplate/assets/49464932/f672bbba-8185-483b-aadc-d0f2b5f8344c)


### Cypress Test Syntax

describe("Suite Name", ()=>{<br />
    it("Test Case 1", ()=><br />
    {<br />
        cy.visit("url")<br />
        cy.get("css locator ").click()<br />
    })<br />
})

### Cypress RUN Test Commands

Open Cypress Application UI and Select Tests in Application to Execute

**npx cypress open**

Run a specific Test which is called as "spec" and view it using "headed"

**npx cypress run --spec cypress\e2e\Tests\LoginTest.cy.js --headed**

Run on a specific browser , a specific Test which is called as "spec" and view it using "headed"

**npx cypress run --spec cypress\e2e\Tests\LoginTest.cy.js --headed --browser chrome**

### Cypress xPath<br />
Using Plugin - cypress-xpath - currently deprecated<br />
https://www.npmjs.com/package/cypress-xpath

### Cypress Assertions
**Using Chai Framework**<br />
https://docs.cypress.io/guides/references/assertions#Chai

*Assertions Two Types*<br />
Implicit - Built In Assertions - **should** , **and** <br />
Explicit - Need To Write Explicitly - **expect**  (BDD Type) , **assert** (TDD Type)

### Cypress Reports - <br />
Using **cypress-mochawesome-reporter**
https://www.npmjs.com/package/cypress-mochawesome-reporter
