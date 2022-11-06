const data = require('../data/zoo_data');
const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];

function countEntrants(entrants) {  
  let visitors = {};  
  visitors.child = entrants.filter((check) => check.age < 18).length;
  visitors.adult = entrants.filter((check) => check.age >= 18 && check.age < 50).length;
  visitors.senior = entrants.filter((check) => check.age >= 50).length;
  return visitors;
}
console.log(countEntrants(entrants));
function calculateEntry(entrants) {
  if(entrants === undefined){
    return 0;
  }
  if(Object.keys(entrants).length === 0){
    return 0;
  }
  const visitors = countEntrants(entrants);
  let value = visitors.child * 20.99 + visitors.adult * 49.99 + visitors.senior * 24.99;
  return value;
}
module.exports = { calculateEntry, countEntrants };
