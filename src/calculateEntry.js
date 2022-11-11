const data = require('../data/zoo_data');

function countEntrants(parameter) {
  const visitors = { child: parameter.filter((check) => check.age < 18).length,
    adult: parameter.filter((check) => check.age >= 18 && check.age < 50).length,
    senior: parameter.filter((check) => check.age >= 50).length,
  };

  return visitors;
}
function calculateEntry(parameter) {
  if (parameter === undefined) {
    return 0;
  }
  if (Object.keys(parameter).length === 0) {
    return 0;
  }
  const visitors = countEntrants(parameter);
  const value = visitors.child * 20.99 + visitors.adult * 49.99 + visitors.senior * 24.99;
  return value;
}
module.exports = { calculateEntry, countEntrants };
