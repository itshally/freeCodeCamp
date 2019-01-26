/**
 * Author: itsHally
 * File: Reverse a String.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Reverse the provided string.
 * 
 * You may need to turn the string into an array before you can reverse it.
 * 
 * Your result must be a string.
 **/

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  reverseString("hello");