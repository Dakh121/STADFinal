describe('Sign in', () => {
  it('Has necessary contents on the sign in page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("SIGN IN")
    cy.get("button").contains("SIGN IN").click()

  })
})