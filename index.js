// Code your solution in this file!

function distanceFromHqInBlocks(currentStreet){
  blocks = Math.abs(42 - currentStreet);
  return blocks;
}


function distanceFromHqInFeet(currentStreet){
  distance = distanceFromHqInBlocks() * 264;
  return distance;
}
