describe('home navigation', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('"About" link', function() {
    cy.contains('About').click()
    cy.location('pathname').should('equal', '/about/')
  })

  it('"Users" link', function() {
    cy.contains('Users').click()
    cy.location('pathname').should('equal', '/users/')
  })

  it('"Home" link', function() {
    cy.contains('Home').click()
    cy.location('pathname').should('equal', '/')
  })

})
