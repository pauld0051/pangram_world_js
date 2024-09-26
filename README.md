Site re-created 10 August 2024 to be completely front end.

# User Stories for Physics Calculator

This document outlines the various user stories for our physics calculator. The aim is to provide a consistent and intuitive user experience across all calculators, irrespective of the specific equations being calculated.

## User Stories

### 1. As a User, I Can Input Any Three Variables
- **Description:** 
  - The user can input any unknown variables into the calculator fields. When enough fields are inputted, the remaining unknowns are calculated.
  - The calculator should then dynamically compute the remaining unknown variables based on the input.
- **Acceptance Criteria:**
  - The remaining variables should be calculated and displayed in real-time as soon as the third variable is input.
  - The user should see the calculated results locked and displayed in the respective fields.
  - Locking occurs to prevent user input and making "incorrect" calculations appear possible.

### 2. As a User, I Can Adjust Any of the Input Variables
- **Description:**
  - The user can modify any of the input variables even after the calculations have been performed.
  - The calculator should update the locked variables accordingly in real-time.
- **Acceptance Criteria:**
  - If the user changes an input, the remaining locked fields should update automatically to reflect the new calculations.
  - There should be no errors or inconsistencies in the recalculated values.

### 3. As a User, I Can Clear a Variable to Unlock Fields
- **Description:**
  - The user should be able to clear any one of the input variables.
  - The calculated (locked) variables should be cleared and unlocked, allowing for new input for any of the variables.
- **Acceptance Criteria:**
  - Upon clearing an input, the locked variables should become editable.
  - The calculator should reset the output fields related to the cleared input, allowing the user to enter new values.

### 4. As a User, I Can Toggle Significant Figures for Results
- **Description:**
  - The user can choose to display results with the appropriate number of significant figures.
  - A checkbox or toggle button should be available to enable or disable this feature.
- **Acceptance Criteria:**
  - When enabled, all results should be rounded to the least number of significant figures of the input values.
  - When disabled, the results should display as many decimal places as calculated by the formula.

### 5. As a User, I Can See Units Adjusted Dynamically
- **Description:**
  - The user can select units for each variable from a dropdown menu.
  - The calculator should dynamically adjust calculations based on the selected units.
- **Acceptance Criteria:**
  - If a user changes the unit for any variable, the calculator should update the values accordingly.
  - The conversion should be consistent and accurate based on predefined unit conversion rates.

### 6. As a User, I Can Expect Error Handling for Invalid Inputs
- **Description:**
  - The user should receive visual feedback if they input values that lead to impossible scenarios (e.g., negative time).
  - Tooltips or error messages should guide the user to correct their inputs.
- **Acceptance Criteria:**
  - If an input leads to an impossible calculation, a tooltip should appear next to the field with a clear error message.
  - The calculator should not perform or display erroneous calculations.

### 7. As a User, I Can Reset All Fields Easily
- **Description:**
  - The user can reset all inputs and outputs to their default states using a clear button.
- **Acceptance Criteria:**
  - Clicking the "Clear" button should empty all input fields and unlock all calculated fields.
  - The calculator should be ready for new input without any residual data from previous calculations.

### 8. As a User, I Can Expect Consistent and Responsive Behavior
- **Description:**
  - The calculator should update in real-time, with a smooth user experience across all interactions.
  - Any calculation, adjustment, or unit change should be reflected immediately without page reloads.
- **Acceptance Criteria:**
  - All user interactions should feel responsive and instantaneous.
  - The UI should not lag or freeze during calculations or input changes.

## Technical Requirements
- All calculators should adhere to these user stories to provide a uniform user experience.
- The calculators must handle all possible input combinations robustly and without errors.
- The UI should be intuitive, with all necessary features accessible without extensive user effort.

## Notes for Developers
- Ensure that the calculator logic covers all possible equations and combinations for the physics concepts involved.
- Implement extensive unit testing to validate that all user stories are met.
- The UI should be tested across different devices and browsers to ensure consistent behavior.
