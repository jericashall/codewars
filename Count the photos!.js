/*In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
A camera takes a photo of a car if it moves to the direction of the camera.

Task
Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.


Examples
For ">>." -> 2 photos were taken
For ".>>" -> 0 photos were taken
For ">.<." -> 3 photos were taken
For ".><.>>.<<" -> 11 photos were take*/


function countPhotos(road){
    let right = 0
    let left = 0
    let photos = 0
    let cameras = 0
    let camera = false
  
    for(let i = 0; i < road.length; i++)  {
      if(road[i] === '>') right++
      if(road[i] === '<') left++
      if(road[i] === '.' && camera === false) {
        cameras++
        photos += right
        left = 0
        camera = true
      } else if (road[i] === '.') {
        photos += right
        photos += left * cameras
        cameras++
        left = 0
      }
    }
  
    return photos + left * cameras;
  
  }

/*tests*/


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("count photos", function() {
  
  it("given: >.>..<, should return 8", function() {
    assert.deepEqual(countPhotos('>.>..<'), 8);
  });
  
  it("given: .><.>>.<<, should return 11", function() {
    assert.deepEqual(countPhotos('.><.>>.<<'), 11);
  });

  it("given: .>>>, should return 0", function() {
    assert.deepEqual(countPhotos('.>>>'), 0);
  });
  
  it("given: >..<<.>.<., should return 15", function() {
    assert.deepEqual(countPhotos('>..<<.>.<.'), 15);
  });

  it("given: .<>>..><.<<<<<., should return 34", function() {
    assert.deepEqual(countPhotos('.<>>..><.<<<<<.'), 34);
  });
  
  it("given: <..>>..>>.><.<.><..<, should return 57", function() {
    assert.deepEqual(countPhotos('<..>>..>>.><.<.><..<'), 57);
  });

  it("given: .<<, should return 0", function() {
    assert.deepEqual(countPhotos('<<.'), 0);
  });
  
  it("given: >>>.<<<, should return 6", function() {
    assert.deepEqual(countPhotos('>>>.<<<'), 6);
  });
  
  it("given: .., should return 0", function() {
    assert.deepEqual(countPhotos('..'), 0);
  });
  
  it("given: >>><<<, should return 0", function() {
    assert.deepEqual(countPhotos('>>><<<'), 0);
  });
  
  it("given: ..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>., should return 248", function() {
    assert.deepEqual(countPhotos('..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.'), 248);
  });
  
});