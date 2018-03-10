//in separate file to contain all test related to navigation

describe('Navigate to newsletter signup page', function () {

    it('by click on SIGN UP NOW button on home page', function () {
        //visit baseUrl
        cy.visit('')
        //would be greate to have meaningful id
        cy.get('#u39303-4').click()
        cy.url()
            .should('include', '/signup.html')
    })
})
