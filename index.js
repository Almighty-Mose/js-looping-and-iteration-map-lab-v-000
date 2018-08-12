// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function (name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(function (driver) {
    return Object.assign({}, driver, {firstName: })
  });
}