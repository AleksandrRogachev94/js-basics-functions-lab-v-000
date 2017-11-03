// Code your solution in this file!

function distanceFromHqInBlocks(currentStreet){
  let blocks = Math.abs(42 - currentStreet);
  return blocks;
}


function distanceFromHqInFeet(currentStreet){
  distanceFromHqInBlocks();
  distance = distanceFromHqInBlocks() * 264;
  return distance;
}
