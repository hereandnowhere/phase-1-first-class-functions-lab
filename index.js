const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    const fareMultiplier = function(){
        const multiplier = fare * fare;
        return multiplier;
    }
    return fareMultiplier;
}

const fareDoubler = function(fare){
    const doubleTrouble = createFareMultiplier(fare);
    return (doubleTrouble()/ fare) * 2;
}

function fareTripler(fare){
    const tripleTrouble = createFareMultiplier(fare);
    return (tripleTrouble()/ fare) * 3;
}

const selectDifferentDrivers = function(drivers, firstOrLast2){
    if (firstOrLast2 === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    } else {
        return returnLastTwoDrivers(drivers);
    }
}