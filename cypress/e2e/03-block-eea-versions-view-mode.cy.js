import { slateBeforeEach, slateAfterEach } from '../support/e2e';

const setPageTitle = (title) => {
  cy.clearSlateTitle();
  cy.getSlateTitle().type(title);
  cy.get('.documentFirstHeading').contains(title);
};

const addCommonBlock = (blockType) => {
  cy.get('.block.inner.title [contenteditable=true]').first().click({
    force: true,
  });
  cy.get('.ui.basic.icon.button.block-add-button').first().click();
  cy.get('.blocks-chooser .title').contains('Common').click();
  cy.get(`.content.active.common .button.${blockType}`).click({ force: true });
};

const mockVersions = (payload) => {
  cy.intercept('GET', '**/cypress/my-page/@eea.versions*', {
    statusCode: 200,
    body: payload,
  }).as('getVersions');
};

const saveAndAssertViewUrl = () => {
  cy.get('#toolbar-save').click();
  cy.url().should('eq', `${Cypress.config().baseUrl}/cypress/my-page`);
};

const completeVersionsPayload = {
  '@id': '/cypress/my-page',
  newer_versions: {
    items: [
      {
        '@id': '/cypress/my-page-v2',
        title: 'My Page v2',
        effective: '2026-01-10T00:00:00+00:00',
      },
    ],
  },
  older_versions: {
    items: [
      {
        '@id': '/cypress/my-page-v0',
        title: 'My Page v0',
        effective: '2024-07-21T00:00:00+00:00',
      },
    ],
  },
};

const emptyVersionsPayload = {
  '@id': '/cypress/my-page',
  newer_versions: { items: [] },
  older_versions: { items: [] },
};

describe('EEA Versions Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('renders latest and all versions from API data in view mode', () => {
    setPageTitle('Versions API Render');
    mockVersions(completeVersionsPayload);

    addCommonBlock('eea_latest_version');
    cy.wait('@getVersions');
    addCommonBlock('eea_versions');

    saveAndAssertViewUrl();

    cy.get('#page-document .eea-latest-version')
      .should('contain', 'Latest version of this report:')
      .and('contain', 'My Page v2');

    cy.get('#page-document .eea-latest-version .eea-versions-list-link')
      .should('have.attr', 'href')
      .and('include', '/cypress/my-page-v2');

    cy.get('#page-document .eea-versions li').should('have.length', 3);
    cy.get('#page-document .eea-versions li')
      .first()
      .should('contain', 'My Page v2');
    cy.get('#page-document .eea-versions li')
      .eq(1)
      .should('contain', '(current)')
      .and('contain', 'Versions API Render');
    cy.get('#page-document .eea-versions li')
      .last()
      .should('contain', 'My Page v0');
  });

  it('shows edit placeholders with empty versions data and renders nothing in view', () => {
    setPageTitle('Versions Empty Data');
    mockVersions(emptyVersionsPayload);

    addCommonBlock('eea_latest_version');
    cy.wait('@getVersions');
    cy.contains('Latest version block edit').should('be.visible');

    addCommonBlock('eea_versions');
    cy.contains('All versions block edit').should('be.visible');

    saveAndAssertViewUrl();

    cy.get('#page-document .eea-latest-version').should('not.exist');
    cy.get('#page-document .eea-versions').should('not.exist');
    cy.contains('Latest version block edit').should('not.exist');
    cy.contains('All versions block edit').should('not.exist');
  });
});
