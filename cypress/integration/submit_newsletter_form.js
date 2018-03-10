//the number depends on the environment where tests are running and database state
//Ex. if tests running with local empty DB, there is no need of 10000
const random_number = Cypress._.random(0, 10000)
//would be great to store in configuration files
const signup_partUrl = '/signup.html'
const subscribe_partUrl = '/subscribe/post?u='

describe('Submit to newsletter form', function () {

    beforeEach(function () {
        cy.visit(signup_partUrl)
        //ideally should be stored in PageObjects or other alternative way, ex. commands
        cy.get('#input01').as('email_input')
        cy.get('[name=subscribe]').as('subscribe_btn')
    })

    it('redirects to page with error message when email is invalid', function () {
        //meaningful id would be better
        //email validation is implemented by browser https://screencast.com/t/CegGQAHE
        cy.get('@email_input').type('test@gmail.com')
        cy.get('@subscribe_btn').click()
        cy.url()
            .should('not.include', signup_partUrl)
            .and('include', subscribe_partUrl)
        cy.get('.formstatus')
            .should('contain', 'There are errors below')
    })

    it('redirects to page with success message when email is valid', function () {
        cy.get('@email_input').type('evgeniia.balyasina' + random_number + '@gmail.com')
        cy.get('@subscribe_btn').click()
        cy.url()
            .should('not.include', signup_partUrl)
            .and('include', subscribe_partUrl)
        cy.get('h2')
            .should('contain', 'Subscription Confirmed')
    })
})
