// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
  const lastTwo = function(drivers){ return [drivers[-2], drivers[-1]]};
  return lastTwo();
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