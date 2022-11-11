const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allAnimals = {};
    data.species.forEach((especie) => { allAnimals[especie.name] = especie.residents.length; });
    return allAnimals;
  }
  if (animal.sex === undefined) {
    return data.species.find((especie) => especie.name === animal.specie).residents.length;
  }
  return data.species.find((especie) => especie.name === animal.specie)
    .residents.filter((especie) => especie.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'giraffes' }));
module.exports = countAnimals;
