//the number depends on the environment where tests are running and database state
//Ex. if tests running with local empty DB, there is no need of 10000
const random_number = Cypress._.random(0, 10000)

describe('Submit to newsletter form', function () {

    beforeEach(function () {
        const signup_url = '/signup.html'
        cy.visit(signup_url)
    })


    it('shows error message when email is invalid', function () {
        //meaningful id would be better
        //email validation is implemented by browser https://screencast.com/t/CegGQAHE
        cy.get('#input01').type('test@gmail.com')
        cy.contains('GO!').click()
        cy.url()
            .should('not.include', '/signup.html')
        cy.get('.formstatus')
            .should('contain', 'There are errors below')
    })

    it('successfully when email is valid', function () {
        cy.get('#input01').type('evgeniia.balyasina' + random_number + '@gmail.com')
        cy.contains('GO!').click()
        cy.url()
            .should('include', '/subscribe/post?u=')
        cy.get('#templateBody')
            .should('contain', 'Subscription Confirmed')
    })
})
