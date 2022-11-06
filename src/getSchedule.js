const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  return data.species.find((target) => target.name === scheduleTarget).availability;
  const weekSchedule = {};
  
}
module.exports = getSchedule;
