// Code your solution in this file!

function distanceFromHqInBlocks(currentStreet){
  console.log("In first function")
  return Math.abs(42 - currentStreet);
}


function distanceFromHqInFeet(currentStreet){
  return distanceFromHqInBlocks(currentStreet) * 264;
}

function distanceTravelledInFeet (startPoint, endPoint){
  return distanceFromHqInFeet(Math.abs(endPoint - startPoint));

}
