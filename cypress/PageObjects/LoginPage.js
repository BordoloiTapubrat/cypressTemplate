//Page Object Class for Login Page

//Get the Login Page CSS Locators
import loginSelectors from "../LoginSelectors/loginSelectors.js";
class Login
{

    //Function for userName text Box
    setUserName(userName)
    {
        cy.get(loginSelectors.loginUserNameTxtBox).type(userName);
    }

    //Function for Password text Box
    setPassword(passCode)
    {
        cy.get(loginSelectors.loginPasswordTxtBox).type(passCode);
    }

    //Function for Login Button
    clickLoginBtn()
    {
        cy.get(loginSelectors.loginBtn).click();
    }

    //Assertion After Successful Login
    verifyLogin(assertDashboard)
    {
        cy.get(loginSelectors.loginDashboardLbl).should('have.text',assertDashboard);
    }

}

//Export the functions to be used by other 
export default Login