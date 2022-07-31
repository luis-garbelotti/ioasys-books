/// <reference types="cypress" />

describe('SignIn app', () => {
  it('should login successfully', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[name=email]').type('desafio@ioasys.com.br');
    cy.get('input[name=password').type('12341234');

    cy.intercept('POST', 'https://books.ioasys.com.br/api/v1/auth/sign-in').as('signIn');
    cy.contains('Entrar').click();
    cy.wait('@signIn');

    cy.url().should('include', '/home');
  });
});

describe('Navigate app', () => {
  it('should get first 12 books', () => {
    cy.intercept('GET', 'https://books.ioasys.com.br/api/v1/books?page=1&amount=12').as('firstBooks');
    cy.contains('A veniam sint');
    cy.wait('@firstBooks');
  });

  it('should move to next page', () => {
    cy.intercept('GET', 'https://books.ioasys.com.br/api/v1/books?page=2&amount=12').as('nextPage');
    cy.get('button[data-testid=next]').click();
    cy.wait('@nextPage');

    cy.contains('Página 2');
  });

  it('should move to previous page', () => {
    cy.intercept('GET', 'https://books.ioasys.com.br/api/v1/books?page=1&amount=12').as('previousPage');
    cy.get('button[data-testid=back]').click();
    cy.wait('@previousPage');

    cy.contains('Página 1');
  });

  if ('should show all book informations', () => {
    cy.intercept('GET', 'https://books.ioasys.com.br/api/v1/books/61c9c28fcc498b5c08845dd0').as('bookInfo');
    cy.contains('A veniam sint').click();
    cy.wait('@bookInfo');

    cy.contains('INFORMAÇÕES');
    cy.contains('RESENHA DA EDITORA');
  });
});

describe('Logout app', () => {
  it('should logout', () => {
    cy.get('div[data-testid=logout').click();

    cy.url().should('equal', 'http://localhost:3000/');
  });
});
