// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()];


function createFareMultiplier(multiplier) {
  return function(fare){ fare * multiplier};
}

function fareDoubler(fare) {
  const doubler = createFareMultiplier(2)
  return doubler(fare);
}

function fareTripler(fare) {
  const tripler = createFareMultiplier(3)
  return tripler(fare);
}

function selectingDifferentDrivers(drivers, fn) {
  
}