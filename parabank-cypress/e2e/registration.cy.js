//cypress/e2e/registration.cy.js

import { customerInfo } from "../support/testData";


describe('Parabank Registration Test', () =>{

    it('Should successfully log in  with valid credentials', () =>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        
        cy.get('a[href*="register.htm"]').click();
        cy.get('[name="customer.firstName"]').type(customerInfo.firstName);
        cy.get('[name="customer.lastName"]').type(customerInfo.lastName);
        cy.get('[name="customer.address.street"]').type(customerInfo.street);
        cy.get('[name="customer.address.city"]').type(customerInfo.city);
        cy.get('[name="customer.address.state"]').type(customerInfo.state);
        cy.get('[name="customer.address.zipCode"]').type(customerInfo.zipCode);
        cy.get('[name="customer.phoneNumber"]').type(customerInfo.phoneNumber);
        cy.get('[name="customer.ssn"]').type(customerInfo.ssn);


        cy.get('[name="customer.username"]').type(customerInfo.userName);
        
        cy.get('[name="customer.password"]').type(customerInfo.password);
        cy.get('[name="repeatedPassword"]').type(customerInfo.password);
        cy.get('#customerForm .button').click();

        const expectedWelcomeText = `Welcome ${customerInfo.userName}`;
        // Assertion to confirm successful registration
        cy.contains(expectedWelcomeText).should('be.visible');
    })
})