// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    
    return  drivers.filter(function(driver) {
        
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue){
   return driversWithRevenueOver(drivers, revenue).map( function (driver) {
       return driver.name;
   });
}

function exactMatch (drivers, driverQ) {
    return drivers.filter(function (driver) {
      let matches = false;
  
      for (const key in driverQ) {
        matches = driver[key] === matcher[key];
      }
  
      return matches;
    });
}

function exactMatchToList(drivers, driverQ){
    return exactMatch(drivers, driverQ).map( function(driver){
        return driver.name;
    });
}