/**
 * Author: itsHally
 * File: Title Case a Sentence.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * 
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 **/

function titleCase(str) {
    var strToArr = str.split(' ');
    for(var x = 0; x < strToArr.length; x++){
      strToArr[x] = strToArr[x].charAt(0).toUpperCase() + strToArr[x].slice(1).toLowerCase();
    }
    return strToArr.join(' ');
  }
  
  titleCase("I'm a little tea pot");