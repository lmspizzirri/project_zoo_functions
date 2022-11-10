const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalIdentify = data.employees.find((ppl) => ppl.id === id).responsibleFor[0];
  const animal = data.species.find((animalId) => animalId.id === animalIdentify)
  const oldestAnimal = animal.residents.reduce((acc, currentValue) => (acc.age > currentValue.age ? acc : currentValue));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}
getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');
module.exports = getOldestFromFirstSpecies;
