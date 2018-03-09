//in separate file to contain all test related to navigation

describe('Navigate to newsletter signup page', function () {
    it('clicks on SIGN UP NOW button on home page', function () {
        //visit baseUrl
        cy.visit('')
        //It would be better to use id with meaningful name here
        cy.contains('SIGN UP NOW').click()
        cy.url()
            .should('include', '/signup.html')
    })
})
