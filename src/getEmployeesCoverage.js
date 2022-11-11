const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function infoById(object) {
  const findEmployee = data.employees.find((employee) => employee.id === object.id);
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  }
  const employeeAnimals = findEmployee.responsibleFor.map((animal) =>
    species.find((specie) => specie.id === animal).name);
  const location = employeeAnimals.map((animal) =>
    species.find((specie) => specie.name === animal).location);
  return ((({ id: findEmployee.id,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
    species: employeeAnimals,
    locations: location })));
}

function infoByName(object) {
  const findEmployee = data.employees
    .find((employee) => employee.firstName === object.name || employee.lastName === object.name);
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  }
  const employeeAnimals = findEmployee.responsibleFor.map((animal) =>
    species.find((specie) => specie.id === animal).name);
  const location = employeeAnimals
    .map((animal) => species.find((specie) => specie.name === animal).location);
  return ({ id: findEmployee.id,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
    species: employeeAnimals,
    locations: location });
}

function noInfo() {
  const info = employees.map((element) => ({ id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: species.filter((specie) => element.responsibleFor
      .includes(specie.id)).map((specieName) => specieName.name),
    locations: species.filter((specie) => element
      .responsibleFor.includes(specie.id)).map((specieLoc) => specieLoc.location) }));
  return (info);
}

function getEmployeesCoverage(object) {
  if (!object) {
    return noInfo();
  }
  if ('name' in object) {
    return infoByName(object);
  }
  if ('id' in object) {
    return infoById(object);
  }
}

module.exports = getEmployeesCoverage;
