// Code your solution in this file!
let blocks;

function distanceFromHqInBlocks(currentStreet){
  blocks = Math.abs(42 - currentStreet);
  return blocks;
}

function distanceFromHqInFeet(){
  distance = blocks * 264;
  return distance;
}
