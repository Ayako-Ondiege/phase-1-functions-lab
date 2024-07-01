// Code your solution in this file!

function distanceFromHqInBlocks(someValue){

    const hqBlockLocation =42;

    return Math.abs(someValue-hqBlockLocation);
}


console.log(distanceFromHqInBlocks(34));


function distanceFromHqInFeet(someValue){
    const noOfBlock = distanceFromHqInBlocks(someValue);
    const blockLength = 264;
    return (noOfBlock*blockLength);
}
 console.log(distanceFromHqInFeet(34));
// // }


function distanceTravelledInFeet(start, destination){
    const blockLengthTravelled = 264;
    const noOfBlocksTravelled = Math.abs(destination - start);
    return blockLengthTravelled*noOfBlocksTravelled;
}

console.log(distanceTravelledInFeet(41, 42));

function calculatesFarePrice(start, destination){
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400){
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled<=2000){
        return (distanceTravelled-400)*0.02;
    } else if (distanceTravelled >2000 && distanceTravelled<=2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
    
console.log(calculatesFarePrice(41,42));
console.log(calculatesFarePrice(39,42));
console.log(calculatesFarePrice(37,42));
console.log(calculatesFarePrice(20,42));