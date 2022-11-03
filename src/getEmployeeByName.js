const data = require('../data/zoo_data');

function getEmployeeByName(employee) {
  if (employee === undefined){
    return {};
  }
  return data.employees.find((employeeName) => employeeName.firstName === employee || employeeName.lastName === employee)
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
