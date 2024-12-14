OrangeHRM Login and Apply Leave Automation
Project Overview
The project automates the following scenarios on the OrangeHRM demo site:
1. Logging into the OrangeHRM application.
2. Applying for leave with the following details:
   - Leave Type: CAN - FMLA
   - From Date: 30th December
   - To Date: 30th December
   - Comments: Personal Reason
Technologies Used
- Cypress - A modern end-to-end testing framework.
- JavaScript - The programming language used for Cypress tests.
Prerequisites
Before running the tests, ensure you have the following installed:
- Node.js (v14 or above)
- npm or yarn (comes with Node.js)
Installation and Setup
1. Clone this repository:
   git clone https://github.com/<your-username>/Sheba-Platform-Limited-Take-Task-SQA-Engineer-assignment-2.git
2. Navigate to the project directory:
   cd Sheba-Platform-Limited-Take-Task-SQA-Engineer-assignment-2
3. Install project dependencies:
   npm install
How to Run the Tests
1. Open the Cypress Test Runner:
   npx cypress open
   - Click on the test file (e.g., orangehrm.spec.js) to execute it in the browser.
2. Run tests in headless mode (optional):
   npx cypress run
Test Scenarios
1. Login to OrangeHRM
- Objective: Verify that a user can successfully log into the system with valid credentials.
- Steps:
  1. Navigate to the OrangeHRM login page.
  2. Enter the username: Admin.
  3. Enter the password: admin123.
  4. Verify successful login by checking for the Dashboard page.
2. Apply for Leave
- Objective: Verify that a user can successfully apply for leave.
- Steps:
  1. Log in to OrangeHRM.
  2. Navigate to the Leave section and click "Apply Leave."
  3. Select the following:
     - Leave Type: CAN - FMLA
     - From Date: 17th December
     - To Date: 17th December
     - Comment: Personal Reason
  4. Submit the leave application.
  5. Verify successful submission.
Folder Structure
📁 cypress
 ┣ 📁 e2e                 # End-to-end test cases
 ┃ ┗ orangehrm.spec.js    # Test script for Login and Apply Leave
 ┣ 📁 fixtures            # Test data (if needed)
 ┣ 📁 support             # Cypress support files
 ┗ 📄 cypress.config.js   # Cypress configuration file
Repository Structure
Sheba-Platform-Limited-Take-Task-SQA-Engineer-assignment-2
 ┣ 📁 cypress
 ┣ 📄 .gitignore
 ┣ 📄 package.json
 ┣ 📄 README.md
 ┗ 📄 orangehrm.spec.js
Notes
- The URL used in this test is the demo URL for OrangeHRM: https://opensource-demo.orangehrmlive.com/.
- Username and password for the demo:
  - Username: Admin
  - Password: admin123
Contribution
Feel free to fork the repository, create a feature branch, and submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
