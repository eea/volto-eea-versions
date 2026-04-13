import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('EEA Versions Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('EEA Versions Block: Add and save', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Versions Test');
    cy.get('.documentFirstHeading').contains('Versions Test');

    cy.getSlate().click();

    // Add eea versions block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.eea_versions')
      .click({ force: true });

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Versions Test');
  });
});