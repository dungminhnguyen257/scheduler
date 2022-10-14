describe("Navigation", () => {
  beforeEach(() => {
    // reset DB
    cy.request("GET", "/api/debug/reset");

    // Visits the root of our web server
    cy.visit("/");

    cy.contains("Monday");
  });

  it("should book an interview", () => {
    // Clicks on the "Add" button to add appointment
    cy.get("[alt=Add]").first().click();

    // Enters their name
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");

    // Chooses an interviewer
    cy.get("[alt='Sylvia Palmer']").click();

    // Clicks the save button
    cy.contains("Save").click();

    // Sees the booked appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an interview", () => {
    // Clicks on the "Edit" button in the first appointment
    cy.get("[alt=Edit]").first().click({ force: true });

    // Enters new student name
    cy.get("[data-testid=student-name-input]").clear().type("John Doe");

    // Chooses another interviewer
    cy.get("[alt='Tori Malcolm']").click();

    // Clicks the save button
    cy.contains("Save").click();

    // Sees the updated appointment
    cy.contains(".appointment__card--show", "John Doe");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an interview", () => {
    // Clicks on the "Delete" button in the first appointment
    cy.get("[alt=Delete]").first().click({ force: true });

    // Clicks on the "Confirm" button
    cy.contains("Confirm").click();

    // Check if "Deleting" message is being shown and then gone
    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    // Sees the appointment slot is empty
    cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  });
});
