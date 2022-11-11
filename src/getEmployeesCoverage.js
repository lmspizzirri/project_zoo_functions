const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function infoById (object){
  const employee = data.employees.find((employee) => employee.id === object.id );
  if(!employee){
    throw new Error('Informações inválidas');
  }
  const employeeAnimals = employee.responsibleFor.map((animal) => 
  species.find((specie) => specie.id === animal).name);
  const location = employeeAnimals.map((animal) => species.find((specie)=> specie.name === animal).location);
  return ( (({id: employee.id, fullName: `${employee.firstName} ${employee.lastName}`, 
  species: employeeAnimals, locations: location })));
}

function infoByName (object){
  const employee = data.employees.find((employee) => employee.firstName === object.name || employee.lastName === object.name);
  if(!employee){
    throw new Error('Informações inválidas')
  }
  const employeeAnimals = employee.responsibleFor.map((animal) => 
  species.find((specie) => specie.id === animal).name);
  const location = employeeAnimals.map((animal) => species.find((specie)=> specie.name === animal).location);
  return ({id: employee.id, fullName: `${employee.firstName} ${employee.lastName}`, 
  species: employeeAnimals, locations: location });
}

function noInfo (){
  const info = employees.map((element) => ({id: element.id, fullName: `${element.firstName} ${element.lastName}`,
  species: species.filter((specie) => element.responsibleFor.includes(specie.id)).map((specieName) => specieName.name),
  locations: species.filter((specie) => element.responsibleFor.includes(specie.id)).map((specieLoc) => specieLoc.location)}));
  return (info)  
}

function getEmployeesCoverage(object) {
  if(!object){
    return noInfo();
  }
  if(Object.hasOwn(object, 'name')){
    return infoByName(object);    
  }
  if(Object.hasOwn(object, 'id')){
    return infoById(object)
  }
}
getEmployeesCoverage({ id:  '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });
module.exports = getEmployeesCoverage;
