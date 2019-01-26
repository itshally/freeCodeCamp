/**
 * Author: itsHally
 * File: Return Largest Numbers in Arrays.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
 * 
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 **/

function largestOfFour(arr) {
    // You can do this!
    return arr.map(x => Math.max(...x));
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);