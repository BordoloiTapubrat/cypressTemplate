///<reference types="Cypress"/>

import appUrl from "../../ApplicationURLs/ApplicationURLs.js"
import Login from "../../PageObjects/LoginPage.js";

//Example of Assertions

describe("Suite Name", ()=>{

    // Varible to hold test data from fixtures folder - json test data file
    let testData

    //Hook to run once and read all the test data
    before('Get Test Data',()=>{

                //Get Test Data
                cy.fixture('LoginTestData.json').then((data)=>{
                //Store data read from json file in global variable test data 
                //so that multiple it blocks can use it.
                    testData = data
                })
            })
      
    //Test
    it('Test Login Implicit Assertions', ()=>{

        //Object Created to access the functions in Page Object Class
        const ln = new Login()

        //launch the URL
        cy.visit(appUrl.TestURL1)
        //Insert User Name
        ln.setUserName(testData.userName)
        //Insert Password
        ln.setPassword(testData.password)
        //Click On Login Button
        ln.clickLoginBtn()

        //Assertion - Implicit - BuiltIn
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible');
        
        //Assertion - Implicit - BuiltIn
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

        //Assertion - Implicit - Assert Title
        cy.title().should('eq','OrangeHRM')

        //Assertion - Implicit - Assert Title
        cy.title().should('not.eq','OrangeHRM_ABC')

        //Assertion - Implicit - Assert Title
        cy.title().should('include','HRM')

        //Option 1
        //Chaining Validations using should 
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
        .should('be.visible')
        .should('have.text','Dashboard')

        //Option 2
        //Chaining Validations using and 
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
        .should('be.visible')
        .and('have.text','Dashboard')

        //Assertions
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
        .should('contain','Time at Work')
        .and('be.visible')

        //Assertions for user name
        cy.get('.oxd-userdropdown-name').should('not.be.empty')

        //Assertions for logo
        cy.get('.oxd-userdropdown-img')
        .should('be.visible')
        .and('exist')

        //Assertions for logo
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').should('have.text','My Info')


        //Take A Screenshot
        cy.screenshot("Test_Login")

        })


        it('Test Login Explicit Assertions In BDD Approach', ()=>{

            //Object Created to access the functions in Page Object Class
            const ln = new Login()

            //launch the URL
            cy.visit(appUrl.TestURL1)
            //Insert User Name
            ln.setUserName(testData.userName)
            //Insert Password
            ln.setPassword(testData.password)
            //Click On Login Button
            ln.clickLoginBtn()

            //Assertion - Explicit
            let expectedValue = 'Dashboard';
            //Need to have user defined function
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').then( (varElement)=> {

                //Flow --> The css element -- .oxd-topbar-header-breadcrumb > .oxd-text -- is captured in variable varElement 
                //From the varibale - varElement getting the text() value
                //text() - javascript function
                let actualValueCapture = varElement.text()

                //Assertion - 
                //BDD
                expect(actualValueCapture).to.equal(expectedValue)
            })

            //Take A Screenshot
            cy.screenshot("Explicit_Assertions_In_BDD_Approach")

        })


        it('Test Login Explicit Assertions In TDD Approach', ()=>{

            //Object Created to access the functions in Page Object Class
            const ln = new Login()

            //launch the URL
            cy.visit(appUrl.TestURL1)
            //Insert User Name
            ln.setUserName(testData.userName)
            //Insert Password
            ln.setPassword(testData.password)
            //Click On Login Button
            ln.clickLoginBtn()

            //Assertion - Explicit
            let expectedValue = 'Dashboard';
            //-- Need to have user defined function
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').then( (varElement)=> {

                //Flow --> The css element -- .oxd-topbar-header-breadcrumb > .oxd-text -- is captured in variable varElement 
                //From the varibale - varElement getting the text() value
                //text() - javascript function
                let actualValueCapture = varElement.text()

                //Assertion - 
                //TDD
                assert.equal(actualValueCapture,expectedValue)
            })

            //Take A Screenshot
            cy.screenshot("Explicit_Assertions_In_TDD_Approach")

        })

        afterEach('After Executing Each Test Cases', ()=>{

              //Object Created to access the functions in Page Object Class
              const ln = new Login()
              ln.logout();
        })

})

