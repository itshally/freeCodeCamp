/**
 * Author: itsHally
 * File: Find the Longest Word in a String.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Return the length of the longest word in the provided sentence.
 * 
 * Your response should be a number.
 **/

function findLongestWordLength(str) {

    return str.split(' ').sort((x, y) => x.length - y.length)[0].length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");