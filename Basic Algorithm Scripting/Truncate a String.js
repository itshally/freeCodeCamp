/**
 * Author: itsHally
 * File: Truncate a String.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 **/

function truncateString(str, num) {
    // Clear out that junk in your trunk
    return (str.length <= num) ? str : str.substr(0, num) + "...";
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);