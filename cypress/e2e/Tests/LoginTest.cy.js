///<reference types="Cypress"/>
import Login from "../../PageObjects/LoginPage.js";
import URL1 from "../../ApplicationURLs/ApplicationURLs.js"

//Test Suite
describe('Login Test Suite', ()=>{
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
    it('Test Login', ()=>{
        //Object Created to access the functions in Page Object Class
        const ln = new Login()
        //launch the URL
        cy.visit(URL1.TestURL1)
        //Insert User Name
        ln.setUserName(testData.userName)
        //Insert Password
        ln.setPassword(testData.password)
        //Click On Login Button
        ln.clickLoginBtn()

        //Assert Login is Successful
        ln.verifyLogin(testData.assertDashboard)

        //Take A Screenshot
        cy.screenshot("Test_Login")

        })
    
})


