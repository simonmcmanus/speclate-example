

describe('Navigating the site', function () {

  it('should container correct page content', function () {

    cy.visit('http://127.0.0.1:5006')

    cy.get('#container').should('contain', 'Welcome home')
    cy.get('.contact').click()
    cy.get('#container').should('contain', 'Welcome to the contact page')
    cy.get('.about').click()
    cy.get('#container').should('contain', 'Welcome to the about page')

  })
})
