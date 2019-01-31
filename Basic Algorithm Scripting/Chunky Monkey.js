/**
 * Author: itsHally
 * File: Chunky Monkey.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 **/

function chunkArrayInGroups(arr, size) {
    // Break it up.
    for(var newArr = []; arr.length > 0;){
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);