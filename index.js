// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

function selectingDrivers() {
  return [returnFirstTwoDrivers(), returnLastTwoDrivers()];
}

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