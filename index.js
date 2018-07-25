// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
  const firstTwo =  drivers.slice(0,2);
  return firstTwo;
}

function returnLastTwoDrivers(drivers) {
  const lastTwo = drivers.slice(-2);
  return lastTwo;
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