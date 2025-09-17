# Greggs Menu Automation Tests

## What I Tested

- **Navigation:** Verified that clicking on category headers (e.g. Breakfast, Savouries & Bakes) correctly scrolls to and displays the relevant items.
- **Functional correctness:** Ensured menu items render correctly for each item and are visible to the user. Also tested the search function returns the correct items.
- **UI rendering & responsiveness:** Checked that the menu page loads consistently across desktop and mobile.
- **Accessibility:** Ran automated accessibility checks on the menu page using `cypress-axe`.
- **Performance:** For a basic performance test the default timeout is set to 3 seconds; this soft checks the UI can render the correct items within a small timeframe for the user.

## Why I Chose This Approach

- I chose Cypress as I'm specialised in this and it’s a popular E2E framework.
- Tests are data driven where possible (looping categories/items) so they can scale easily to cover more products.
- The current suite demonstrates enough coverage to test design and structure, without trying to fully automate the entire Greggs menu (which would be a large regression suite in reality).

## How to Run the Tests

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Setup

1. Clone the repository:
   git clone https://github.com/fairleyk/Cypress-Demo.git
2. Install dependencies:
   cd cypress-Demo
   npm install
3. Run the tests:
   npx cypress run --browser chrome

## Notes:

- **allMenuItems.cy.js:** For a more in-depth test, we could verify each header and image are correct by referencing a JSON file, but for now this is sufficient to verify all items are rendered.
- **search.cy.js:** I chose just one search keyword to showcase this test, but ideally more testing could be added for partial matches, etc.
- **menuNavigation.cy.js:** More in-depth assertions could be added, such as waiting for the scroll to stop and verifying the exact position of the item is the first one visible.
- **accessibility.cy.js:** Used cypress-axe for this; note that this test currently fails as some elements do not meet accessibility standards.

## Test Results

A test-output.log file can be found in the root folder
