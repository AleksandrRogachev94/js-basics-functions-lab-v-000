// Code your solution in this file!

function distanceFromHqInBlocks(currentStreet){
  console.log("In first function")
  let blocks = Math.abs(42 - currentStreet);
  return blocks;
}


function distanceFromHqInFeet(currentStreet){
  
  distance = distanceFromHqInBlocks(currentStreet) * 264;
  return distance;
}
