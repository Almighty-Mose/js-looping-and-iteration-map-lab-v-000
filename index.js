// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function (name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(function (driver) {
    let name = driver.split(" ");
    return Object.assign({}, driver, { firstName: name[0], lastName: name[1] });
  });
}