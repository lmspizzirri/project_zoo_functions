const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animalName) => animalName.name === animal)
    .residents.every((element) => element.age >= age);
}

console.log(getAnimalsOlderThan('lions', 10));
module.exports = getAnimalsOlderThan;
