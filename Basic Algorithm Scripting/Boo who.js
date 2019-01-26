/**
 * Author: itsHally
 * File: Finders Keepers.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Check if a value is classified as a boolean primitive. Return true or false. 
 * 
 * Boolean primitives are true and false.
 **/

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return typeof bool == "boolean";
  }
  
  booWho(null);