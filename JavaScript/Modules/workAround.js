/*
WorkAround
WorkAround is a human resources program that returns basic information about an employee, based on salary data. Using WorkAround, one can use an employee's salary data to:

return the cadre of the of the employee, in other words, whether this employee is entry level, mid level, or senior level.
calculate employee tax rates
return employee benefits
calculate employee bonuses
calculate the total amount an employee can be reimbursed based on the total value of their health, housing, or wellness benefits
WorkAround currently contains the data and functions in a single file, though they would like to modify the program so it makes use of JavaScript modules. Specifically, WorkAround you to demonstrate the different ways to export and import modules.
*/

import {getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} from './employee';
import Employee from './employee';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
