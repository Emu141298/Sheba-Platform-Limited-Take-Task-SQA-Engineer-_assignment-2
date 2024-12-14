describe('OrangeHRM Login and Apply Leave Test', () => {
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
  const username = 'Admin';
  const password = 'admin123';

  beforeEach(() => {
    // Visit the OrangeHRM login page before each test
    cy.visit(url);
  });

  it('Should log in successfully', () => {
    // Enter login credentials and submit
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // Verify successful login by checking if the dashboard is visible
    cy.url().should('include', '/dashboard/index');
    cy.get('h6').should('contain.text', 'Dashboard');
  });

  it('Should apply for leave successfully', () => {
    // Perform login
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // Navigate to the "Leave" section
    cy.get('span:contains("Leave")').click();
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click();

    // Open Leave Type dropdown and select "CAN - FMLA"
    cy.get('.oxd-select-text--after > .oxd-icon').click(); // Open dropdown
    cy.get('.oxd-select-option').contains('CAN - FMLA').click(); // Select "CAN - FMLA"

    // Select From Date: 17th December
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click(); // Open calendar
    cy.get('.oxd-calendar-date').contains('30').click(); // Select 17th from calendar

    // Select To Date: 17th December
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click(); // Open calendar
    cy.get('.oxd-calendar-date').contains('30').click(); // Select 17th from calendar

    //add comment
    cy.get('.oxd-textarea').click().type('Personal Reason')

    // Click Submit
    cy.get('button[type="submit"]').click();
   cy.screenshot('Successful apply')
  });
});
