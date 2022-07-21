// Code your solution in this file!

function distanceFromHqInBlocks(someNumber) {

  if (someNumber >= 42) {
    return someNumber - 42
  }

  else {
      return 42 - someNumber
  }

}

function distanceFromHqInFeet(someNumber) {
  return distanceFromHqInBlocks(someNumber) * 264


}

// function distanceTravelledInFeet() {

//   let result



//   return result
// }