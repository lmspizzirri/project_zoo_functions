const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return data.employees.filter((employees) => employees.managers.includes(managerId))
      .map((names) => `${names.firstName} ${names.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
