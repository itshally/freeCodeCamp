/**
 * Author: itsHally
 * File: Where do I Belong.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
 * 
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 * 
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 **/

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    for(var x = 0, count = 0; x < arr.length; x++){
      if(arr[x] < num){
        count++;
      }
    }
    return count;
  }
  
  getIndexToIns([40, 60], 50);