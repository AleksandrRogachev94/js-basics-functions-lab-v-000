// Code your solution in this file!

function distanceFromHqInBlocks(currentStreet){
  blocks = Math.abs(42 - currentStreet);
  return blocks;
}

function distanceFromHqInFeet(blocks){
  distance = distanceFromHqInBlocks(currentStreet) * 264;
  return distance;
}
