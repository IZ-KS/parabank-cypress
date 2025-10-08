describe('Parabank API Testing', () =>{

    const apiUrl = 'https://parabank.parasoft.com/parabank/services/bank';
    const initialUsername = 'john';
    const initialPassword = 'demo';

    // --- 1. GET Request Test (Getting Customer Data) ---
    it('successfully retrieve customer information using GET',()=>{
        cy.request({
            method: 'GET',
            url: `${apiUrl}/login/${initialUsername}/${initialPassword}`,
        }).then((response)=>{
            expect(response.status).to.eq(200);

            cy.wrap(response.body).should('include', '<id>');
            cy.log('Successfully retrieved session and customer details.');
        })
    });


})