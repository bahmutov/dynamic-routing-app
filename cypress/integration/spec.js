/// <reference types="cypress" />

describe('Dynamic routes', () => {
  it('loads home', () => {
    cy.visit('/')
    cy.contains('li', 'Home')
    cy.contains('li', 'About')
    cy.contains('li', 'First Post')
    cy.contains('li', 'Second Post')
  })

  it('goes to the about page', () => {
    cy.visit('/').contains('li a', 'About').should('be.visible').click()
    cy.location('pathname').should('equal', '/about')
  })

  it('goes to the first post', () => {
    cy.visit('/').contains('li a', 'First Post').should('be.visible').click()
    cy.location('pathname').should('equal', '/post/first')
  })

  it('goes to the first post / second comment', () => {
    cy.visit('/').contains('li a', 'First Post').should('be.visible').click()
    cy.location('pathname')
      .should('include', '/post')
      .then(pathname => {
        // pathname is like "/post/[id]"
        // ignore first two items from the split
        const [, , post] = pathname.split('/')
        expect(post, 'first post').to.equal('first')

        // there should be a link to the second post
        const commentUrl = `/post/${post}/second-comment`
        cy.get(`a[href="${commentUrl}"]`).should('be.visible').click()
      })

    // let's validate every part of the URL's pathname
    cy.location('pathname').should(pathname => {
      // pathname is like "/post/[id]/[comment]"
      const [, , post, comment] = pathname.split('/')
      expect(post, 'post id').to.equal('first')
      expect(comment, 'comment id').to.equal('second-comment')
    })
  })
})
