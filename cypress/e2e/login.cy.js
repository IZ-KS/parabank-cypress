

describe('Parabank Login Test', () =>{

    it('Should successfully log in  with valid credentials', () =>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        
        cy.get('#loginPanel [name="username"]').type('john');
        //cy.xpath('//*[@id="loginPanel"]/form/div[1]/input').type('john')
        cy.get('#loginPanel [name="password"]').type('demo');
        cy.get('#loginPanel .button').click();
        cy.get('#showOverview .title').should('be.visible');
        cy.get('#showOverview .title').should('have.text', '\n\t\t\tAccounts Overview\n\t\t');
        cy.get('#showOverview .title').should('have.class', 'title');
    })
})