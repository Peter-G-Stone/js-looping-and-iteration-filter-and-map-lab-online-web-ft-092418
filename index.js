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

function exactMatch(drivers, driverQ){
    key = Object.keys(driverQ)[0];
    val = Object.values(driverQ)[0];
    
    return drivers.filter(function(driver){
        return driver[key] === val
    });
}

function exactMatchToList(drivers, driverQ){
    return exactMatch(drivers, driverQ).map( function(driver){
        return driver.name;
    });
}