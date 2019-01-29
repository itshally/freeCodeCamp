/**
 * Author: itsHally
 * File: Slice and Splice.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * You are given two arrays and an index.
 * 
 * Use the array methods slice and splice to copy each element of the first array into the second array, in order.
 * 
 * Begin inserting elements at index n of the second array.
 * 
 * Return the resulting array. The input arrays should remain the same after the function runs.
 **/

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    var newArr = arr2.slice();
    for(var x = 0; x < arr1.length; x++){
      newArr.splice(n++,0,arr1[x]);
    }
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);