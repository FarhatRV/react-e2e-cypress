describe("The Registration Form", () => {
  it("loading passes", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("The Name Field", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('input[name="name"]').clear().type("Jane");
  });
  it("Doesn't have a name", () => {
    cy.get('input[name="name"]').clear();
    cy.get(".details > p").should("contain", "You need a name!!!");
  });

  it("Has a name", () => {
    cy.get('input[name="name"]').clear().type("Jane");
    cy.get(".details").should("contain", "Jane");
  });

  it("Has Pasta", () => {
    cy.get("select").select("Pasta");
    cy.get(".details > p").should("contain", "🍝");
  });

  it("Has Cake", () => {
    cy.get("select").select("Cake");
    cy.get(".details > p").should("contain", "🎂");
  });

  it("Has Pizza", () => {
    cy.get("select").select("Pizza");
    cy.get(".details > p").should("not.contain", "🎂");
  });

  it("Has Female value", () => {
    cy.get('[type="radio"]').check("F");
  });

  it("takes a screenshot", () => {
    // screenshot will be saved as
    // cypress/screenshots/users.cy.js/my tests -- takes a screenshot.png
    cy.screenshot();
  });
});

// describe("The food field", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });
// });

// describe("The Gender field", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });

// });

// describe("Overall Snapshot", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });

// });
